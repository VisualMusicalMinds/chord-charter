import { soundProfiles, waveforms, rhythmChordNotes, rhythmChordSecondNotes, rhythmChordFourthNotes, chordAlternateThirds, chordTypes, rhythmChordMajorSeventhNotes, rhythmChordSeventhNotes } from './config.js';
import { appState } from './state.js';

let ctx = null, masterGain = null, compressor = null;
let customVoiceWave = null;

export function getAudioContext() {
    return ctx;
}

export function setupCustomVoiceWave() {
  if (!ctx) return;
  const harmonics = 20;
  const real = new Float32Array(harmonics);
  const imag = new Float32Array(harmonics);
  real[1] = 1; real[2] = 0.15; real[3] = 0.1; real[4] = 0.05;
  for (let i = 5; i < harmonics; i++) real[i] = 0;
  customVoiceWave = ctx.createPeriodicWave(real, imag);
}

export async function ensureAudio() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain(); masterGain.gain.value = 1;
    compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -24; compressor.knee.value = 30; compressor.ratio.value = 12;
    compressor.attack.value = 0.003; compressor.release.value = 0.25;
    compressor.connect(ctx.destination); masterGain.connect(compressor);
    setupCustomVoiceWave();
  }
  if (!customVoiceWave) setupCustomVoiceWave();
  if (ctx.state !== "running") await ctx.resume();
}

function midiToFreq(n) {
  if (!n) return null;
  const notes = {'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,'E':4,'F':5,'F#':6,'Gb':6,'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,'B':11, 
                 'Cb':11, 'Fb':4, 'E#':5, 'B#':0, 'Bbb':9, 'Ebb':2, 'Abb':7, 'Dbb':0, 'Gbb':5,
                 'F##':7, 'C##':2, 'G##':9, 'D##':4, 'A##':0, 'E##':6 }; 
  let noteName = n.slice(0, -1);
  let octaveStr = n.slice(-1);

  if (n.length > 1 && (n[1] === 'b' || n[1] === '♭' || n[1] === '#' || n[1] === '♯')) {
    noteName = n.slice(0,2);
    octaveStr = n.slice(2);
    if (n.length > 2 && (n[2] === 'b' || n[2] === '♭' || n[2] === '#' || n[2] === '♯')) { 
        noteName = n.slice(0,3);
        octaveStr = n.slice(3);
    }
  }
  const octave = parseInt(octaveStr);
  if (notes[noteName] === undefined || isNaN(octave)) { return null; }
  return 440 * Math.pow(2, (notes[noteName]+(octave-4)*12-9)/12);
}

