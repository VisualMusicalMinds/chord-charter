// --- Sound Synthesis Variables ---
export const waveforms = ['sine', 'triangle', 'square', 'saw', 'voice'];

// --- Key and Scale Data ---
export const displayKeys = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

export const keyMap = {
    'C': { 'Major': 'C', 'Natural Minor': 'C', 'Harmonic Minor': 'C' },
    'C#/Db': { 'Major': 'Db', 'Natural Minor': 'C#', 'Harmonic Minor': 'C#' },
    'D': { 'Major': 'D', 'Natural Minor': 'D', 'Harmonic Minor': 'D' },
    'D#/Eb': { 'Major': 'Eb', 'Natural Minor': 'Eb', 'Harmonic Minor': 'Eb' },
    'E': { 'Major': 'E', 'Natural Minor': 'E', 'Harmonic Minor': 'E' },
    'F': { 'Major': 'F', 'Natural Minor': 'F', 'Harmonic Minor': 'F' },
    'F#/Gb': { 'Major': 'Gb', 'Natural Minor': 'F#', 'Harmonic Minor': 'F#' },
    'G': { 'Major': 'G', 'Natural Minor': 'G', 'Harmonic Minor': 'G' },
    'G#/Ab': { 'Major': 'Ab', 'Natural Minor': 'G#', 'Harmonic Minor': 'G#' },
    'A': { 'Major': 'A', 'Natural Minor': 'A', 'Harmonic Minor': 'A' },
    'A#/Bb': { 'Major': 'Bb', 'Natural Minor': 'Bb', 'Harmonic Minor': 'Bb' },
    'B': { 'Major': 'B', 'Natural Minor': 'B', 'Harmonic Minor': 'B' }
};

// --- Time Signature Variables ---
export const timeSignatureNumerators = [4, 3, 2, 5];

export const optionColors = {
    'C': { background: '#F44336', text: '#fff' },
    'D': { background: '#FF9800', text: '#fff' },
    'E': { background: '#FFD600', text: '#000' },
    'F': { background: '#4CAF50', text: '#fff' },
    'G': { background: '#17b99a', text: '#fff' },
    'A': { background: '#1760af', text: '#fff' },
    'B': { background: '#9C27B0', text: '#fff' }
};

