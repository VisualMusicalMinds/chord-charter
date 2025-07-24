import { waveforms, scaleKeyMaps } from './config.js';

export const appState = {
  // Playback and timing
  isPlaying: false,
  rhythmInterval: null,
  slotHighlightStep: 0,
  pictureHighlightStep: 0,
  rhythmStep: 0,
  
  // Current musical context
  currentWaveformIndex: 1,
  get currentWaveform() { return waveforms[this.currentWaveformIndex]; },
  
  currentKey: 'C',
  currentScale: 'Major',
  get availableKeys() { return scaleKeyMaps[this.currentScale] || scaleKeyMaps['Major']; },
  get currentKeyIndex() { return this.availableKeys.indexOf(this.currentKey); },

  availableScales: ['Major', 'Natural Minor'], // Expandable list of scales

  // ABCD toggle and linking state
  currentToggle: 'A',
  progressionLinkStates: { A: false, B: false, C: false, D: false },
  linkedProgressionSequence: [],
  currentLinkedProgressionIndex: 0,
  slotIds: ['slot0', 'slot1', 'slot2', 'slot3'],

  // Progression Data for A
  progressionA: ['', '', '', ''],
  rhythmBoxesA: Array(10).fill(false),
  seventhA: [false, false, false, false],
  secondA: [false, false, false, false],
  fourthA: [false, false, false, false],
  susA: [false, false, false, false],
  majSeventhA: [false, false, false, false],
  majorA: ['none', 'none', 'none', 'none'],
  splitChordActiveA: [false, false, false, false],
  splitChordValueA: ['', '', '', ''],
  splitSeventhA: [false, false, false, false],
  splitSecondA: [false, false, false, false],
  splitFourthA: [false, false, false, false],
  splitSusA: [false, false, false, false],
  splitMajSeventhA: [false, false, false, false],
  splitMajorA: ['none', 'none', 'none', 'none'],

  // Progression Data for B
  progressionB: ['', '', '', ''],
  rhythmBoxesB: Array(10).fill(false),
  seventhB: [false, false, false, false],
  secondB: [false, false, false, false],
  fourthB: [false, false, false, false],
  susB: [false, false, false, false],
  majSeventhB: [false, false, false, false],
  majorB: ['none', 'none', 'none', 'none'],
  splitChordActiveB: [false, false, false, false],
  splitChordValueB: ['', '', '', ''],
  splitSeventhB: [false, false, false, false],
  splitSecondB: [false, false, false, false],
  splitFourthB: [false, false, false, false],
  splitSusB: [false, false, false, false],
  splitMajSeventhB: [false, false, false, false],
  splitMajorB: ['none', 'none', 'none', 'none'],

  // Progression Data for C
  progressionC: ['', '', '', ''],
  rhythmBoxesC: Array(10).fill(false),
  seventhC: [false, false, false, false],
  secondC: [false, false, false, false],
  fourthC: [false, false, false, false],
  susC: [false, false, false, false],
  majSeventhC: [false, false, false, false],
  majorC: ['none', 'none', 'none', 'none'],
  splitChordActiveC: [false, false, false, false],
  splitChordValueC: ['', '', '', ''],
  splitSeventhC: [false, false, false, false],
  splitSecondC: [false, false, false, false],
  splitFourthC: [false, false, false, false],
  splitSusC: [false, false, false, false],
  splitMajSeventhC: [false, false, false, false],
  splitMajorC: ['none', 'none', 'none', 'none'],

  // Progression Data for D
  progressionD: ['', '', '', ''],
  rhythmBoxesD: Array(10).fill(false),
  seventhD: [false, false, false, false],
  secondD: [false, false, false, false],
  fourthD: [false, false, false, false],
  susD: [false, false, false, false],
  majSeventhD: [false, false, false, false],
  majorD: ['none', 'none', 'none', 'none'],
  splitChordActiveD: [false, false, false, false],
  splitChordValueD: ['', '', '', ''],
  splitSeventhD: [false, false, false, false],
  splitSecondD: [false, false, false, false],
  splitFourthD: [false, false, false, false],
  splitSusD: [false, false, false, false],
  splitMajSeventhD: [false, false, false, false],
  splitMajorD: ['none', 'none', 'none', 'none'],

  // Time Signature
  currentTimeSignatureIndex: 0,
};

export function getProgressionData(progLetter) {
  switch(progLetter) {
    case 'A': return { p: appState.progressionA, r: appState.rhythmBoxesA, s7: appState.seventhA, s2: appState.secondA, s4: appState.fourthA, sus: appState.susA, maj7: appState.majSeventhA, m: appState.majorA, splitActive: appState.splitChordActiveA, splitVal: appState.splitChordValueA, splitS7: appState.splitSeventhA, splitS2: appState.splitSecondA, splitS4: appState.splitFourthA, splitSus: appState.splitSusA, splitMaj7: appState.splitMajSeventhA, splitM: appState.splitMajorA };
    case 'B': return { p: appState.progressionB, r: appState.rhythmBoxesB, s7: appState.seventhB, s2: appState.secondB, s4: appState.fourthB, sus: appState.susB, maj7: appState.majSeventhB, m: appState.majorB, splitActive: appState.splitChordActiveB, splitVal: appState.splitChordValueB, splitS7: appState.splitSeventhB, splitS2: appState.splitSecondB, splitS4: appState.splitFourthB, splitSus: appState.splitSusB, splitMaj7: appState.splitMajSeventhB, splitM: appState.splitMajorB };
    case 'C': return { p: appState.progressionC, r: appState.rhythmBoxesC, s7: appState.seventhC, s2: appState.secondC, s4: appState.fourthC, sus: appState.susC, maj7: appState.majSeventhC, m: appState.majorC, splitActive: appState.splitChordActiveC, splitVal: appState.splitChordValueC, splitS7: appState.splitSeventhC, splitS2: appState.splitSecondC, splitS4: appState.splitFourthC, splitSus: appState.splitSusC, splitMaj7: appState.splitMajSeventhC, splitM: appState.splitMajorC };
    case 'D': return { p: appState.progressionD, r: appState.rhythmBoxesD, s7: appState.seventhD, s2: appState.secondD, s4: appState.fourthD, sus: appState.susD, maj7: appState.majSeventhD, m: appState.majorD, splitActive: appState.splitChordActiveD, splitVal: appState.splitChordValueD, splitS7: appState.splitSeventhD, splitS2: appState.splitSecondD, splitS4: appState.splitFourthD, splitSus: appState.splitSusD, splitMaj7: appState.splitMajSeventhD, splitM: appState.splitMajorD };
    default: return null;
  }
}

export function saveCurrentProgression() {
  const currentData = getProgressionData(appState.currentToggle);
  if (!currentData) return;
  // This function might seem redundant now, but it's a good pattern
  // in case saving becomes more complex (e.g., localStorage)
}
