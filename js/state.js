import { waveforms, musicalKeys, timeSignatureNumerators } from './config.js';

// --- State Store ---
export const appState = {
    // Sound
    currentWaveformIndex: 1,
    get currentWaveform() { return waveforms[this.currentWaveformIndex]; },

    // Key & Scale
    currentKeyIndex: 0,
    get currentMusicalKey() { return musicalKeys[this.currentKeyIndex]; },
    availableScales: ['Major', 'Natural Minor'],
    currentScale: 'Major',

    // Time Signature
    currentTimeSignatureIndex: 0,

    // Progressions
    currentToggle: 'A', // Represents the progression whose data is loaded in the UI
    progressionA: ['', '', '', ''],
    progressionB: ['', '', '', ''],
    progressionC: ['', '', '', ''],
    progressionD: ['', '', '', ''],
    rhythmBoxesA: Array(10).fill(false),
    rhythmBoxesB: Array(10).fill(false),
    rhythmBoxesC: Array(10).fill(false),
    rhythmBoxesD: Array(10).fill(false),

    // Primary Chord Modifiers
    seventhA: [false, false, false, false], seventhB: [false, false, false, false], seventhC: [false, false, false, false], seventhD: [false, false, false, false],
    secondA: [false, false, false, false], secondB: [false, false, false, false], secondC: [false, false, false, false], secondD: [false, false, false, false],
    fourthA: [false, false, false, false], fourthB: [false, false, false, false], fourthC: [false, false, false, false], fourthD: [false, false, false, false],
    susA: [false, false, false, false], susB: [false, false, false, false], susC: [false, false, false, false], susD: [false, false, false, false],
    majSeventhA: [false, false, false, false], majSeventhB: [false, false, false, false], majSeventhC: [false, false, false, false], majSeventhD: [false, false, false, false],
    majorA: ['none', 'none', 'none', 'none'], majorB: ['none', 'none', 'none', 'none'], majorC: ['none', 'none', 'none', 'none'], majorD: ['none', 'none', 'none', 'none'],

    // Split Chord State
    splitChordActiveA: [false, false, false, false], splitChordActiveB: [false, false, false, false], splitChordActiveC: [false, false, false, false], splitChordActiveD: [false, false, false, false],
    splitChordValueA: ['', '', '', ''], splitChordValueB: ['', '', '', ''], splitChordValueC: ['', '', '', ''], splitChordValueD: ['', '', '', ''],

    // Split Chord Modifiers
    splitSeventhA: [false, false, false, false], splitSeventhB: [false, false, false, false], splitSeventhC: [false, false, false, false], splitSeventhD: [false, false, false, false],
    splitSecondA: [false, false, false, false], splitSecondB: [false, false, false, false], splitSecondC: [false, false, false, false], splitSecondD: [false, false, false, false],
    splitFourthA: [false, false, false, false], splitFourthB: [false, false, false, false], splitFourthC: [false, false, false, false], splitFourthD: [false, false, false, false],
    splitSusA: [false, false, false, false], splitSusB: [false, false, false, false], splitSusC: [false, false, false, false], splitSusD: [false, false, false, false],
    splitMajSeventhA: [false, false, false, false], splitMajSeventhB: [false, false, false, false], splitMajSeventhC: [false, false, false, false], splitMajSeventhD: [false, false, false, false],
    splitMajorA: ['none', 'none', 'none', 'none'], splitMajorB: ['none', 'none', 'none', 'none'], splitMajorC: ['none', 'none', 'none', 'none'], splitMajorD: ['none', 'none', 'none', 'none'],

    // Linking Progressions
    progressionLinkStates: { A: false, B: false, C: false, D: false },
    linkedProgressionSequence: [],
    currentLinkedProgressionIndex: 0,

    // Playback State
    isPlaying: false,
    rhythmInterval: null,
    slotIds: ['slot0', 'slot1', 'slot2', 'slot3'],
    slotHighlightStep: 0,
    pictureHighlightStep: 0,
    rhythmStep: 0,
};