// --- Chord Data for Each Key ---
const majorKeyChordMap = {
  'C': [ { value: 'C',  display: 'C / I' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Em', display: 'Em / iii' }, { value: 'F',  display: 'F / IV' }, { value: 'G',  display: 'G / V' }, { value: 'Am', display: 'Am / vi' }, { value: 'Bb', display: 'Bb / bVII' } ],
  'Db': [ { value: 'Db', display: 'Db / I' }, { value: 'Ebm',display: 'Ebm / ii' }, { value: 'Fm', display: 'Fm / iii' }, { value: 'Gb', display: 'Gb / IV' }, { value: 'Ab', display: 'Ab / V' }, { value: 'Bbm',display: 'Bbm / vi' }, { value: 'Cb', display: 'Cb / bVII' } ],
  'D': [ { value: 'D',  display: 'D / I' }, { value: 'Em', display: 'Em / ii' }, { value: 'F#m',display: 'F#m / iii' }, { value: 'G',  display: 'G / IV' }, { value: 'A',  display: 'A / V' }, { value: 'Bm', display: 'Bm / vi' }, { value: 'C',  display: 'C / bVII' } ],
  'Eb': [ { value: 'Eb', display: 'Eb / I' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Gm', display: 'Gm / iii' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Cm', display: 'Cm / vi' }, { value: 'Db', display: 'Db / bVII' } ],
  'E': [ { value: 'E',  display: 'E / I' }, { value: 'F#m',display: 'F#m / ii' }, { value: 'G#m',display: 'G#m / iii' }, { value: 'A',  display: 'A / IV' }, { value: 'B',  display: 'B / V' }, { value: 'C#m',display: 'C#m / vi' }, { value: 'D',  display: 'D / bVII' } ],
  'F': [ { value: 'F',  display: 'F / I' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Am', display: 'Am / iii' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'C',  display: 'C / V' }, { value: 'Dm', display: 'Dm / vi' }, { value: 'Eb', display: 'Eb / bVII' } ],
  'Gb': [ { value: 'Gb', display: 'Gb / I' }, { value: 'Abm',display: 'Abm / ii' }, { value: 'Bbm',display: 'Bbm / iii' }, { value: 'Cb', display: 'Cb / IV' },  { value: 'Db', display: 'Db / V' }, { value: 'Ebm',display: 'Ebm / vi' }, { value: 'Fb', display: 'Fb / bVII' } ],
  'G': [ { value: 'G',  display: 'G / I' }, { value: 'Am', display: 'Am / ii' }, { value: 'Bm', display: 'Bm / iii' }, { value: 'C',  display: 'C / IV' }, { value: 'D',  display: 'D / V' }, { value: 'Em', display: 'Em / vi' }, { value: 'F',  display: 'F / bVII' } ],
  'Ab': [ { value: 'Ab', display: 'Ab / I' }, { value: 'Bbm',display: 'Bbm / ii' }, { value: 'Cm', display: 'Cm / iii' }, { value: 'Db', display: 'Db / IV' }, { value: 'Eb', display: 'Eb / V' }, { value: 'Fm', display: 'Fm / vi' }, { value: 'Gb', display: 'Gb / bVII' } ],
  'A': [ { value: 'A',  display: 'A / I' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'C#m',display: 'C#m / iii' }, { value: 'D',  display: 'D / IV' }, { value: 'E',  display: 'E / V' }, { value: 'F#m',display: 'F#m / vi' }, { value: 'G',  display: 'G / bVII' } ],
  'Bb': [ { value: 'Bb', display: 'Bb / I' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Dm', display: 'Dm / iii' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'F',  display: 'F / V' }, { value: 'Gm', display: 'Gm / vi' }, { value: 'Ab', display: 'Ab / bVII' } ],
  'B': [ { value: 'B',  display: 'B / I' }, { value: 'C#m',display: 'C#m / ii' }, { value: 'D#m',display: 'D#m / iii' }, { value: 'E',  display: 'E / IV' }, { value: 'F#', display: 'F# / V' }, { value: 'G#m',display: 'G#m / vi' }, { value: 'A',  display: 'A / bVII' } ]
};

const naturalMinorKeyChordMap = {
    'C': [ { value: 'Cm', display: 'Cm / i' }, { value: 'Gm', display: 'Gm / v' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Bb', display: 'Bb / bVII' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'Ddim', display: 'Ddim / ii°' } ],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'G#m', display: 'G#m / v' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'A', display: 'A / bVI' }, { value: 'B', display: 'B / bVII' }, { value: 'E', display: 'E / bIII' }, { value: 'D#dim', display: 'D#dim / ii°' } ],
    'D': [ { value: 'Dm', display: 'Dm / i' }, { value: 'Am', display: 'Am / v' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'C', display: 'C / bVII' }, { value: 'F', display: 'F / bIII' }, { value: 'Edim', display: 'Edim / ii°' } ],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'Bbm', display: 'Bbm / v' }, { value: 'Abm', display: 'Abm / iv' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'Db', display: 'Db / bVII' }, { value: 'Gb', display: 'Gb / bIII' }, { value: 'Fdim', display: 'Fdim / ii°' } ],
    'E': [ { value: 'Em', display: 'Em / i' }, { value: 'Bm', display: 'Bm / v' }, { value: 'Am', display: 'Am / iv' }, { value: 'C', display: 'C / bVI' }, { value: 'D', display: 'D / bVII' }, { value: 'G', display: 'G / bIII' }, { value: 'F#dim', display: 'F#dim / ii°' } ],
    'F': [ { value: 'Fm', display: 'Fm / i' }, { value: 'Cm', display: 'Cm / v' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Eb', display: 'Eb / bVII' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Gdim', display: 'Gdim / ii°' } ],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'C#m', display: 'C#m / v' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'D', display: 'D / bVI' }, { value: 'E', display: 'E / bVII' }, { value: 'A', display: 'A / bIII' }, { value: 'G#dim', display: 'G#dim / ii°' } ],
    'G': [ { value: 'Gm', display: 'Gm / i' }, { value: 'Dm', display: 'Dm / v' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'F', display: 'F / bVII' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'Adim', display: 'Adim / ii°' } ],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'D#m', display: 'D#m / v' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'E', display: 'E / bVI' }, { value: 'F#', display: 'F# / bVII' }, { value: 'B', display: 'B / bIII' }, { value: 'A#dim', display: 'A#dim / ii°' } ],
    'A': [ { value: 'Am', display: 'Am / i' }, { value: 'Em', display: 'Em / v' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'F', display: 'F / bVI' }, { value: 'G', display: 'G / bVII' }, { value: 'C', display: 'C / bIII' }, { value: 'Bdim', display: 'Bdim / ii°' } ],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'Fm', display: 'Fm / v' }, { value: 'Ebm', display: 'Ebm / iv' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Ab', display: 'Ab / bVII' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Cdim', display: 'Cdim / ii°' } ],
    'B': [ { value: 'Bm', display: 'Bm / i' }, { value: 'F#m', display: 'F#m / v' }, { value: 'Em', display: 'Em / iv' }, { value: 'G', display: 'G / bVI' }, { value: 'A', display: 'A / bVII' }, { value: 'D', display: 'D / bIII' }, { value: 'C#dim', display: 'C#dim / ii°' } ]
};