export async function playTriangleNotes(notes, extendDuration = false) {
  await ensureAudio(); 
  const profile = soundProfiles[appState.currentWaveform];
  if (!profile) { return; }
  let durationMultiplier = extendDuration ? 2 : 1;
  
  notes.forEach((note, i) => {
    if (!note) return; 
    const freq = midiToFreq(note);
    if (!freq) { return; }

    let osc, gainNode, lfo, lfoGain, filter; 
    gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    
    const staggeredStartTime = ctx.currentTime + 0.01 * i;
    const noteEndTime = staggeredStartTime + profile.duration * durationMultiplier;
    const voiceStopTime = noteEndTime + 0.08; 

    if (appState.currentWaveform === "voice" && customVoiceWave) {
      osc = ctx.createOscillator(); osc.setPeriodicWave(customVoiceWave); osc.frequency.value = freq;
      lfo = ctx.createOscillator(); lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(profile.vibratoFreq, staggeredStartTime); lfoGain.gain.setValueAtTime(profile.vibratoAmount, staggeredStartTime);
      lfo.connect(lfoGain); lfoGain.connect(osc.frequency); lfo.start(staggeredStartTime);
      filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq, staggeredStartTime); filter.Q.value = profile.filterQ;
      osc.connect(filter); filter.connect(gainNode);
      const attackTime = profile.attack, decayTime = 0.18, sustainLevel = profile.gain * 0.7, maxLevel = profile.gain * 1.0;
      gainNode.gain.linearRampToValueAtTime(maxLevel, staggeredStartTime + attackTime);
      gainNode.gain.linearRampToValueAtTime(sustainLevel, staggeredStartTime + attackTime + decayTime);
      gainNode.gain.linearRampToValueAtTime(0.001, noteEndTime);
      gainNode.connect(masterGain); osc.start(staggeredStartTime);
      osc.stop(voiceStopTime); lfo.stop(voiceStopTime);
    } 
    else if (appState.currentWaveform === "saw") {
      osc = ctx.createOscillator(); osc.type = "sawtooth"; osc.frequency.value = freq;
      if (profile.pitchBend) {
        osc.frequency.setValueAtTime(freq + profile.bendAmount, staggeredStartTime);
        osc.frequency.exponentialRampToValueAtTime(freq, staggeredStartTime + profile.bendTime);
      }
      const allpass = ctx.createBiquadFilter(); allpass.type = 'allpass';
      allpass.frequency.value = 800; allpass.Q.value = 5;
      filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq, staggeredStartTime);
      filter.frequency.linearRampToValueAtTime(profile.filterFreq * 0.5, noteEndTime);
      filter.Q.value = profile.filterQ;
      osc.connect(filter); filter.connect(allpass); allpass.connect(gainNode);
      gainNode.gain.linearRampToValueAtTime(profile.gain, staggeredStartTime + profile.attack);
      gainNode.gain.setValueAtTime(profile.gain, staggeredStartTime + profile.attack + profile.hold);
      gainNode.gain.exponentialRampToValueAtTime(0.001, noteEndTime);
      gainNode.connect(masterGain); osc.start(staggeredStartTime); osc.stop(noteEndTime);
    } 
    else if (appState.currentWaveform === "square") {
      osc = ctx.createOscillator(); osc.type = "square"; osc.frequency.value = freq;
      const highpass = ctx.createBiquadFilter(); highpass.type = 'highpass'; highpass.frequency.value = 80;
      filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq * 2, staggeredStartTime);
      filter.frequency.exponentialRampToValueAtTime(profile.filterFreq, staggeredStartTime + profile.attack + profile.hold);
      filter.Q.value = profile.filterQ;
      osc.connect(highpass); highpass.connect(filter); filter.connect(gainNode);
      gainNode.gain.linearRampToValueAtTime(profile.gain * 1.2, staggeredStartTime + profile.attack);
      let decayPoint = profile.gain * 0.5;
      if (extendDuration) decayPoint = profile.gain * 0.6;
      gainNode.gain.exponentialRampToValueAtTime(decayPoint, staggeredStartTime + profile.attack + profile.hold + (extendDuration ? 0.15 : 0.05) );
      gainNode.gain.exponentialRampToValueAtTime(0.001, noteEndTime);
      gainNode.connect(masterGain); osc.start(staggeredStartTime); osc.stop(noteEndTime);
    } 
    else if (appState.currentWaveform === "sine") {
      osc = ctx.createOscillator(); osc.type = "sine"; osc.frequency.value = freq;
      const harmonicOsc = ctx.createOscillator(); harmonicOsc.type = "sine"; harmonicOsc.frequency.value = freq * 2; 
      const harmonicGain = ctx.createGain(); harmonicGain.gain.value = 0.15; 
      filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      filter.frequency.setValueAtTime(profile.filterFreq, staggeredStartTime); filter.Q.value = profile.filterQ;
      osc.connect(filter); harmonicOsc.connect(harmonicGain); harmonicGain.connect(filter); filter.connect(gainNode);
      gainNode.gain.linearRampToValueAtTime(profile.gain, staggeredStartTime + profile.attack);
      gainNode.gain.setValueAtTime(profile.gain, staggeredStartTime + profile.attack + profile.hold * durationMultiplier);
      gainNode.gain.linearRampToValueAtTime(0.001, noteEndTime);
      gainNode.connect(masterGain); osc.start(staggeredStartTime); osc.stop(noteEndTime);
      harmonicOsc.start(staggeredStartTime); harmonicOsc.stop(noteEndTime);
    } 
    else { // Triangle (default/fallback)
      osc = ctx.createOscillator(); osc.type = "triangle"; osc.frequency.value = freq;
      filter = ctx.createBiquadFilter(); filter.type = 'lowpass';
      const triangleProfile = soundProfiles.triangle; 
      filter.frequency.setValueAtTime(triangleProfile.filterFreq, staggeredStartTime); filter.Q.value = triangleProfile.filterQ;
      osc.connect(filter); filter.connect(gainNode);
      gainNode.gain.linearRampToValueAtTime(triangleProfile.gain, staggeredStartTime + triangleProfile.attack);
      gainNode.gain.setValueAtTime(triangleProfile.gain, staggeredStartTime + triangleProfile.attack + triangleProfile.hold * durationMultiplier);
      gainNode.gain.linearRampToValueAtTime(0.012, staggeredStartTime + triangleProfile.duration * durationMultiplier); 
      gainNode.connect(masterGain); osc.start(staggeredStartTime);
      osc.stop(staggeredStartTime + triangleProfile.duration * durationMultiplier);
    }
  });
}

