import { appState } from './state.js';
import { soundProfiles, chordTones, chordSevenths, chordMajorSevenths, chordSeconds, chordFourths } from './config.js';

let audioContext;
let masterGain;
let brushGain;
let bassDrumGain;

export async function ensureAudio() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioContext.createGain();
      masterGain.gain.value = 0.5;
      masterGain.connect(audioContext.destination);

      brushGain = audioContext.createGain();
      brushGain.gain.value = 0.3;
      brushGain.connect(masterGain);

      bassDrumGain = audioContext.createGain();
      bassDrumGain.gain.value = 0.8;
      bassDrumGain.connect(masterGain);

    } catch (e) {
      console.error("AudioContext could not be created:", e);
    }
  }
  if (audioContext.state === 'suspended') {
    await audioContext.resume();
  }
}

function playSound(buffer, gainNode, time) {
    if (!audioContext || !buffer) return;
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(gainNode);
    source.start(time);
}

function createOscillator(freq, type, time, soundProfile) {
    if (!audioContext) return;
    const osc = audioContext.createOscillator();
    const oscGain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.frequency.setValueAtTime(freq, time);
    osc.type = type;

    filter.type = 'lowpass';
    filter.frequency.value = soundProfile.filterFreq;
    filter.Q.value = soundProfile.filterQ;

    osc.connect(filter);
    filter.connect(oscGain);
    oscGain.connect(masterGain);

    // Envelope
    oscGain.gain.setValueAtTime(0, time);
    oscGain.gain.linearRampToValueAtTime(soundProfile.gain, time + soundProfile.attack);
    oscGain.gain.setValueAtTime(soundProfile.gain, time + soundProfile.attack + soundProfile.hold);
    oscGain.gain.linearRampToValueAtTime(0, time + soundProfile.attack + soundProfile.hold + soundProfile.release);
    
    // Pitch Bend for 'saw'
    if (soundProfile.pitchBend && type === 'saw') {
        osc.frequency.setValueAtTime(freq, time);
        osc.frequency.exponentialRampToValueAtTime(freq * (1 + soundProfile.bendAmount / 100), time + soundProfile.bendTime);
    }
    
    // Vibrato
    if (soundProfile.vibrato) {
        const vibrato = audioContext.createOscillator();
        const vibratoGain = audioContext.createGain();
        vibrato.frequency.setValueAtTime(soundProfile.vibratoFreq, time);
        vibratoGain.gain.setValueAtTime(soundProfile.vibratoAmount, time);
        vibrato.connect(vibratoGain);
        vibratoGain.connect(osc.frequency);
        vibrato.start(time);
        vibrato.stop(time + soundProfile.duration);
    }

    osc.start(time);
    osc.stop(time + soundProfile.duration);
}

export function playTriangleNotes(notes) {
  if (!notes || notes.length === 0) return;
  ensureAudio();
  const time = audioContext.currentTime;
  const soundProfile = soundProfiles[appState.currentWaveform];
  
  notes.forEach(note => {
    const freq = noteToFreq(note);
    if (freq) {
      createOscillator(freq, appState.currentWaveform, time, soundProfile);
    }
  });
}

let brushBuffer;
fetch('https://freesound.org/data/previews/36/36889_219354-lq.mp3')
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => { brushBuffer = buffer; })
    .catch(e => console.error("Error loading brush sound:", e));
    
export function playBrush() {
  ensureAudio();
  const brushCheckbox = document.getElementById('brushToggle');
  if (brushCheckbox && !brushCheckbox.checked) {
    return; 
  }
  if (brushBuffer) {
    playSound(brushBuffer, brushGain, audioContext.currentTime);
  }
}

let bassDrumBuffer;
fetch('https://freesound.org/data/previews/51/51241_46190-lq.mp3') 
    .then(response => response.arrayBuffer())
    .then(data => audioContext.decodeAudioData(data))
    .then(buffer => { bassDrumBuffer = buffer; })
    .catch(e => console.error("Error loading bass drum sound:", e));
    
export function playBassDrum() {
  ensureAudio();
  if (bassDrumBuffer) {
    playSound(bassDrumBuffer, bassDrumGain, audioContext.currentTime);
  }
}

const A4 = 440;
const notesMap = { 'C': -9, 'C#': -8, 'Db': -8, 'D': -7, 'D#': -6, 'Eb': -6, 'E': -5, 'F': -4, 'F#': -3, 'Gb': -3, 'G': -2, 'G#': -1, 'Ab': -1, 'A': 0, 'A#': 1, 'Bb': 1, 'B': 2 };

function noteToFreq(note) {
  const match = note.match(/([A-G][b#]?)(-?\d+)/);
  if (!match) return null;
  const [, name, octaveStr] = match;
  const octave = parseInt(octaveStr, 10);
  const semiToneOffset = notesMap[name];
  if (semiToneOffset === undefined) return null;

  const a4RelativeSemitones = (octave - 4) * 12 + semiToneOffset;
  return A4 * Math.pow(2, a4RelativeSemitones / 12);
}

export function getNotesToPlayForChord(chordName, isSplit, slotIndex, progData) {
    if (!chordName || !progData) return [];

    const baseNotes = (chordTones[chordName] || []).map(n => `${n}4`); 

    let notes = [...baseNotes];

    const s7 = isSplit ? progData.splitS7[slotIndex] : progData.s7[slotIndex];
    const maj7 = isSplit ? progData.splitMaj7[slotIndex] : progData.maj7[slotIndex];
    const s2 = isSplit ? progData.splitS2[slotIndex] : progData.s2[slotIndex];
    const s4 = isSplit ? progData.splitS4[slotIndex] : progData.s4[slotIndex];
    const m = isSplit ? progData.splitM[slotIndex] : progData.m[slotIndex];
    const sus = isSplit ? progData.splitSus[slotIndex] : progData.sus[slotIndex];

    if (maj7) notes.push(`${chordMajorSevenths[chordName]}4`);
    else if (s7) notes.push(`${chordSevenths[chordName]}4`);
    if (s2) notes.push(`${chordSeconds[chordName]}4`);
    if (s4) notes.push(`${chordFourths[chordName]}4`);
    
    // Handle major/minor quality and sus chords
    if (m !== 'none' || sus) {
        const thirdIndex = notes.findIndex(n => n.startsWith(baseNotes[1].slice(0, -1)));
        if (thirdIndex !== -1) {
            if (sus) {
                notes.splice(thirdIndex, 1); // Remove third for sus
            } else if (m === 'minor') {
                // This part needs more robust logic for sharps/flats if base third is altered
            } else if (m === 'major') {
                // This part needs more robust logic for sharps/flats if base third is altered
            }
        }
    }

    return notes;
}