const harmonicMinorKeyChordMap = {
    'C': [
        { value: 'Cm', display: 'Cm / i' },
        { value: 'G', display: 'G / V' },
        { value: 'Fm', display: 'Fm / iv' },
        { value: 'Ab', display: 'Ab / bVI' },
        { value: 'Bdim', display: 'Bdim / vii°' },
        { value: 'Ebaug', display: 'Eb aug / bIII+' },
        { value: 'Db', display: 'Db / bII' },
        { value: 'Eb', display: 'Eb / bIII' },
        { value: 'F', display: 'F / IV' }
    ],
    'C#': [
        { value: 'C#m', display: 'C#m / i' },
        { value: 'G#', display: 'G# / V' },
        { value: 'F#m', display: 'F#m / iv' },
        { value: 'A', display: 'A / bVI' },
        { value: 'B#dim', display: 'B#dim / vii°' },
        { value: 'Eaug', display: 'E aug / bIII+' },
        { value: 'D', display: 'D / bII' },
        { value: 'E', display: 'E / bIII' },
        { value: 'F#', display: 'F# / IV' }
    ],
    'D': [
        { value: 'Dm', display: 'Dm / i' },
        { value: 'A', display: 'A / V' },
        { value: 'Gm', display: 'Gm / iv' },
        { value: 'Bb', display: 'Bb / bVI' },
        { value: 'C#dim', display: 'C#dim / vii°' },
        { value: 'Faug', display: 'F aug / bIII+' },
        { value: 'Eb', display: 'Eb / bII' },
        { value: 'F', display: 'F / bIII' },
        { value: 'G', display: 'G / IV' }
    ],
    'Eb': [
        { value: 'Ebm', display: 'Ebm / i' },
        { value: 'Bb', display: 'Bb / V' },
        { value: 'Abm', display: 'Abm / iv' },
        { value: 'Cb', display: 'Cb / bVI' },
        { value: 'Ddim', display: 'Ddim / vii°' },
        { value: 'Gbaug', display: 'Gb aug / bIII+' },
        { value: 'Fb', display: 'Fb / bII' },
        { value: 'Gb', display: 'Gb / bIII' },
        { value: 'Ab', display: 'Ab / IV' }
    ],
    'E': [
        { value: 'Em', display: 'Em / i' },
        { value: 'B', display: 'B / V' },
        { value: 'Am', display: 'Am / iv' },
        { value: 'C', display: 'C / bVI' },
        { value: 'D#dim', display: 'D#dim / vii°' },
        { value: 'Gaug', display: 'G aug / bIII+' },
        { value: 'F', display: 'F / bII' },
        { value: 'G', display: 'G / bIII' },
        { value: 'A', display: 'A / IV' }
    ],
    'F': [
        { value: 'Fm', display: 'Fm / i' },
        { value: 'C', display: 'C / V' },
        { value: 'Bbm', display: 'Bbm / iv' },
        { value: 'Db', display: 'Db / bVI' },
        { value: 'Edim', display: 'Edim / vii°' },
        { value: 'Abaug', display: 'Ab aug / bIII+' },
        { value: 'Gb', display: 'Gb / bII' },
        { value: 'Ab', display: 'Ab / bIII' },
        { value: 'Bb', display: 'Bb / IV' }
    ],
    'F#': [
        { value: 'F#m', display: 'F#m / i' },
        { value: 'C#', display: 'C# / V' },
        { value: 'Bm', display: 'Bm / iv' },
        { value: 'D', display: 'D / bVI' },
        { value: 'E#dim', display: 'E#dim / vii°' },
        { value: 'Aaug', display: 'A aug / bIII+' },
        { value: 'G', display: 'G / bII' },
        { value: 'A', display: 'A / bIII' },
        { value: 'B', display: 'B / IV' }
    ],
    'G': [
        { value: 'Gm', display: 'Gm / i' },
        { value: 'D', display: 'D / V' },
        { value: 'Cm', display: 'Cm / iv' },
        { value: 'Eb', display: 'Eb / bVI' },
        { value: 'F#dim', display: 'F#dim / vii°' },
        { value: 'Bbaug', display: 'Bb aug / bIII+' },
        { value: 'Ab', display: 'Ab / bII' },
        { value: 'Bb', display: 'Bb / bIII' },
        { value: 'C', display: 'C / IV' }
    ],
    'G#': [
        { value: 'G#m', display: 'G#m / i' },
        { value: 'D#', display: 'D# / V' },
        { value: 'C#m', display: 'C#m / iv' },
        { value: 'E', display: 'E / bVI' },
        { value: 'F##dim', display: 'F##dim / vii°' },
        { value: 'Baug', display: 'B aug / bIII+' },
        { value: 'A', display: 'A / bII' },
        { value: 'B', display: 'B / bIII' },
        { value: 'C#', display: 'C# / IV' }
    ],
    'A': [
        { value: 'Am', display: 'Am / i' },
        { value: 'E', display: 'E / V' },
        { value: 'Dm', display: 'Dm / iv' },
        { value: 'F', display: 'F / bVI' },
        { value: 'G#dim', display: 'G#dim / vii°' },
        { value: 'Caug', display: 'C aug / bIII+' },
        { value: 'Bb', display: 'Bb / bII' },
        { value: 'C', display: 'C / bIII' },
        { value: 'D', display: 'D / IV' }
    ],
    'Bb': [
        { value: 'Bbm', display: 'Bbm / i' },
        { value: 'F', display: 'F / V' },
        { value: 'Ebm', display: 'Ebm / iv' },
        { value: 'Gb', display: 'Gb / bVI' },
        { value: 'Adim', display: 'Adim / vii°' },
        { value: 'Dbaug', display: 'Db aug / bIII+' },
        { value: 'Cb', display: 'Cb / bII' },
        { value: 'Db', display: 'Db / bIII' },
        { value: 'Eb', display: 'Eb / IV' }
    ],
    'B': [
        { value: 'Bm', display: 'Bm / i' },
        { value: 'F#', display: 'F# / V' },
        { value: 'Em', display: 'Em / iv' },
        { value: 'G', display: 'G / bVI' },
        { value: 'A#dim', display: 'A#dim / vii°' },
        { value: 'Daug', display: 'D aug / bIII+' },
        { value: 'C', display: 'C / bII' },
        { value: 'D', display: 'D / bIII' },
        { value: 'E', display: 'E / IV' }
    ]
};