export async function playBrush() {
  if (!document.getElementById('brushToggle')?.checked) return;
  await ensureAudio(); const duration = 0.09, bufferSize = ctx.sampleRate * duration, buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0); for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource(); noise.buffer = buffer;
  const filter = ctx.createBiquadFilter(); filter.type = "bandpass"; filter.frequency.value = 2000; filter.Q.value = 1.8;
  const gainNode = ctx.createGain(); gainNode.gain.value = 0.5; gainNode.gain.setValueAtTime(0.5, ctx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
  noise.connect(filter).connect(gainNode).connect(masterGain); noise.start(); noise.stop(ctx.currentTime + duration);
}

export async function playBassDrum(customDuration) {
  await ensureAudio(); 
  const duration = customDuration || 0.19; 
  const osc = ctx.createOscillator(); osc.type = "sine";
  osc.frequency.setValueAtTime(140, ctx.currentTime); osc.frequency.exponentialRampToValueAtTime(42, ctx.currentTime + duration * 0.85);
  const gainNode = ctx.createGain(); gainNode.gain.setValueAtTime(1, ctx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gainNode).connect(masterGain); osc.start(); osc.stop(ctx.currentTime + duration);
}

export function getNotesToPlayForChord(chordName, isSplit, slotIdx, progData) {
    if (!chordName || !rhythmChordNotes[chordName]) return [];

    const s7 = isSplit ? progData.splitS7[slotIdx] : progData.s7[slotIdx];
    const s2 = isSplit ? progData.splitS2[slotIdx] : progData.s2[slotIdx];
    const s4 = isSplit ? progData.splitS4[slotIdx] : progData.s4[slotIdx];
    const sus = isSplit ? progData.splitSus[slotIdx] : progData.sus[slotIdx];
    const maj7 = isSplit ? progData.splitMaj7[slotIdx] : progData.maj7[slotIdx];
    const quality = isSplit ? progData.splitM[slotIdx] : progData.m[slotIdx];

    let notesToPlay = [];
    const baseRhythmNotes = rhythmChordNotes[chordName];
    if (!baseRhythmNotes) return [];

    if (baseRhythmNotes[0]) notesToPlay.push(baseRhythmNotes[0]);
    if (baseRhythmNotes[1]) notesToPlay.push(baseRhythmNotes[1]);
    if (baseRhythmNotes.length > 4 && baseRhythmNotes[4]) notesToPlay.push(baseRhythmNotes[4]);
    if (baseRhythmNotes[3]) notesToPlay.push(baseRhythmNotes[3]);

    if (sus) {
        if (s2 && rhythmChordSecondNotes[chordName]) notesToPlay.push(rhythmChordSecondNotes[chordName]);
        if (s4 && rhythmChordFourthNotes[chordName]) notesToPlay.push(rhythmChordFourthNotes[chordName]);
    } else {
        let thirdNoteToPlay = baseRhythmNotes[2];
        if (chordAlternateThirds[chordName] && quality !== 'none') {
            thirdNoteToPlay = chordAlternateThirds[chordName][quality === 'major' ? 'majorNote' : 'minorNote'];
        } else if (quality === 'none' && chordTypes[chordName] && chordAlternateThirds[chordName]) {
            const defaultQuality = chordTypes[chordName];
            if (defaultQuality === 'major' || defaultQuality === 'minor') {
                thirdNoteToPlay = chordAlternateThirds[chordName][defaultQuality === 'major' ? 'majorNote' : 'minorNote'];
            }
        }
        if (thirdNoteToPlay) notesToPlay.push(thirdNoteToPlay);
        if (s2 && rhythmChordSecondNotes[chordName]) notesToPlay.push(rhythmChordSecondNotes[chordName]);
        if (s4 && rhythmChordFourthNotes[chordName]) notesToPlay.push(rhythmChordFourthNotes[chordName]);
    }
    if (s7) {
        const seventhNoteToPlay = maj7 && rhythmChordMajorSeventhNotes[chordName] ? rhythmChordMajorSeventhNotes[chordName] : rhythmChordSeventhNotes[chordName];
        if (seventhNoteToPlay) notesToPlay.push(seventhNoteToPlay);
    }
    return notesToPlay.filter(n => n);
}
