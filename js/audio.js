import { appState } from './state.js';
import { 
    soundProfiles, 
    chordTones, 
    chordAlternateThirds,
    chordSevenths, 
    chordMajorSevenths, 
    chordSeconds, 
    chordFourths,
    rhythmChordNotes,
    rhythmChordSeventhNotes,
    rhythmChordMajorSeventhNotes,
    rhythmChordSecondNotes,
    rhythmChordFourthNotes
} from './config.js';

let audioContext;
let masterGain;

export async function ensureAudio() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioContext.createGain();
      masterGain.gain.value = 0.5;
      masterGain.connect(audioContext.destination);

    } catch (e) {
      console.error("AudioContext could not be created:", e);
    }
  }
  if (audioContext.state === 'suspended') {
    await audioContext.resume();
  }
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

export async function playBrush() {
  if (!document.getElementById('brushToggle')?.checked) return;
  await ensureAudio();
  if (!audioContext) return;
  const duration = 0.09, bufferSize = audioContext.sampleRate * duration, buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = audioContext.createBufferSource();
  noise.buffer = buffer;
  const filter = audioContext.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 2000;
  filter.Q.value = 1.8;
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.5;
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  noise.connect(filter).connect(gainNode).connect(masterGain);
  noise.start();
  noise.stop(audioContext.currentTime + duration);
}

export async function playBassDrum(customDuration) {
  await ensureAudio();
  if (!audioContext) return;
  const duration = customDuration || 0.19;
  const osc = audioContext.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(140, audioContext.currentTime);
  osc.frequency.exponentialRampToValueAtTime(42, audioContext.currentTime + duration * 0.85);
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  osc.connect(gainNode).connect(masterGain);
  osc.start();
  osc.stop(audioContext.currentTime + duration);
}


const A4 = 440;
const notesMap = { 'C': -9, 'C#': -8, 'Db': -8, 'D': -7, 'D#': -6, 'Eb': -6, 'E': -5, 'F': -4, 'F#': -3, 'Gb': -3, 'G': -2, 'G#': -1, 'Ab': -1, 'A': 0, 'A#': 1, 'Bb': 1, 'B': 2, 'B#': 3, 'E#': -4, 'Fb': -5 };

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
    if (!chordName || chordName === "empty" || !progData) return [];

    let notes = [...(rhythmChordNotes[chordName] || [])];
    
    // Determine which set of modifiers to use
    const s7 = isSplit ? progData.splitS7[slotIndex] : progData.s7[slotIndex];
    const maj7 = isSplit ? progData.splitMaj7[slotIndex] : progData.maj7[slotIndex];
    const s2 = isSplit ? progData.splitS2[slotIndex] : progData.s2[slotIndex];
    const s4 = isSplit ? progData.splitS4[slotIndex] : progData.s4[slotIndex];
    const m = isSplit ? progData.splitM[slotIndex] : progData.m[slotIndex];
    const sus = isSplit ? progData.splitSus[slotIndex] : progData.sus[slotIndex];

    // Handle Major/Minor quality toggle
    if (m !== 'none' && chordAlternateThirds[chordName]) {
        const thirdAlteration = chordAlternateThirds[chordName];
        const originalThird = chordTones[chordName] ? `${chordTones[chordName][1]}4` : null; // Assumes octave 4 for comparison
        
        const thirdIndex = notes.findIndex(n => n.startsWith(originalThird.slice(0, -1)));

        if (thirdIndex !== -1) {
            if (m === 'major') {
                notes[thirdIndex] = thirdAlteration.majorNote;
            } else if (m === 'minor') {
                notes[thirdIndex] = thirdAlteration.minorNote;
            }
        }
    }

    // Handle Sus chords
    if (sus) {
        // Remove the third from the chord
        const third = chordTones[chordName] ? chordTones[chordName][1] : null;
        if (third) {
            notes = notes.filter(n => !n.startsWith(third));
        }
    }

    // Add other modifications
    if (maj7 && rhythmChordMajorSeventhNotes[chordName]) {
        notes.push(rhythmChordMajorSeventhNotes[chordName]);
    } else if (s7 && rhythmChordSeventhNotes[chordName]) {
        notes.push(rhythmChordSeventhNotes[chordName]);
    }

    if (s2 && rhythmChordSecondNotes[chordName]) {
        notes.push(rhythmChordSecondNotes[chordName]);
    }
    if (s4 && rhythmChordFourthNotes[chordName]) {
        notes.push(rhythmChordFourthNotes[chordName]);
    }

    return notes;
}