// --- Structure for all scale maps ---
export const scaleChordMaps = {
  'Major': majorKeyChordMap,
  'Natural Minor': naturalMinorKeyChordMap,
  'Harmonic Minor': harmonicMinorKeyChordMap,
};

// --- Create a master list of all unique chords ---
const allMajorChords = Object.values(majorKeyChordMap).flat().map(c => c.value);
const allMinorChords = Object.values(naturalMinorKeyChordMap).flat().map(c => c.value);
const allHarmonicMinorChords = Object.values(harmonicMinorKeyChordMap).flat().map(c => c.value);
export const allChords = [...new Set([...allMajorChords, ...allMinorChords, ...allHarmonicMinorChords])].sort();

export const allChordOptions = allChords.map(chordValue => {
    // Find the best display name (e.g., from the key of C if possible)
    let displayName = chordValue;
    // Prioritize finding a display name from the Major scale maps
    for (const key in majorKeyChordMap) {
        const found = majorKeyChordMap[key].find(c => c.value === chordValue);
        if (found) {
            displayName = found.display;
            return { value: chordValue, display: displayName };
        }
    }
    // If not in Major, check Natural Minor
    for (const key in naturalMinorKeyChordMap) {
        const found = naturalMinorKeyChordMap[key].find(c => c.value === chordValue);
        if (found) {
            displayName = found.display;
            return { value: chordValue, display: displayName };
        }
    }
    // If not in Natural Minor, check Harmonic Minor
    for (const key in harmonicMinorKeyChordMap) {
        const found = harmonicMinorKeyChordMap[key].find(c => c.value === chordValue);
        if (found) {
            displayName = found.display;
            return { value: chordValue, display: displayName };
        }
    }
    return { value: chordValue, display: displayName };
});