export function getProgressionData(progLetter) {
  switch(progLetter) {
    case 'A': return { 
        p: appState.progressionA, r: appState.rhythmBoxesA, s7: appState.seventhA, s2: appState.secondA, s4: appState.fourthA, sus: appState.susA, maj7: appState.majSeventhA, m: appState.majorA, 
        splitActive: appState.splitChordActiveA, splitVal: appState.splitChordValueA, 
        splitS7: appState.splitSeventhA, splitS2: appState.splitSecondA, splitS4: appState.splitFourthA, splitSus: appState.splitSusA, splitMaj7: appState.splitMajSeventhA, splitM: appState.splitMajorA 
    };
    case 'B': return { 
        p: appState.progressionB, r: appState.rhythmBoxesB, s7: appState.seventhB, s2: appState.secondB, s4: appState.fourthB, sus: appState.susB, maj7: appState.majSeventhB, m: appState.majorB, 
        splitActive: appState.splitChordActiveB, splitVal: appState.splitChordValueB,
        splitS7: appState.splitSeventhB, splitS2: appState.splitSecondB, splitS4: appState.splitFourthB, splitSus: appState.splitSusB, splitMaj7: appState.splitMajSeventhB, splitM: appState.splitMajorB
    };
    case 'C': return { 
        p: appState.progressionC, r: appState.rhythmBoxesC, s7: appState.seventhC, s2: appState.secondC, s4: appState.fourthC, sus: appState.susC, maj7: appState.majSeventhC, m: appState.majorC, 
        splitActive: appState.splitChordActiveC, splitVal: appState.splitChordValueC,
        splitS7: appState.splitSeventhC, splitS2: appState.splitSecondC, splitS4: appState.splitFourthC, splitSus: appState.splitSusC, splitMaj7: appState.splitMajSeventhC, splitM: appState.splitMajorC
    };
    case 'D': return { 
        p: appState.progressionD, r: appState.rhythmBoxesD, s7: appState.seventhD, s2: appState.secondD, s4: appState.fourthD, sus: appState.susD, maj7: appState.majSeventhD, m: appState.majorD, 
        splitActive: appState.splitChordActiveD, splitVal: appState.splitChordValueD,
        splitS7: appState.splitSeventhD, splitS2: appState.splitSecondD, splitS4: appState.splitFourthD, splitSus: appState.splitSusD, splitMaj7: appState.splitMajSeventhD, splitM: appState.splitMajorD
    };
    default:  
      return getProgressionData(appState.currentToggle); 
  }
}

export function saveCurrentProgression() {
  const currentData = getProgressionData(appState.currentToggle);
  if (!currentData) return;

  document.querySelectorAll('.slot-box').forEach((slot, idx) => {
      const primarySelect = slot.querySelector('.primary-chord-select');
      const splitSelect = slot.querySelector('.split-chord-select');
      if (primarySelect) {
        currentData.p[idx] = primarySelect.value;
      }
      if (splitSelect) {
        currentData.splitVal[idx] = splitSelect.value;
      }
  });

  const rhythmBoxStates = Array.from(document.querySelectorAll('.bottom-rhythm-box')).map(box => box.classList.contains('active'));
  currentData.r.splice(0, currentData.r.length, ...rhythmBoxStates);

  const modifierClasses = ['.seventh-btn', '.second-btn', '.fourth-btn', '.sus-btn', '.maj-seventh-btn', '.add-split-chord-btn'];
  const modifierArrays = [currentData.s7, currentData.s2, currentData.s4, currentData.sus, currentData.maj7, currentData.splitActive];

  modifierClasses.forEach((className, i) => {
    const states = Array.from(document.querySelectorAll(className)).map(btn => btn.classList.contains('active'));
    modifierArrays[i].splice(0, modifierArrays[i].length, ...states);
  });
  
  const majorStates = [];
  document.querySelectorAll('.slot-box').forEach((slot, slotIndex) => {
      majorStates.push(currentData.m[slotIndex]); 
  });
  currentData.m.splice(0, currentData.m.length, ...majorStates);
}
