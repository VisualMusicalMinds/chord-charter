// --- Sound Synthesis Variables ---
export const waveforms = ['sine', 'triangle', 'square', 'saw', 'voice'];

// --- Key and Scale Data ---
export const displayKeys = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

export const keyMap = {
    'C': { 'Major': 'C', 'Natural Minor': 'C' },
    'C#/Db': { 'Major': 'Db', 'Natural Minor': 'C#' },
    'D': { 'Major': 'D', 'Natural Minor': 'D' },
    'D#/Eb': { 'Major': 'Eb', 'Natural Minor': 'Eb' },
    'E': { 'Major': 'E', 'Natural Minor': 'E' },
    'F': { 'Major': 'F', 'Natural Minor': 'F' },
    'F#/Gb': { 'Major': 'Gb', 'Natural Minor': 'F#' },
    'G': { 'Major': 'G', 'Natural Minor': 'G' },
    'G#/Ab': { 'Major': 'Ab', 'Natural Minor': 'G#' },
    'A': { 'Major': 'A', 'Natural Minor': 'A' },
    'A#/Bb': { 'Major': 'Bb', 'Natural Minor': 'Bb' },
    'B': { 'Major': 'B', 'Natural Minor': 'B' }
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
  'C': [ { value: 'C',  display: 'C / I' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Em', display: 'Em / iii' }, { value: 'F',  display: 'F / IV' }, { value: 'G',  display: 'G / V' }, { value: 'Am', display: 'Am / vi' }, { value: 'Bdim', display: 'Bdim / vii°' } ],
  'Db': [ { value: 'Db', display: 'Db / I' }, { value: 'Ebm',display: 'Ebm / ii' }, { value: 'Fm', display: 'Fm / iii' }, { value: 'Gb', display: 'Gb / IV' }, { value: 'Ab', display: 'Ab / V' }, { value: 'Bbm',display: 'Bbm / vi' }, { value: 'Cdim', display: 'Cdim / vii°' } ],
  'D': [ { value: 'D',  display: 'D / I' }, { value: 'Em', display: 'Em / ii' }, { value: 'F#m',display: 'F#m / iii' }, { value: 'G',  display: 'G / IV' }, { value: 'A',  display: 'A / V' }, { value: 'Bm', display: 'Bm / vi' }, { value: 'C#dim',display: 'C#dim / vii°' } ],
  'Eb': [ { value: 'Eb', display: 'Eb / I' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Gm', display: 'Gm / iii' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Cm', display: 'Cm / vi' }, { value: 'Ddim', display: 'Ddim / vii°' } ],
  'E': [ { value: 'E',  display: 'E / I' }, { value: 'F#m',display: 'F#m / ii' }, { value: 'G#m',display: 'G#m / iii' }, { value: 'A',  display: 'A / IV' }, { value: 'B',  display: 'B / V' }, { value: 'C#m',display: 'C#m / vi' }, { value: 'D#dim',display: 'D#dim / vii°' } ],
  'F': [ { value: 'F',  display: 'F / I' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Am', display: 'Am / iii' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'C',  display: 'C / V' }, { value: 'Dm', display: 'Dm / vi' }, { value: 'Edim', display: 'Edim / vii°' } ],
  'Gb': [ { value: 'Gb', display: 'Gb / I' }, { value: 'Abm',display: 'Abm / ii' }, { value: 'Bbm',display: 'Bbm / iii' }, { value: 'Cb', display: 'Cb / IV' },  { value: 'Db', display: 'Db / V' }, { value: 'Ebm',display: 'Ebm / vi' }, { value: 'Fdim', display: 'Fdim / vii°' } ],
  'G': [ { value: 'G',  display: 'G / I' }, { value: 'Am', display: 'Am / ii' }, { value: 'Bm', display: 'Bm / iii' }, { value: 'C',  display: 'C / IV' }, { value: 'D',  display: 'D / V' }, { value: 'Em', display: 'Em / vi' }, { value: 'F#dim',display: 'F#dim / vii°' } ],
  'Ab': [ { value: 'Ab', display: 'Ab / I' }, { value: 'Bbm',display: 'Bbm / ii' }, { value: 'Cm', display: 'Cm / iii' }, { value: 'Db', display: 'Db / IV' }, { value: 'Eb', display: 'Eb / V' }, { value: 'Fm', display: 'Fm / vi' }, { value: 'Gdim', display: 'Gdim / vii°' } ],
  'A': [ { value: 'A',  display: 'A / I' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'C#m',display: 'C#m / iii' }, { value: 'D',  display: 'D / IV' }, { value: 'E',  display: 'E / V' }, { value: 'F#m',display: 'F#m / vi' }, { value: 'G#dim',display: 'G#dim / vii°' } ],
  'Bb': [ { value: 'Bb', display: 'Bb / I' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Dm', display: 'Dm / iii' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'F',  display: 'F / V' }, { value: 'Gm', display: 'Gm / vi' }, { value: 'Adim', display: 'Adim / vii°' } ],
  'B': [ { value: 'B',  display: 'B / I' }, { value: 'C#m',display: 'C#m / ii' }, { value: 'D#m',display: 'D#m / iii' }, { value: 'E',  display: 'E / IV' }, { value: 'F#', display: 'F# / V' }, { value: 'G#m',display: 'G#m / vi' }, { value: 'A#dim',display: 'A#dim / vii°' } ]
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

// --- Structure for all scale maps ---
export const scaleChordMaps = {
  'Major': majorKeyChordMap,
  'Natural Minor': naturalMinorKeyChordMap,
};


// --- Create a master list of all unique chords ---
const allMajorChords = Object.values(majorKeyChordMap).flat().map(c => c.value);
const allMinorChords = Object.values(naturalMinorKeyChordMap).flat().map(c => c.value);
export const allChords = [...new Set([...allMajorChords, ...allMinorChords])].sort();

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
  'B': 'major', 'D#m': 'minor', 'F#': 'major', 'A': 'major' 
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
  'Gb': { 'major': 'B♭','minor': 'B♭♭','majorNote': 'Bb4','minorNote': 'Bbb4'}, 
  'Ab': { 'major': 'C', 'minor': 'C♭', 'majorNote': 'C5', 'minorNote': 'Cb5' }, 
  'Bbm':{ 'major': 'D', 'minor': 'D♭', 'majorNote': 'D4', 'minorNote': 'Db4' },
  'Cb': { 'major': 'E♭','minor': 'E♭♭','majorNote': 'Eb4','minorNote': 'Ebb4'}, 
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
  'Fb': { 'major': 'A♭','minor': 'A♭♭','majorNote': 'Ab4','minorNote': 'Abb4'}, 
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
  'A#dim': { 'major': 'C𝄪', 'minor': 'C♯', 'majorNote': 'C##5', 'minorNote': 'C#5' }
};

export const chordTones = { 
  'C': ['C', 'E', 'G'], 'Dm': ['D', 'F', 'A'], 'Em': ['E', 'G', 'B'], 'F': ['F', 'A', 'C'], 'G': ['G', 'B', 'D'], 'Am': ['A', 'C', 'E'], 'Bb': ['B♭', 'D', 'F'],
  'Db': ['D♭', 'F', 'A♭'], 'Ebm': ['E♭', 'G♭', 'B♭'], 'Fm': ['F', 'A♭', 'C'], 'Gb': ['G♭', 'B♭', 'D♭'], 'Ab': ['A♭', 'C', 'E♭'], 'Bbm': ['B♭', 'D♭', 'F'], 'Cb': ['C♭', 'E♭', 'G♭'],
  'D': ['D', 'F♯', 'A'], 'F#m': ['F♯', 'A', 'C♯'], 'Bm': ['B', 'D', 'F♯'],
  'Eb': ['E♭', 'G', 'B♭'], 'Gm': ['G', 'B♭', 'D'], 'Cm': ['C', 'E♭', 'G'],
  'E': ['E', 'G♯', 'B'], 'G#m': ['G♯', 'B', 'D♯'], 'C#m': ['C♯', 'E', 'G♯'],
  'Fb': ['F♭', 'A♭', 'C♭'], 'Abm': ['A♭', 'C♭', 'E♭'], 
  'B': ['B', 'D♯', 'F♯'], 'D#m': ['D♯', 'F♯', 'A♯'], 'F#': ['F♯', 'A♯', 'C♯'], 'A': ['A', 'C♯', 'E'],
  'Bdim': ['B', 'D', 'F'], 'Cdim': ['C', 'E♭', 'G♭'], 'C#dim': ['C♯', 'E', 'G'], 'Ddim': ['D', 'F', 'A♭'], 'D#dim': ['D♯', 'F♯', 'A'], 'Edim': ['E', 'G', 'B♭'], 'Fdim': ['F', 'A♭', 'C♭'], 'F#dim': ['F♯', 'A', 'C'], 'Gdim': ['G', 'B♭', 'D♭'], 'G#dim': ['G♯', 'B', 'D'], 'Adim': ['A', 'C', 'E♭'], 'A#dim': ['A♯', 'C♯', 'E']
};

export const chordSevenths = { 
  'C': 'B♭', 'Dm': 'C', 'Em': 'D', 'F': 'E♭', 'G': 'F', 'Am': 'G', 'Bb': 'A♭',
  'Db': 'C♭', 'Ebm': 'D♭', 'Fm': 'E♭', 'Gb': 'F♭', 'Ab': 'G♭', 'Bbm': 'A♭', 'Cb': 'B♭♭',
  'D': 'C', 'F#m': 'E', 'Bm': 'A',
  'Eb': 'D♭', 'Gm': 'F', 'Cm': 'B♭',
  'E': 'D', 'G#m': 'F♯', 'C#m': 'B',
  'Fb': 'E♭♭', 'Abm': 'G♭', 
  'B': 'A', 'D#m': 'C♯', 'F#': 'E', 'A': 'G',
  'Bdim': 'A', 'Cdim': 'B♭', 'C#dim': 'B', 'Ddim': 'C', 'D#dim': 'C♯', 'Edim': 'D', 'Fdim': 'E♭', 'F#dim': 'E', 'Gdim': 'F', 'G#dim': 'F♯', 'Adim': 'G', 'A#dim': 'G♯'
};
export const chordMajorSevenths = { 
  'C': 'B', 'Dm': 'C♯', 'Em': 'D♯', 'F': 'E', 'G': 'F♯', 'Am': 'G♯', 'Bb': 'A',
  'Db': 'C', 'Ebm': 'D', 'Fm': 'E', 'Gb': 'F', 'Ab': 'G', 'Bbm': 'A', 'Cb': 'B♭',
  'D': 'C♯', 'F#m': 'E♯', 'Bm': 'A♯',
  'Eb': 'D', 'Gm': 'F♯', 'Cm': 'B',
  'E': 'D♯', 'G#m': 'F𝄪', 'C#m': 'B♯',
  'Fb': 'E♭', 'Abm': 'G', 
  'B': 'A♯', 'D#m': 'C𝄪', 'F#': 'E♯', 'A': 'G♯',
  'Bdim': 'A♯', 'Cdim': 'B', 'C#dim': 'B♯', 'Ddim': 'C♯', 'D#dim': 'C𝄪', 'Edim': 'D♯', 'Fdim': 'E', 'F#dim': 'E♯', 'Gdim': 'F♯', 'G#dim': 'F𝄪', 'Adim': 'G♯', 'A#dim': 'G𝄪'
};
export const chordSeconds = { 
  'C': 'D', 'Dm': 'E', 'Em': 'F♯', 'F': 'G', 'G': 'A', 'Am': 'B', 'Bb': 'C',
  'Db': 'E♭', 'Ebm': 'F', 'Fm': 'G', 'Gb': 'A♭', 'Ab': 'B♭', 'Bbm': 'C', 'Cb': 'D♭',
  'D': 'E', 'F#m': 'G♯', 'Bm': 'C♯',
  'Eb': 'F', 'Gm': 'A', 'Cm': 'D',
  'E': 'F♯', 'G#m': 'A♯', 'C#m': 'D♯',
  'Fb': 'G♭', 'Abm': 'B♭', 
  'B': 'C♯', 'D#m': 'E♯', 'F#': 'G♯', 'A': 'B',
  'Bdim': 'C♯', 'Cdim': 'D', 'C#dim': 'D♯', 'Ddim': 'E', 'D#dim': 'E♯', 'Edim': 'F♯', 'Fdim': 'G', 'F#dim': 'G♯', 'Gdim': 'A', 'G#dim': 'A♯', 'Adim': 'B', 'A#dim': 'B♯'
};
export const chordFourths = { 
  'C': 'F', 'Dm': 'G', 'Em': 'A', 'F': 'B♭', 'G': 'C', 'Am': 'D', 'Bb': 'E♭',
  'Db': 'G♭', 'Ebm': 'A♭', 'Fm': 'B♭', 'Gb': 'C♭', 'Ab': 'D♭', 'Bbm': 'E♭', 'Cb': 'F♭',
  'D': 'G', 'F#m': 'B', 'Bm': 'E',
  'Eb': 'A♭', 'Gm': 'C', 'Cm': 'F',
  'E': 'A', 'G#m': 'C♯', 'C#m': 'F♯',
  'Fb': 'B♭♭', 'Abm': 'D♭', 
  'B': 'E', 'D#m': 'G♯', 'F#': 'B', 'A': 'D',
  'Bdim': 'E', 'Cdim': 'F', 'C#dim': 'F♯', 'Ddim': 'G', 'D#dim': 'G♯', 'Edim': 'A', 'Fdim': 'B♭', 'F#dim': 'B', 'Gdim': 'C', 'G#dim': 'C♯', 'Adim': 'D', 'A#dim': 'D♯'
};
export const chordAugmentedFifths = {
    'C': 'G#', 'Dm': 'A#', 'Em': 'B#', 'F': 'C#', 'G': 'D#', 'Am': 'E#', 'Bb': 'F#',
    'Db': 'A', 'Ebm': 'B', 'Fm': 'C#', 'Gb': 'D', 'Ab': 'E', 'Bbm': 'F#', 'Cb': 'G',
    'D': 'A#', 'F#m': 'C𝄪', 'Bm': 'F𝄪',
    'Eb': 'B', 'Gm': 'D#', 'Cm': 'G#',
    'E': 'B#', 'G#m': 'D𝄪', 'C#m': 'G𝄪',
    'Fb': 'C', 'Abm': 'E',
    'B': 'F𝄪', 'D#m': 'A𝄪', 'F#': 'C𝄪', 'A': 'E#',
    'Bdim': 'G', 'Cdim': 'Ab', 'C#dim': 'A', 'Ddim': 'Bb', 'D#dim': 'B', 'Edim': 'C', 'Fdim': 'Db', 'F#dim': 'D', 'Gdim': 'Eb', 'G#dim': 'E', 'Adim': 'F', 'A#dim': 'F#'
};
export const chordDiminishedFifths = {
    'C': 'G♭', 'Dm': 'A♭', 'Em': 'B♭', 'F': 'C♭', 'G': 'D♭', 'Am': 'E♭', 'Bb': 'F♭',
    'Db': 'A♭♭', 'Ebm': 'B♭♭', 'Fm': 'C♭', 'Gb': 'D♭♭', 'Ab': 'E♭♭', 'Bbm': 'F♭', 'Cb': 'G♭♭',
    'D': 'A♭', 'F#m': 'C', 'Bm': 'F',
    'Eb': 'B♭♭', 'Gm': 'D♭', 'Cm': 'G♭',
    'E': 'B♭', 'G#m': 'D', 'C#m': 'G',
    'Fb': 'C♭♭', 'Abm': 'E♭♭',
    'B': 'F', 'D#m': 'A', 'F#': 'C', 'A': 'E♭',
    'Bdim': 'F♭', 'Cdim': 'G♭♭', 'C#dim': 'G♭', 'Ddim': 'A♭♭', 'D#dim': 'A♭', 'Edim': 'B♭♭', 'Fdim': 'C♭♭', 'F#dim': 'C♭', 'Gdim': 'D♭♭', 'G#dim': 'D♭', 'Adim': 'E♭♭', 'A#dim': 'E♭'
};

export const rhythmChordNotes = { 
  'C': ['C3', 'C4', 'E4', 'G4', 'C5'], 'Dm': ['D3', 'D4', 'F4', 'A4', 'D5'], 'Em': ['E3', 'E4', 'G4', 'B4', 'E5'], 'F':  ['F3', 'F4', 'A4', 'C5', 'F5'],  'G':  ['G3', 'G4', 'B4', 'D5', 'G5'], 'Am': ['A2', 'A3', 'C4', 'E4', 'A4'], 'Bb': ['Bb2', 'Bb3', 'D4', 'F4', 'Bb4'],
  'Db': ['Db3','Db4','F4','Ab4','Db5'], 'Ebm':['Eb3','Eb4','Gb4','Bb4','Eb5'], 'Fm': ['F3','F4','Ab4','C5','F5'], 'Gb': ['Gb3', 'Gb4', 'Bb3', 'Db4', 'Gb5'], 'Ab': ['Ab2','Ab3','C4','Eb4','Ab4'], 'Bbm':['Bb2','Bb3','Db4','F4','Bb4'], 'Cb': ['Cb3','Cb4','Eb4','Gb4','Cb5'],
  'D':  ['D3', 'D4', 'F#4', 'A4', 'D5'], 'F#m':['F#3','F#4','A4','C#5','F#5'], 'Bm': ['B2','B3','D4','F#4','B4'],
  'Eb': ['Eb3','Eb4','G4','Bb4','Eb5'], 'Gm': ['G3','G4','Bb4','D5','G5'], 'Cm': ['C3','C4','Eb4','G4','C5'],
  'E':  ['E3', 'E4', 'G#4', 'B4', 'E5'], 'G#m':['G#3','G#4','B4','D#5','G#5'], 'C#m':['C#3','C#4','E4','G#4','C#5'],
  'Fb': ['Fb3','Fb4','Ab4','Cb4','Fb5'], 'Abm':['Ab2','Ab3','Cb4','Eb4','Ab4'], 
  'B':  ['B2', 'B3', 'D#4', 'F#4', 'B4'], 'D#m':['D#3','D#4','F#4','A#4','D#5'], 'F#': ['F#3','F#4','A#4','C#5','F#5'], 'A': ['A2','A3','C#4','E4','A4'],
  'Bdim': ['B2', 'B3', 'D4', 'F4', 'B4'], 'Cdim': ['C3', 'C4', 'Eb4', 'Gb4', 'C5'], 'C#dim': ['C#3', 'C#4', 'E4', 'G4', 'C#5'], 'Ddim': ['D3', 'D4', 'F4', 'Ab4', 'D5'], 'D#dim': ['D#3', 'D#4', 'F#4', 'A4', 'D#5'], 'Edim': ['E3', 'E4', 'G4', 'Bb4', 'E5'], 'Fdim': ['F3', 'F4', 'Ab4', 'C5', 'F5'], 'F#dim': ['F#3', 'F#4', 'A4', 'C4', 'F#4'], 'Gdim': ['G3', 'G4', 'Bb4', 'Db5', 'G5'], 'G#dim': ['G#3', 'G#4', 'B4', 'D5', 'G#5'], 'Adim': ['A2', 'A3', 'C4', 'Eb4', 'A4'], 'A#dim': ['A#2', 'A#3', 'C#4', 'E4', 'A#4'],
  'Ddim7': ['D3', 'D4', 'F4', 'Ab4', 'Cb5'], 'D#dim7': ['D#3', 'D#4', 'F#4', 'A4', 'C5'], 'Edim7': ['E3', 'E4', 'G4', 'Bb4', 'Db5'], 'Fdim7': ['F3', 'F4', 'Ab4', 'Cb5', 'Ebb5'], 'F#dim7': ['F#3', 'F#4', 'A4', 'C5', 'E5'], 'Gdim7': ['G3', 'G4', 'Bb4', 'Db5', 'Fb5'], 'G#dim7': ['G#3', 'G#4', 'B4', 'D5', 'F5'], 'Adim7': ['A2', 'A3', 'C4', 'Eb4', 'Gb4'], 'A#dim7': ['A#2', 'A#3', 'C#4', 'E4', 'G4'], 'Bdim7': ['B2', 'B3', 'D4', 'F4', 'Ab4'], 'Cdim7': ['C3', 'C4', 'Eb4', 'Gb4', 'Bbb4'], 'C#dim7': ['C#3', 'C#4', 'E4', 'G4', 'Bb4']
};
export const rhythmChordSeventhNotes = { 
  'C': 'Bb4', 'Dm': 'C5', 'Em': 'D5', 'F': 'Eb5', 'G': 'F5', 'Am': 'G4', 'Bb': 'Ab4',
  'Db':'Cb4', 'Ebm':'Db5', 'Fm':'Eb5', 'Gb':'Fb5', 'Ab':'Gb4', 'Bbm':'Ab4', 'Cb':'Bbb4',
  'D': 'C5', 'F#m':'E5', 'Bm':'A4',
  'Eb':'Db5', 'Gm':'F5', 'Cm':'Bb4',
  'E': 'D5', 'G#m':'F#5', 'C#m':'B4',
  'Fb':'Ebb5', 'Abm': 'Gb4', 
  'B': 'A4', 'D#m':'C#5', 'F#':'E5', 'A':'G4',
  'Bdim': 'A4', 'Cdim': 'Bb4', 'C#dim': 'B4', 'Ddim': 'C5', 'D#dim': 'C#5', 'Edim': 'D5', 'Fdim': 'Eb5', 'F#dim': 'E5', 'Gdim': 'F5', 'G#dim': 'F#5', 'Adim': 'G4', 'A#dim': 'G#4'
};
export const rhythmChordMajorSeventhNotes = { 
  'C': 'B4', 'Dm': 'C#5', 'Em': 'D#5', 'F': 'E5', 'G': 'F#4', 'Am': 'G#4', 'Bb': 'A4',
  'Db':'C5', 'Ebm':'D5', 'Fm':'E5', 'Gb':'F4', 'Ab':'G4', 'Bbm':'A4', 'Cb':'Bb4',
  'D': 'C#5', 'F#m':'E#5', 'Bm':'A#4', 
  'Eb':'D5', 'Gm':'F#5', 'Cm':'B4',
  'E': 'D#5', 'G#m':'F##5', 'C#m':'B#5', 
  'Fb':'Eb5', 'Abm': 'G4', 
  'B': 'A#4', 'D#m':'C##5', 'F#':'E#5', 'A':'G#4',
  'Bdim': 'A#4', 'Cdim': 'B4', 'C#dim': 'B#4', 'Ddim': 'C#5', 'D#dim': 'C##5', 'Edim': 'D#5', 'Fdim': 'E5', 'F#dim': 'E#5', 'Gdim': 'F#5', 'G#dim': 'F##5', 'Adim': 'G#4', 'A#dim': 'G##4'
};
export const rhythmChordSecondNotes = {
  'C': 'D4', 'Dm': 'E4', 'Em': 'F#4', 'F': 'G4', 'G': 'A4', 'Am': 'B4', 'Bb': 'C4',
  'Db':'Eb4', 'Ebm':'F4', 'Fm':'G4', 'Gb':'Ab4', 'Ab':'Bb4', 'Bbm':'C4', 'Cb':'Db4',
  'D': 'E4', 'F#m':'G#4', 'Bm':'C#4',
  'Eb':'F4', 'Gm':'A4', 'Cm':'D4',
  'E': 'F#4', 'G#m':'A#4', 'C#m':'D#4',
  'Fb':'Gb4', 'Abm': 'Bb3', 
  'B': 'C#4', 'D#m':'E#4', 'F#':'G#4', 'A':'B3',
  'Bdim': 'C#4', 'Cdim': 'D4', 'C#dim': 'D#4', 'Ddim': 'E4', 'D#dim': 'E#4', 'Edim': 'F#4', 'Fdim': 'G4', 'F#dim': 'G#4', 'Gdim': 'A4', 'G#dim': 'A#4', 'Adim': 'B3', 'A#dim': 'B#3'
};
export const rhythmChordFourthNotes = {
  'C': 'F4', 'Dm': 'G4', 'Em': 'A4', 'F': 'Bb4', 'G': 'C5', 'Am': 'D5', 'Bb': 'Eb4',
  'Db':'Gb4', 'Ebm':'Ab4', 'Fm':'Bb4', 'Gb':'Cb4', 'Ab':'Db5', 'Bbm':'Eb4', 'Cb':'Fb4',
  'D': 'G4', 'F#m':'B4', 'Bm':'E4',
  'Eb':'Ab4', 'Gm':'C5', 'Cm':'F4',
  'E': 'A4', 'G#m':'C#5', 'C#m':'F#4',
  'Fb':'Bbb4', 'Abm': 'Db5', 
  'B': 'E4', 'D#m':'G#4', 'F#':'B3', 'A':'D4',
  'Bdim': 'E4', 'Cdim': 'F4', 'C#dim': 'F#4', 'Ddim': 'G4', 'D#dim': 'G#4', 'Edim': 'A4', 'Fdim': 'Bb4', 'F#dim': 'B3', 'Gdim': 'C5', 'G#dim': 'C#5', 'Adim': 'D4', 'A#dim': 'D#4'
};

export const noteColorClass = {
  'C': 'note-C', 'D': 'note-D', 'E': 'note-E', 'F': 'note-F', 'G': 'note-G', 'A': 'note-A', 'B': 'note-B',
  'F♯': 'note-F', 'G♯': 'note-G', 'B♭': 'note-B', 'E♭': 'note-E', 'A♭': 'note-A', 'C♯': 'note-C', 'D♭': 'note-D',
  'F#': 'note-F', 'G#': 'note-G', 'Bb': 'note-B', 'Eb': 'note-E', 'Ab': 'note-A', 'C#': 'note-C', 'Db': 'note-D', 
  'Cb': 'note-B', 'Fb': 'note-E', 
  'Abm': 'note-A', 'Ebm': 'note-E', 'Bbm': 'note-B', 'F#m': 'note-F', 'C#m': 'note-C', 'G#m': 'note-G', 'D#m': 'note-D' 
};

export const restDashImgUrl = "https://eagleviewmusic.com/images/CartoonRhythmBox5.svg";
export const dashImgUrl = "https://eagleviewmusic.com/images/CartoonRhythmBox1.svg";
export const rhythmBox2 = "https://eagleviewmusic.com/images/CartoonRhythmBox2.svg";
export const rhythmBox3 = "https://eagleviewmusic.com/images/CartoonRhythmBox3.svg";
export const rhythmBox4 = "https://eagleviewmusic.com/images/CartoonRhythmBox4.svg";

export const soundProfiles = {
  sine: { duration: 0.4, attack: 0.04, hold: 0.2, release: 0.16, filterFreq: 3000, filterQ: 0.5, gain: 0.36, vibrato: false },
  triangle: { duration: 0.29, attack: 0.015, hold: 0.07, release: 0.2, filterFreq: 1200, filterQ: 1, gain: 0.38, vibrato: false },
  square: { duration: 0.25, attack: 0.005, hold: 0.02, release: 0.225, filterFreq: 900, filterQ: 2, gain: 0.30, vibrato: false },
  saw: { duration: 0.33, attack: 0.02, hold: 0.05, release: 0.26, filterFreq: 1600, filterQ: 1.5, gain: 0.28, pitchBend: true, bendAmount: 30, bendTime: 0.08, vibrato: false },
  voice: { duration: 0.5, attack: 0.08, hold: 0.3, release: 0.12, filterFreq: 1000, filterQ: 1, gain: 0.36, vibrato: true, vibratoFreq: 5, vibratoAmount: 4 }
};