export const songs = {
  "eagle-view-song": {
    key: "D",
    bpm: 136,
    progressions: {
      A: { 
        chords: ["D", "G", "A", "G"],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      B: { 
        chords: ["D", "G", "A", "D"],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      C: { 
        chords: ["A", "D", "A", "D"],
        rhythm: [true, true, false, true, false, true, true, false],
        modifiers: [ 
          { seventh: true,  second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: true,  second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      D: { 
        chords: ["A", "D", "E", "A"],
        rhythm: [true, true, false, true, false, true, true, true],
        modifiers: [ 
          { seventh: true,  second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'major'},
          { seventh: true,  second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      }
    }
  },
  "shake-the-papaya": {
    key: "E",
    bpm: 120,
    progressions: {
      A: { 
        chords: ["E", "F#m", "B", "E"],
        rhythm: [true, true, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: true, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      B: { 
        chords: ["", "", "", ""],
        rhythm: Array(8).fill(false),
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      C: { 
        chords: ["", "", "", ""],
        rhythm: Array(8).fill(false),
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      D: { 
        chords: ["", "", "", ""],
        rhythm: Array(8).fill(false),
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      }
    }
  },
  "count-on-me": {
    key: "C",
    bpm: 86,
    progressions: {
      A: { 
        chords: ["C", "Em", "Am", "F"],
        splitVal: ["", "", "G", ""],
        splitActive: [false, false, true, false],
        rhythm: [true, false, false, true, false, true, true, true],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      B: { 
        chords: ["C", "Em", "Am", "F"],
        splitVal: ["", "", "G", ""],
        splitActive: [false, false, true, false],
        rhythm: [true, false, false, true, false, true, true, true],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      C: { 
        chords: ["C", "Em", "Am", "F"],
        splitVal: ["", "", "G", ""],
        splitActive: [false, false, true, false],
        rhythm: [true, false, false, true, false, true, true, true],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      D: { 
        chords: ["Dm", "Em", "F", "G"],
        rhythm: [true, false, false, true, false, true, true, true],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      }
    }
  },
  "country-roads": {
    key: "G",
    bpm: 86,
    progressions: {
      A: { 
        chords: ["G", "Em", "D", "C"],
        splitVal: ["", "", "", "G"],
        splitActive: [false, false, false, true],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      B: { 
        chords: ["G", "Em", "D", "C"],
        splitVal: ["", "", "", "G"],
        splitActive: [false, false, false, true],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      C: { 
        chords: ["G", "D", "Em", "C"],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      },
      D: { 
        chords: ["G", "D", "C", "G"],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' },
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }
        ]
      }
    }
  },
  "yesterday": {
    key: "C",
    bpm: 80,
    progressions: {
      A: { 
        chords: ["F", "Em", "Dm", "Bb"],
        splitVal: ["", "A", "Dm", "C"],
        splitActive: [false, true, true, true],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }, // F
          { seventh: true, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Em7
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Dm
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }  // Bb
        ],
        splitModifiers: [
          {}, // F
          { seventh: true }, // A7
          { seventh: true }, // Dm7
          { seventh: true }  // C7
        ]
      },
      B: { 
        chords: ["F", "Dm", "Bb", "Em"],
        splitVal: ["", "G", "F", "A"],
        splitActive: [false, true, true, true],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }, // F
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Dm
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }, // Bb
          { seventh: true, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }  // Em7
        ],
        splitModifiers: [
          {}, // F
          { seventh: true }, // G7
          {}, // F
          { seventh: true }  // A7
        ]
      },
      C: { 
        chords: ["Dm", "Gm", "F", "Em"],
        splitVal: ["Bb", "C", "", "A"],
        splitActive: [true, true, false, true],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: true, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Dm7
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Gm
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }, // F
          { seventh: true, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }  // Em7
        ],
        splitModifiers: [
          {}, // Bb
          {}, // C
          {}, // F
          { seventh: true }  // A7
        ]
      },
      D: { 
        chords: ["Dm", "Gm", "F", "F"],
        splitVal: ["Bb", "C", "", ""],
        splitActive: [true, true, false, false],
        rhythm: [true, false, false, true, true, false, true, false],
        modifiers: [ 
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Dm
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'minor' }, // Gm
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }, // F
          { seventh: false, second: false, fourth: false, sus: false, majSeventh: false, quality: 'none' }  // F
        ],
        splitModifiers: [
          {}, // Bb
          {}, // C
          {}, // F
          {}  // F
        ]
      }
    }
  }
};

export const chordTypes = {
  'C': 'major', 'Dm': 'minor', 'Em': 'minor', 'F': 'major', 'G': 'major', 'Am': 'minor', 'Bb': 'major',
  'Db': 'major', 'Ebm': 'minor', 'Fm': 'minor', 'Gb': 'major', 'Ab': 'major', 'Bbm': 'minor', 'Cb': 'major',
  'D': 'major', 'F#m': 'minor', 'Bm': 'minor', 
  'Eb': 'major', 'Gm': 'minor', 'Cm': 'minor',
  'E': 'major', 'G#m': 'minor', 'C#m': 'minor',
  'Fb': 'major', 'Abm': 'minor', 
  'B': 'major', 'D#m': 'minor', 'F#': 'major', 'A': 'major',
  // Add augmented chords
  'Ebaug': 'augmented', 'Eaug': 'augmented', 'Faug': 'augmented', 'Gbaug': 'augmented', 'Gaug': 'augmented',
  'Abaug': 'augmented', 'Aaug': 'augmented', 'Bbaug': 'augmented', 'Baug': 'augmented', 'Caug': 'augmented',
  'Dbaug': 'augmented', 'Daug': 'augmented'
};

export const chordAlternateThirds = {
  'C':  { 'major': 'E', 'minor': 'E♭', 'majorNote': 'E4', 'minorNote': 'Eb4' },
  'Dm': { 'major': 'F♯','minor': 'F',  'majorNote': 'F#4','minorNote': 'F4'  },
  'Em': { 'major': 'G♯','minor': 'G',  'majorNote': 'G#4','minorNote': 'G4'  },
  'F':  { 'major': 'A', 'minor': 'A♭', 'majorNote': 'A4', 'minorNote': 'Ab4' },
  'G':  { 'major': 'B', 'minor': 'B♭', 'majorNote': 'B4', 'minorNote': 'Bb4' },
  'Am': { 'major': 'C♯','minor': 'C',  'majorNote': 'C#5','minorNote': 'C5'  },
  'Bb': { 'major': 'D', 'minor': 'D♭', 'majorNote': 'D4', 'minorNote': 'Db4' },
  'Db': { 'major': 'F', 'minor': 'F♭', 'majorNote': 'F4', 'minorNote': 'Fb4' }, 
  'Ebm':{ 'major': 'G', 'minor': 'G♭', 'majorNote': 'G4', 'minorNote': 'Gb4' },
  'Fm': { 'major': 'A', 'minor': 'A♭', 'majorNote': 'A4', 'minorNote': 'Ab4' },
  'Gb': { 'major': 'B♭','minor': 'B𝄫','majorNote': 'Bb4','minorNote': 'Bbb4'}, 
  'Ab': { 'major': 'C', 'minor': 'C♭', 'majorNote': 'C5', 'minorNote': 'Cb5' }, 
  'Bbm':{ 'major': 'D', 'minor': 'D♭', 'majorNote': 'D4', 'minorNote': 'Db4' },
  'Cb': { 'major': 'E♭','minor': 'E𝄫','majorNote': 'Eb4','minorNote': 'Ebb4'}, 
  'D':  { 'major': 'F♯','minor': 'F',  'majorNote': 'F#4','minorNote': 'F4'  },
  'F#m':{ 'major': 'A♯','minor': 'A',  'majorNote': 'A#4','minorNote': 'A4'  },
  'A':  { 'major': 'C♯','minor': 'C',  'majorNote': 'C#5','minorNote': 'C5'  },
  'Bm': { 'major': 'D♯','minor': 'D',  'majorNote': 'D#4','minorNote': 'D4'  },
  'Eb': { 'major': 'G', 'minor': 'G♭', 'majorNote': 'G4', 'minorNote': 'Gb4' },
  'Gm': { 'major': 'B', 'minor': 'B♭', 'majorNote': 'B4', 'minorNote': 'Bb4' },
  'Cm': { 'major': 'E', 'minor': 'E♭', 'majorNote': 'E5', 'minorNote': 'Eb5' },
  'E':  { 'major': 'G♯','minor': 'G',  'majorNote': 'G#4','minorNote': 'G4'  },
  'G#m':{ 'major': 'B♯','minor': 'B',  'majorNote': 'B#4','minorNote': 'B4'  }, 
  'C#m':{ 'major': 'E♯','minor': 'E',  'majorNote': 'E#5','minorNote': 'E5'  }, 
  'B':  { 'major': 'D♯','minor': 'D',  'majorNote': 'D#5','minorNote': 'D5'  },
  'D#m':{ 'major': 'F𝄪','minor':'F♯','majorNote': 'F##5','minorNote':'F#5'}, 
  'Fb': { 'major': 'A♭','minor': 'A𝄫','majorNote': 'Ab4','minorNote': 'Abb4'}, 
  'F#': { 'major': 'A♯','minor': 'A',  'majorNote': 'A#4','minorNote': 'A4'  },
  'Abm':{ 'major': 'C', 'minor': 'C♭', 'majorNote': 'C5', 'minorNote': 'Cb4' },
  'Bdim': { 'major': 'D♯', 'minor': 'D', 'majorNote': 'D#4', 'minorNote': 'D4' },
  'Cdim': { 'major': 'E', 'minor': 'E♭', 'majorNote': 'E4', 'minorNote': 'Eb4' },
  'C#dim': { 'major': 'E♯', 'minor': 'E', 'majorNote': 'E#4', 'minorNote': 'E4' },
  'Ddim': { 'major': 'F♯', 'minor': 'F', 'majorNote': 'F#4', 'minorNote': 'F4' },
  'D#dim': { 'major': 'F𝄪', 'minor': 'F♯', 'majorNote': 'F##4', 'minorNote': 'F#4' },
  'Edim': { 'major': 'G♯', 'minor': 'G', 'majorNote': 'G#4', 'minorNote': 'G4' },
  'Fdim': { 'major': 'A', 'minor': 'A♭', 'majorNote': 'A4', 'minorNote': 'Ab4' },
  'F#dim': { 'major': 'A♯', 'minor': 'A', 'majorNote': 'A#4', 'minorNote': 'A4' },
  'Gdim': { 'major': 'B', 'minor': 'B♭', 'majorNote': 'B4', 'minorNote': 'Bb4' },
  'G#dim': { 'major': 'B♯', 'minor': 'B', 'majorNote': 'B#4', 'minorNote': 'B4' },
  'Adim': { 'major': 'C♯', 'minor': 'C', 'majorNote': 'C#5', 'minorNote': 'C5' },
  'A#dim': { 'major': 'C𝄪', 'minor': 'C♯', 'majorNote': 'C##5', 'minorNote': 'C#5' },
  // Add new chords from harmonic minor
  'B#dim': { 'major': 'D𝄪', 'minor': 'D♯', 'majorNote': 'D##4', 'minorNote': 'D#4' },
  'E#dim': { 'major': 'G𝄪', 'minor': 'G♯', 'majorNote': 'G##4', 'minorNote': 'G#4' },
  'F##dim': { 'major': 'A𝄪', 'minor': 'A♯', 'majorNote': 'A##4', 'minorNote': 'A#4' }
};

export const chordTones = { 
  'C': ['C', 'E', 'G'], 'Dm': ['D', 'F', 'A'], 'Em': ['E', 'G', 'B'], 'F': ['F', 'A', 'C'], 'G': ['G', 'B', 'D'], 'Am': ['A', 'C', 'E'], 'Bb': ['B♭', 'D', 'F'],
  'Db': ['D♭', 'F', 'A♭'], 'Ebm': ['E♭', 'G♭', 'B♭'], 'Fm': ['F', 'A♭', 'C'], 'Gb': ['G♭', 'B♭', 'D♭'], 'Ab': ['A♭', 'C', 'E♭'], 'Bbm': ['B♭', 'D♭', 'F'], 'Cb': ['C♭', 'E♭', 'G♭'],
  'D': ['D', 'F♯', 'A'], 'F#m': ['F♯', 'A', 'C♯'], 'Bm': ['B', 'D', 'F♯'],
  'Eb': ['E♭', 'G', 'B♭'], 'Gm': ['G', 'B♭', 'D'], 'Cm': ['C', 'E♭', 'G'],
  'E': ['E', 'G♯', 'B'], 'G#m': ['G♯', 'B', 'D♯'], 'C#m': ['C♯', 'E', 'G♯'],
  'Fb': ['F♭', 'A♭', 'C♭'], 'Abm': ['A♭', 'C♭', 'E♭'], 
  'B': ['B', 'D♯', 'F♯'], 'D#m': ['D♯', 'F♯', 'A♯'], 'F#': ['F♯', 'A♯', 'C♯'], 'A': ['A', 'C♯', 'E'],
  'Bdim': ['B', 'D', 'F'], 'Cdim': ['C', 'E♭', 'G♭'], 'C#dim': ['C♯', 'E', 'G'], 'Ddim': ['D', 'F', 'A♭'], 'D#dim': ['D♯', 'F♯', 'A'], 'Edim': ['E', 'G', 'B♭'], 'Fdim': ['F', 'A♭', 'C♭'], 'F#dim': ['F♯', 'A', 'C'], 'Gdim': ['G', 'B♭', 'D♭'], 'G#dim': ['G♯', 'B', 'D'], 'Adim': ['A', 'C', 'E♭'], 'A#dim': ['A♯', 'C♯', 'E'],
  // Add augmented chords
  'Ebaug': ['E♭', 'G', 'B'], 'Eaug': ['E', 'G♯', 'B♯'], 'Faug': ['F', 'A', 'C♯'], 'Gbaug': ['G♭', 'B♭', 'D'], 'Gaug': ['G', 'B', 'D♯'],
  'Abaug': ['A♭', 'C', 'E'], 'Aaug': ['A', 'C♯', 'E♯'], 'Bbaug': ['B♭', 'D', 'F♯'], 'Baug': ['B', 'D♯', 'F𝄪'], 'Caug': ['C', 'E', 'G♯'],
  'Dbaug': ['D♭', 'F', 'A'], 'Daug': ['D', 'F♯', 'A♯'],
  // Add new diminished chords
  'B#dim': ['B♯', 'D♯', 'F♯'], 'E#dim': ['E♯', 'G♯', 'B'], 'F##dim': ['F𝄪', 'A♯', 'C♯']
};

export const chordSevenths = { 
  'C': 'B♭', 'Dm': 'C', 'Em': 'D', 'F': 'E♭', 'G': 'F', 'Am': 'G', 'Bb': 'A♭',
  'Db': 'C♭', 'Ebm': 'D♭', 'Fm': 'E♭', 'Gb': 'F♭', 'Ab': 'G♭', 'Bbm': 'A♭', 'Cb': 'B𝄫',
  'D': 'C', 'F#m': 'E', 'Bm': 'A',
  'Eb': 'D♭', 'Gm': 'F', 'Cm': 'B♭',
  'E': 'D', 'G#m': 'F♯', 'C#m': 'B',
  'Fb': 'E𝄫', 'Abm': 'G♭', 
  'B': 'A', 'D#m': 'C♯', 'F#': 'E', 'A': 'G',
  'Bdim': 'A', 'Cdim': 'B♭', 'C#dim': 'B', 'Ddim': 'C', 'D#dim': 'C♯', 'Edim': 'D', 'Fdim': 'E♭', 'F#dim': 'E', 'Gdim': 'F', 'G#dim': 'F♯', 'Adim': 'G', 'A#dim': 'G♯',
  // Add augmented chord sevenths
  'Ebaug': 'D♭', 'Eaug': 'D', 'Faug': 'E♭', 'Gbaug': 'F♭', 'Gaug': 'F',
  'Abaug': 'G♭', 'Aaug': 'G', 'Bbaug': 'A♭', 'Baug': 'A', 'Caug': 'B♭',
  'Dbaug': 'C♭', 'Daug': 'C',
  // Add new diminished chord sevenths
  'B#dim': 'A♯', 'E#dim': 'D♯', 'F##dim': 'E♯'
};
export const chordMajorSevenths = { 
  'C': 'B', 'Dm': 'C♯', 'Em': 'D♯', 'F': 'E', 'G': 'F♯', 'Am': 'G♯', 'Bb': 'A',
  'Db': 'C', 'Ebm': 'D', 'Fm': 'E', 'Gb': 'F', 'Ab': 'G', 'Bbm': 'A', 
