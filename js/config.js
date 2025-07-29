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
  // Chords with a MAJOR third
  'C': 'major',   'C+': 'major',
  'C#': 'major',  'C#+': 'major',
  'Db': 'major',  'Db+': 'major',
  'D': 'major',   'D+': 'major',
  'D#': 'major',  'D#+': 'major',
  'Eb': 'major',  'Eb+': 'major',
  'E': 'major',   'E+': 'major',
  'Fb': 'major',  'Fb+': 'major',
  'F': 'major',   'F+': 'major',
  'F#': 'major',  'F#+': 'major',
  'Gb': 'major',  'Gb+': 'major',
  'G': 'major',   'G+': 'major',
  'G#': 'major',  'G#+': 'major',
  'Ab': 'major',  'Ab+': 'major',
  'A': 'major',   'A+': 'major',
  'A#': 'major',  'A#+': 'major',
  'Bb': 'major',  'Bb+': 'major',
  'B': 'major',   'B+': 'major',

  // Chords with a MINOR third
  'Cm': 'minor',   'Cdim': 'minor',
  'C#m': 'minor',  'C#dim': 'minor',
  'Dbm': 'minor',  'Dbdim': 'minor',
  'Dm': 'minor',   'Ddim': 'minor',
  'D#m': 'minor',  'D#dim': 'minor',
  'Ebm': 'minor',  'Ebdim': 'minor',
  'Em': 'minor',   'Edim': 'minor',
  'Fbm': 'minor',  'Fbdim': 'minor',
  'Fm': 'minor',   'Fdim': 'minor',
  'F#m': 'minor',  'F#dim': 'minor',
  'Gbm': 'minor',  'Gbdim': 'minor',
  'Gm': 'minor',   'Gdim': 'minor',
  'G#m': 'minor',  'G#dim': 'minor',
  'Abm': 'minor',  'Abdim': 'minor',
  'Am': 'minor',   'Adim': 'minor',
  'A#m': 'minor',  'A#dim': 'minor',
  'Bbm': 'minor',  'Bbdim': 'minor',
  'Bm': 'minor',   'Bdim': 'minor'
};

export const chordAlternateThirds = {
  // C Chords
  'C':     { 'major': 'E',    'minor': 'E♭',  'majorNote': 'E4',   'minorNote': 'Eb4' },
  'Cm':    { 'major': 'E',    'minor': 'E♭',  'majorNote': 'E5',   'minorNote': 'Eb5' },
  'Cdim':  { 'major': 'E',    'minor': 'E♭',  'majorNote': 'E4',   'minorNote': 'Eb4' },
  'C+':    { 'major': 'E',    'minor': 'E♭',  'majorNote': 'E4',   'minorNote': 'Eb4' },

  // C-Sharp Chords
  'C#':    { 'major': 'E♯',   'minor': 'E',    'majorNote': 'E#4',  'minorNote': 'E4' },
  'C#m':   { 'major': 'E♯',   'minor': 'E',    'majorNote': 'E#5',  'minorNote': 'E5' },
  'C#dim': { 'major': 'E♯',   'minor': 'E',    'majorNote': 'E#4',  'minorNote': 'E4' },
  'C#+':   { 'major': 'E♯',   'minor': 'E',    'majorNote': 'E#4',  'minorNote': 'E4' },

  // D-Flat Chords
  'Db':    { 'major': 'F',    'minor': 'F♭',  'majorNote': 'F4',   'minorNote': 'Fb4' },
  'Dbm':   { 'major': 'F',    'minor': 'F♭',  'majorNote': 'F4',   'minorNote': 'Fb4' },
  'Dbdim': { 'major': 'F',    'minor': 'F♭',  'majorNote': 'F4',   'minorNote': 'Fb4' },
  'Db+':   { 'major': 'F',    'minor': 'F♭',  'majorNote': 'F4',   'minorNote': 'Fb4' },

  // D Chords
  'D':     { 'major': 'F♯',   'minor': 'F',    'majorNote': 'F#4',  'minorNote': 'F4' },
  'Dm':    { 'major': 'F♯',   'minor': 'F',    'majorNote': 'F#4',  'minorNote': 'F4' },
  'Ddim':  { 'major': 'F♯',   'minor': 'F',    'majorNote': 'F#4',  'minorNote': 'F4' },
  'D+':    { 'major': 'F♯',   'minor': 'F',    'majorNote': 'F#4',  'minorNote': 'F4' },

  // D-Sharp Chords
  'D#':    { 'major': 'F𝄪',   'minor': 'F♯',  'majorNote': 'F##4', 'minorNote': 'F#4' },
  'D#m':   { 'major': 'F𝄪',   'minor': 'F♯',  'majorNote': 'F##5', 'minorNote': 'F#5' },
  'D#dim': { 'major': 'F𝄪',   'minor': 'F♯',  'majorNote': 'F##4', 'minorNote': 'F#4' },
  'D#+':   { 'major': 'F𝄪',   'minor': 'F♯',  'majorNote': 'F##4', 'minorNote': 'F#4' },

  // E-Flat Chords
  'Eb':    { 'major': 'G',    'minor': 'G♭',  'majorNote': 'G4',   'minorNote': 'Gb4' },
  'Ebm':   { 'major': 'G',    'minor': 'G♭',  'majorNote': 'G4',   'minorNote': 'Gb4' },
  'Ebdim': { 'major': 'G',    'minor': 'G♭',  'majorNote': 'G4',   'minorNote': 'Gb4' },
  'Eb+':   { 'major': 'G',    'minor': 'G♭',  'majorNote': 'G4',   'minorNote': 'Gb4' },

  // E Chords
  'E':     { 'major': 'G♯',   'minor': 'G',    'majorNote': 'G#4',  'minorNote': 'G4' },
  'Em':    { 'major': 'G♯',   'minor': 'G',    'majorNote': 'G#4',  'minorNote': 'G4' },
  'Edim':  { 'major': 'G♯',   'minor': 'G',    'majorNote': 'G#4',  'minorNote': 'G4' },
  'E+':    { 'major': 'G♯',   'minor': 'G',    'majorNote': 'G#4',  'minorNote': 'G4' },

  // E-Sharp Chords
  'E#':    { 'major': 'G𝄪',   'minor': 'G♯',  'majorNote': 'G##4', 'minorNote': 'G#4' },
  'E#m':   { 'major': 'G𝄪',   'minor': 'G♯',  'majorNote': 'G##5', 'minorNote': 'G#5' },
  'E#dim': { 'major': 'G𝄪',   'minor': 'G♯',  'majorNote': 'G##4', 'minorNote': 'G#4' },
  'E#+':   { 'major': 'G𝄪',   'minor': 'G♯',  'majorNote': 'G##4', 'minorNote': 'G#4' },

  // F-Flat Chords
  'Fb':    { 'major': 'A♭',   'minor': 'A𝄫',  'majorNote': 'Ab4',  'minorNote': 'Abb4' },
  'Fbm':   { 'major': 'A♭',   'minor': 'A𝄫',  'majorNote': 'Ab4',  'minorNote': 'Abb4' },
  'Fbdim': { 'major': 'A♭',   'minor': 'A𝄫',  'majorNote': 'Ab4',  'minorNote': 'Abb4' },
  'Fb+':   { 'major': 'A♭',   'minor': 'A𝄫',  'majorNote': 'Ab4',  'minorNote': 'Abb4' },

  // F Chords
  'F':     { 'major': 'A',    'minor': 'A♭',  'majorNote': 'A4',   'minorNote': 'Ab4' },
  'Fm':    { 'major': 'A',    'minor': 'A♭',  'majorNote': 'A4',   'minorNote': 'Ab4' },
  'Fdim':  { 'major': 'A',    'minor': 'A♭',  'majorNote': 'A4',   'minorNote': 'Ab4' },
  'F+':    { 'major': 'A',    'minor': 'A♭',  'majorNote': 'A4',   'minorNote': 'Ab4' },

  // F-Sharp Chords
  'F#':    { 'major': 'A♯',   'minor': 'A',    'majorNote': 'A#4',  'minorNote': 'A4' },
  'F#m':   { 'major': 'A♯',   'minor': 'A',    'majorNote': 'A#4',  'minorNote': 'A4' },
  'F#dim': { 'major': 'A♯',   'minor': 'A',    'majorNote': 'A#4',  'minorNote': 'A4' },
  'F#+':   { 'major': 'A♯',   'minor': 'A',    'majorNote': 'A#4',  'minorNote': 'A4' },

  // G-Flat Chords
  'Gb':    { 'major': 'B♭',   'minor': 'B𝄫',  'majorNote': 'Bb4',  'minorNote': 'Bbb4' },
  'Gbm':   { 'major': 'B♭',   'minor': 'B𝄫',  'majorNote': 'Bb4',  'minorNote': 'Bbb4' },
  'Gbdim': { 'major': 'B♭',   'minor': 'B𝄫',  'majorNote': 'Bb4',  'minorNote': 'Bbb4' },
  'Gb+':   { 'major': 'B♭',   'minor': 'B𝄫',  'majorNote': 'Bb4',  'minorNote': 'Bbb4' },

  // G Chords
  'G':     { 'major': 'B',    'minor': 'B♭',  'majorNote': 'B4',   'minorNote': 'Bb4' },
  'Gm':    { 'major': 'B',    'minor': 'B♭',  'majorNote': 'B4',   'minorNote': 'Bb4' },
  'Gdim':  { 'major': 'B',    'minor': 'B♭',  'majorNote': 'B4',   'minorNote': 'Bb4' },
  'G+':    { 'major': 'B',    'minor': 'B♭',  'majorNote': 'B4',   'minorNote': 'Bb4' },

  // G-Sharp Chords
  'G#':    { 'major': 'B♯',   'minor': 'B',    'majorNote': 'B#4',  'minorNote': 'B4' },
  'G#m':   { 'major': 'B♯',   'minor': 'B',    'majorNote': 'B#4',  'minorNote': 'B4' },
  'G#dim': { 'major': 'B♯',   'minor': 'B',    'majorNote': 'B#4',  'minorNote': 'B4' },
  'G#+':   { 'major': 'B♯',   'minor': 'B',    'majorNote': 'B#4',  'minorNote': 'B4' },

  // A-Flat Chords
  'Ab':    { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb5' },
  'Abm':   { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb5' },
  'Abdim': { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb5' },
  'Ab+':   { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb5' },

  // A Chords
  'A':     { 'major': 'C♯',   'minor': 'C',    'majorNote': 'C#5',  'minorNote': 'C5' },
  'Am':    { 'major': 'C♯',   'minor': 'C',    'majorNote': 'C#5',  'minorNote': 'C5' },
  'Adim':  { 'major': 'C♯',   'minor': 'C',    'majorNote': 'C#5',  'minorNote': 'C5' },
  'A+':    { 'major': 'C♯',   'minor': 'C',    'majorNote': 'C#5',  'minorNote': 'C5' },

  // A-Sharp Chords
  'A#':    { 'major': 'C𝄪',   'minor': 'C♯',  'majorNote': 'C##5', 'minorNote': 'C#5' },
  'A#m':   { 'major': 'C𝄪',   'minor': 'C♯',  'majorNote': 'C##5', 'minorNote': 'C#5' },
  'A#dim': { 'major': 'C𝄪',   'minor': 'C♯',  'majorNote': 'C##5', 'minorNote': 'C#5' },
  'A#+':   { 'major': 'C𝄪',   'minor': 'C♯',  'majorNote': 'C##5', 'minorNote': 'C#5' },

  // B-Flat Chords
  'Bb':    { 'major': 'D',    'minor': 'D♭',  'majorNote': 'D4',   'minorNote': 'Db4' },
  'Bbm':   { 'major': 'D',    'minor': 'D♭',  'majorNote': 'D4',   'minorNote': 'Db4' },
  'Bbdim': { 'major': 'D',    'minor': 'D♭',  'majorNote': 'D4',   'minorNote': 'Db4' },
  'Bb+':   { 'major': 'D',    'minor': 'D♭',  'majorNote': 'D4',   'minorNote': 'Db4' },

  // B Chords
  'B':     { 'major': 'D♯',   'minor': 'D',    'majorNote': 'D#5',  'minorNote': 'D5' },
  'Bm':    { 'major': 'D♯',   'minor': 'D',    'majorNote': 'D#4',  'minorNote': 'D4' },
  'Bdim':  { 'major': 'D♯',   'minor': 'D',    'majorNote': 'D#4',  'minorNote': 'D4' },
  'B+':    { 'major': 'D♯',   'minor': 'D',    'majorNote': 'D#5',  'minorNote': 'D5' },

  // B-Sharp Chords
  'B#':    { 'major': 'D𝄪',   'minor': 'D♯',  'majorNote': 'D##4', 'minorNote': 'D#4' },
  'B#m':   { 'major': 'D𝄪',   'minor': 'D♯',  'majorNote': 'D##5', 'minorNote': 'D#5' },
  'B#dim': { 'major': 'D𝄪',   'minor': 'D♯',  'majorNote': 'D##4', 'minorNote': 'D#4' },

  // C-Flat Chords
  'Cb':    { 'major': 'E♭',   'minor': 'E𝄫',  'majorNote': 'Eb4',  'minorNote': 'Ebb4' },
  'Cbm':   { 'major': 'E♭',   'minor': 'E𝄫',  'majorNote': 'Eb4',  'minorNote': 'Ebb4' },
  'Cbdim': { 'major': 'E♭',   'minor': 'E𝄫',  'majorNote': 'Eb4',  'minorNote': 'Ebb4' },
  'Cb+':   { 'major': 'E♭',   'minor': 'E𝄫',  'majorNote': 'Eb4',  'minorNote': 'Ebb4' }
};

export const chordTones = {
  'C':   ['C',   'E',   'G'],
  'Cm':  ['C',   'E♭',  'G'],
  'Cdim':['C',   'E♭',  'G♭'],
  'C+':  ['C',   'E',   'G♯'],

  'C#':    ['C♯',   'E♯',   'G♯'],
  'C#m':   ['C♯',   'E',    'G♯'],
  'C#dim': ['C♯',   'E',    'G'],
  'C#+':   ['C♯',   'E♯',   'G𝄪'],

  'Db':    ['D♭',   'F',    'A♭'],
  'Dbm':   ['D♭',   'F♭',   'A♭'],
  'Dbdim': ['D♭',   'F♭',   'A𝄫'],
  'Db+':   ['D♭',   'F',    'A'],

  'D':   ['D',   'F♯',  'A'],
  'Dm':  ['D',   'F',   'A'],
  'Ddim':['D',   'F',   'A♭'],
  'D+':  ['D',   'F♯',  'A♯'],

  'D#':    ['D♯',   'F𝄪',   'A♯'],
  'D#m':   ['D♯',   'F♯',   'A♯'],
  'D#dim': ['D♯',   'F♯',   'A'],
  'D#+':   ['D♯',   'F𝄪',   'A𝄪'],

  'Eb':    ['E♭',   'G',    'B♭'],
  'Ebm':   ['E♭',   'G♭',   'B♭'],
  'Ebdim': ['E♭',   'G♭',   'B𝄫'],
  'Eb+':   ['E♭',   'G',    'B'],

  'E':   ['E',   'G♯',  'B'],
  'Em':  ['E',   'G',   'B'],
  'Edim':['E',   'G',   'B♭'],
  'E+':  ['E',   'G♯',  'B♯'],

  'Fb':    ['F♭',   'A♭',   'C♭'],
  'Fbm':   ['F♭',   'A𝄫',  'C♭'],
  'Fbdim': ['F♭',   'A𝄫',  'C𝄫'],
  'Fb+':   ['F♭',   'A♭',   'C'],

  'F':   ['F',   'A',   'C'],
  'Fm':  ['F',   'A♭',  'C'],
  'Fdim':['F',   'A♭',  'C♭'],
  'F+':  ['F',   'A',   'C♯'],

  'F#':    ['F♯',   'A♯',   'C♯'],
  'F#m':   ['F♯',   'A',    'C♯'],
  'F#dim': ['F♯',   'A',    'C'],
  'F#+':   ['F♯',   'A♯',   'C𝄪'],

  'Gb':    ['G♭',   'B♭',   'D♭'],
  'Gbm':   ['G♭',   'B𝄫',  'D♭'],
  'Gbdim': ['G♭',   'B𝄫',  'D𝄫'],
  'Gb+':   ['G♭',   'B♭',   'D'],

  'G':   ['G',   'B',   'D'],
  'Gm':  ['G',   'B♭',  'D'],
  'Gdim':['G',   'B♭',  'D♭'],
  'G+':  ['G',   'B',   'D♯'],

  'G#':    ['G♯',   'B♯',   'D♯'],
  'G#m':   ['G♯',   'B',    'D♯'],
  'G#dim': ['G♯',   'B',    'D'],
  'G#+':   ['G♯',   'B♯',   'D𝄪'],

  'Ab':    ['A♭',   'C',    'E♭'],
  'Abm':   ['A♭',   'C♭',   'E♭'],
  'Abdim': ['A♭',   'C♭',   'E𝄫'],
  'Ab+':   ['A♭',   'C',    'E'],

  'A':   ['A',   'C♯',  'E'],
  'Am':  ['A',   'C',   'E'],
  'Adim':['A',   'C',   'E♭'],
  'A+':  ['A',   'C♯',  'E♯'],

  'A#':    ['A♯',   'C𝄪',   'E♯'],
  'A#m':   ['A♯',   'C♯',   'E♯'],
  'A#dim': ['A♯',   'C♯',   'E'],
  'A#+':   ['A♯',   'C𝄪',   'E𝄪'],

  'Bb':    ['B♭',   'D',    'F'],
  'Bbm':   ['B♭',   'D♭',   'F'],
  'Bbdim': ['B♭',   'D♭',   'F♭'],
  'Bb+':   ['B♭',   'D',    'F♯'],

  'B':   ['B',   'D♯',  'F♯'],
  'Bm':  ['B',   'D',   'F♯'],
  'Bdim':['B',   'D',   'F'],
  'B+':  ['B',   'D♯',  'F𝄪']
};

export const chordSevenths = {
  // C Chords
  'C':     'B♭',
  'Cm':    'B♭',
  'Cdim':  'B♭',
  'C+':    'B♭',

  // C-Sharp Chords
  'C#':    'B',
  'C#m':   'B',
  'C#dim': 'B',
  'C#+':   'B',

  // D-Flat Chords
  'Db':    'C♭',
  'Dbm':   'C♭',
  'Dbdim': 'C♭',
  'Db+':   'C♭',

  // D Chords
  'D':     'C',
  'Dm':    'C',
  'Ddim':  'C',
  'D+':    'C',

  // D-Sharp Chords
  'D#':    'C♯',
  'D#m':   'C♯',
  'D#dim': 'C♯',
  'D#+':   'C♯',

  // E-Flat Chords
  'Eb':    'D♭',
  'Ebm':   'D♭',
  'Ebdim': 'D♭',
  'Eb+':   'D♭',

  // E Chords
  'E':     'D',
  'Em':    'D',
  'Edim':  'D',
  'E+':    'D',

  // E-Sharp Chords
  'E#':    'D♯',
  'E#m':   'D♯',
  'E#dim': 'D♯',
  'E#+':   'D♯',

  // F-Flat Chords
  'Fb':    'E𝄫',
  'Fbm':   'E𝄫',
  'Fbdim': 'E𝄫',
  'Fb+':   'E𝄫',

  // F Chords
  'F':     'E♭',
  'Fm':    'E♭',
  'Fdim':  'E♭',
  'F+':    'E♭',

  // F-Sharp Chords
  'F#':    'E',
  'F#m':   'E',
  'F#dim': 'E',
  'F#+':   'E',

  // G-Flat Chords
  'Gb':    'F♭',
  'Gbm':   'F♭',
  'Gbdim': 'F♭',
  'Gb+':   'F♭',

  // G Chords
  'G':     'F',
  'Gm':    'F',
  'Gdim':  'F',
  'G+':    'F',

  // G-Sharp Chords
  'G#':    'F♯',
  'G#m':   'F♯',
  'G#dim': 'F♯',
  'G#+':   'F♯',

  // A-Flat Chords
  'Ab':    'G♭',
  'Abm':   'G♭',
  'Abdim': 'G♭',
  'Ab+':   'G♭',

  // A Chords
  'A':     'G',
  'Am':    'G',
  'Adim':  'G',
  'A+':    'G',

  // A-Sharp Chords
  'A#':    'G♯',
  'A#m':   'G♯',
  'A#dim': 'G♯',
  'A#+':   'G♯',

  // B-Flat Chords
  'Bb':    'A♭',
  'Bbm':   'A♭',
  'Bbdim': 'A♭',
  'Bb+':   'A♭',

  // B Chords
  'B':     'A',
  'Bm':    'A',
  'Bdim':  'A',
  'B+':    'A',

  // B-Sharp Chords
  'B#':    'A♯',
  'B#m':   'A♯',
  'B#dim': 'A♯',

  // C-Flat Chords
  'Cb':    'B𝄫',
  'Cbm':   'B𝄫',
  'Cbdim': 'B𝄫',
  'Cb+':   'B𝄫'
};
export const chordMajorSevenths = {
  // C Chords
  'C':     'B',
  'Cm':    'B',
  'Cdim':  'B',
  'C+':    'B',

  // C-Sharp Chords
  'C#':    'B♯',
  'C#m':   'B♯',
  'C#dim': 'B♯',
  'C#+':   'B♯',

  // D-Flat Chords
  'Db':    'C',
  'Dbm':   'C',
  'Dbdim': 'C',
  'Db+':   'C',

  // D Chords
  'D':     'C♯',
  'Dm':    'C♯',
  'Ddim':  'C♯',
  'D+':    'C♯',

  // D-Sharp Chords
  'D#':    'C𝄪',
  'D#m':   'C𝄪',
  'D#dim': 'C𝄪',
  'D#+':   'C𝄪',

  // E-Flat Chords
  'Eb':    'D',
  'Ebm':   'D',
  'Ebdim': 'D',
  'Eb+':   'D',

  // E Chords
  'E':     'D♯',
  'Em':    'D♯',
  'Edim':  'D♯',
  'E+':    'D♯',

  // E-Sharp Chords
  'E#':    'D𝄪',
  'E#m':   'D𝄪',
  'E#dim': 'D𝄪',
  'E#+':   'D𝄪',

  // F-Flat Chords
  'Fb':    'E♭',
  'Fbm':   'E♭',
  'Fbdim': 'E♭',
  'Fb+':   'E♭',

  // F Chords
  'F':     'E',
  'Fm':    'E',
  'Fdim':  'E',
  'F+':    'E',

  // F-Sharp Chords
  'F#':    'E♯',
  'F#m':   'E♯',
  'F#dim': 'E♯',
  'F#+':   'E♯',

  // G-Flat Chords
  'Gb':    'F',
  'Gbm':   'F',
  'Gbdim': 'F',
  'Gb+':   'F',

  // G Chords
  'G':     'F♯',
  'Gm':    'F♯',
  'Gdim':  'F♯',
  'G+':    'F♯',

  // G-Sharp Chords
  'G#':    'F𝄪',
  'G#m':   'F𝄪',
  'G#dim': 'F𝄪',
  'G#+':   'F𝄪',

  // A-Flat Chords
  'Ab':    'G',
  'Abm':   'G',
  'Abdim': 'G',
  'Ab+':   'G',

  // A Chords
  'A':     'G♯',
  'Am':    'G♯',
  'Adim':  'G♯',
  'A+':    'G♯',

  // A-Sharp Chords
  'A#':    'G𝄪',
  'A#m':   'G𝄪',
  'A#dim': 'G𝄪',
  'A#+':   'G𝄪',

  // B-Flat Chords
  'Bb':    'A',
  'Bbm':   'A',
  'Bbdim': 'A',
  'Bb+':   'A',

  // B Chords
  'B':     'A♯',
  'Bm':    'A♯',
  'Bdim':  'A♯',
  'B+':    'A♯',

  // B-Sharp Chords (no B#+)
  'B#':    'A𝄪',
  'B#m':   'A𝄪',
  'B#dim': 'A𝄪',

  // C-Flat Chords
  'Cb':    'B♭',
  'Cbm':   'B♭',
  'Cbdim': 'B♭',
  'Cb+':   'B♭'
};
export const chordSeconds = {
  // C Chords
  'C':     'D',
  'Cm':    'D',
  'Cdim':  'D',
  'C+':    'D',

  // C-Sharp Chords
  'C#':    'D♯',
  'C#m':   'D♯',
  'C#dim': 'D♯',
  'C#+':   'D♯',

  // D-Flat Chords
  'Db':    'E♭',
  'Dbm':   'E♭',
  'Dbdim': 'E♭',
  'Db+':   'E♭',

  // D Chords
  'D':     'E',
  'Dm':    'E',
  'Ddim':  'E',
  'D+':    'E',

  // D-Sharp Chords
  'D#':    'E♯',
  'D#m':   'E♯',
  'D#dim': 'E♯',
  'D#+':   'E♯',

  // E-Flat Chords
  'Eb':    'F',
  'Ebm':   'F',
  'Ebdim': 'F',
  'Eb+':   'F',

  // E Chords
  'E':     'F♯',
  'Em':    'F♯',
  'Edim':  'F♯',
  'E+':    'F♯',

  // E-Sharp Chords
  'E#':    'F𝄪',
  'E#m':   'F𝄪',
  'E#dim': 'F𝄪',
  'E#+':   'F𝄪',

  // F-Flat Chords
  'Fb':    'G♭',
  'Fbm':   'G♭',
  'Fbdim': 'G♭',
  'Fb+':   'G♭',

  // F Chords
  'F':     'G',
  'Fm':    'G',
  'Fdim':  'G',
  'F+':    'G',

  // F-Sharp Chords
  'F#':    'G♯',
  'F#m':   'G♯',
  'F#dim': 'G♯',
  'F#+':   'G♯',

  // G-Flat Chords
  'Gb':    'A♭',
  'Gbm':   'A♭',
  'Gbdim': 'A♭',
  'Gb+':   'A♭',

  // G Chords
  'G':     'A',
  'Gm':    'A',
  'Gdim':  'A',
  'G+':    'A',

  // G-Sharp Chords
  'G#':    'A♯',
  'G#m':   'A♯',
  'G#dim': 'A♯',
  'G#+':   'A♯',

  // A-Flat Chords
  'Ab':    'B♭',
  'Abm':   'B♭',
  'Abdim': 'B♭',
  'Ab+':   'B♭',

  // A Chords
  'A':     'B',
  'Am':    'B',
  'Adim':  'B',
  'A+':    'B',

  // A-Sharp Chords
  'A#':    'B♯',
  'A#m':   'B♯',
  'A#dim': 'B♯',
  'A#+':   'B♯',

  // B-Flat Chords
  'Bb':    'C',
  'Bbm':   'C',
  'Bbdim': 'C',
  'Bb+':   'C',

  // B Chords
  'B':     'C♯',
  'Bm':    'C♯',
  'Bdim':  'C♯',
  'B+':    'C♯',

  // B-Sharp Chords (no B#+)
  'B#':    'C𝄪',
  'B#m':   'C𝄪',
  'B#dim': 'C𝄪',

  // C-Flat Chords
  'Cb':    'D♭',
  'Cbm':   'D♭',
  'Cbdim': 'D♭',
  'Cb+':   'D♭'
};
export const chordFourths = {
  // C Chords
  'C':     'F',
  'Cm':    'F',
  'Cdim':  'F',
  'C+':    'F',

  // C-Sharp Chords
  'C#':    'F♯',
  'C#m':   'F♯',
  'C#dim': 'F♯',
  'C#+':   'F♯',

  // D-Flat Chords
  'Db':    'G♭',
  'Dbm':   'G♭',
  'Dbdim': 'G♭',
  'Db+':   'G♭',

  // D Chords
  'D':     'G',
  'Dm':    'G',
  'Ddim':  'G',
  'D+':    'G',

  // D-Sharp Chords
  'D#':    'G♯',
  'D#m':   'G♯',
  'D#dim': 'G♯',
  'D#+':   'G♯',

  // E-Flat Chords
  'Eb':    'A♭',
  'Ebm':   'A♭',
  'Ebdim': 'A♭',
  'Eb+':   'A♭',

  // E Chords
  'E':     'A',
  'Em':    'A',
  'Edim':  'A',
  'E+':    'A',

  // E-Sharp Chords
  'E#':    'A♯',
  'E#m':   'A♯',
  'E#dim': 'A♯',
  'E#+':   'A♯',

  // F-Flat Chords
  'Fb':    'B𝄫',
  'Fbm':   'B𝄫',
  'Fbdim': 'B𝄫',
  'Fb+':   'B𝄫',

  // F Chords
  'F':     'B♭',
  'Fm':    'B♭',
  'Fdim':  'B♭',
  'F+':    'B♭',

  // F-Sharp Chords
  'F#':    'B',
  'F#m':   'B',
  'F#dim': 'B',
  'F#+':   'B',

  // G-Flat Chords
  'Gb':    'C♭',
  'Gbm':   'C♭',
  'Gbdim': 'C♭',
  'Gb+':   'C♭',

  // G Chords
  'G':     'C',
  'Gm':    'C',
  'Gdim':  'C',
  'G+':    'C',

  // G-Sharp Chords
  'G#':    'C♯',
  'G#m':   'C♯',
  'G#dim': 'C♯',
  'G#+':   'C♯',

  // A-Flat Chords
  'Ab':    'D♭',
  'Abm':   'D♭',
  'Abdim': 'D♭',
  'Ab+':   'D♭',

  // A Chords
  'A':     'D',
  'Am':    'D',
  'Adim':  'D',
  'A+':    'D',

  // A-Sharp Chords
  'A#':    'D♯',
  'A#m':   'D♯',
  'A#dim': 'D♯',
  'A#+':   'D♯',

  // B-Flat Chords
  'Bb':    'E♭',
  'Bbm':   'E♭',
  'Bbdim': 'E♭',
  'Bb+':   'E♭',

  // B Chords
  'B':     'E',
  'Bm':    'E',
  'Bdim':  'E',
  'B+':    'E',

  // B-Sharp Chords (no B#+)
  'B#':    'E♯',
  'B#m':   'E♯',
  'B#dim': 'E♯',

  // C-Flat Chords
  'Cb':    'F♭',
  'Cbm':   'F♭',
  'Cbdim': 'F♭',
  'Cb+':   'F♭'
};
export const chordSixths = {
  // C Chords
  'C':     'A',
  'Cm':    'A',
  'Cdim':  'A',
  'C+':    'A',

  // C-Sharp Chords
  'C#':    'A♯',
  'C#m':   'A♯',
  'C#dim': 'A♯',
  'C#+':   'A♯',

  // D-Flat Chords
  'Db':    'B♭',
  'Dbm':   'B♭',
  'Dbdim': 'B♭',
  'Db+':   'B♭',

  // D Chords
  'D':     'B',
  'Dm':    'B',
  'Ddim':  'B',
  'D+':    'B',

  // D-Sharp Chords
  'D#':    'B♯',
  'D#m':   'B♯',
  'D#dim': 'B♯',
  'D#+':   'B♯',

  // E-Flat Chords
  'Eb':    'C',
  'Ebm':   'C',
  'Ebdim': 'C',
  'Eb+':   'C',

  // E Chords
  'E':     'C♯',
  'Em':    'C♯',
  'Edim':  'C♯',
  'E+':    'C♯',

  // E-Sharp Chords
  'E#':    'C𝄪',
  'E#m':   'C𝄪',
  'E#dim': 'C𝄪',
  'E#+':   'C𝄪',

  // F-Flat Chords
  'Fb':    'D♭',
  'Fbm':   'D♭',
  'Fbdim': 'D♭',
  'Fb+':   'D♭',

  // F Chords
  'F':     'D',
  'Fm':    'D',
  'Fdim':  'D',
  'F+':    'D',

  // F-Sharp Chords
  'F#':    'D♯',
  'F#m':   'D♯',
  'F#dim': 'D♯',
  'F#+':   'D♯',

  // G-Flat Chords
  'Gb':    'E♭',
  'Gbm':   'E♭',
  'Gbdim': 'E♭',
  'Gb+':   'E♭',

  // G Chords
  'G':     'E',
  'Gm':    'E',
  'Gdim':  'E',
  'G+':    'E',

  // G-Sharp Chords
  'G#':    'E♯',
  'G#m':   'E♯',
  'G#dim': 'E♯',
  'G#+':   'E♯',

  // A-Flat Chords
  'Ab':    'F',
  'Abm':   'F',
  'Abdim': 'F',
  'Ab+':   'F',

  // A Chords
  'A':     'F♯',
  'Am':    'F♯',
  'Adim':  'F♯',   // Corrected to major sixth
  'A+':    'F♯',

  // A-Sharp Chords
  'A#':    'F𝄪',
  'A#m':   'F𝄪',
  'A#dim': 'F𝄪',   // Corrected to major sixth
  'A#+':   'F𝄪',

  // B-Flat Chords
  'Bb':    'G',
  'Bbm':   'G',
  'Bbdim': 'G',
  'Bb+':   'G',

  // B Chords
  'B':     'G♯',
  'Bm':    'G♯',
  'Bdim':  'G♯',   // Corrected to major sixth
  'B+':    'G♯',

  // B-Sharp Chords
  'B#':    'G𝄪',   // Corrected to major sixth
  'B#m':   'G𝄪',   // Corrected to major sixth
  'B#dim': 'G𝄪',   // Corrected to major sixth
  // (no B#+)

  // C-Flat Chords
  'Cb':    'A♭',
  'Cbm':   'A♭',
  'Cbdim': 'A♭',
  'Cb+':   'A♭'
};
export const chordAugmentedFifths = {
  // C Chords
  'C':     'G♯',
  'Cm':    'G♯',
  'Cdim':  'G♯',
  'C+':    'G♯',

  // C-Sharp Chords
  'C#':    'G𝄪',
  'C#m':   'G𝄪',
  'C#dim': 'G𝄪',
  'C#+':   'G𝄪',

  // D-Flat Chords
  'Db':    'A',
  'Dbm':   'A',
  'Dbdim': 'A',
  'Db+':   'A',

  // D Chords
  'D':     'A♯',
  'Dm':    'A♯',
  'Ddim':  'A♯',
  'D+':    'A♯',

  // D-Sharp Chords
  'D#':    'A𝄪',
  'D#m':   'A𝄪',
  'D#dim': 'A𝄪',
  'D#+':   'A𝄪',

  // E-Flat Chords
  'Eb':    'B',
  'Ebm':   'B',
  'Ebdim': 'B',
  'Eb+':   'B',

  // E Chords
  'E':     'B♯',
  'Em':    'B♯',
  'Edim':  'B♯',
  'E+':    'B♯',

  // E-Sharp Chords
  'E#':    'B𝄪',
  'E#m':   'B𝄪',
  'E#dim': 'B𝄪',
  'E#+':   'B𝄪',

  // F-Flat Chords
  'Fb':    'C',
  'Fbm':   'C',
  'Fbdim': 'C',
  'Fb+':   'C',

  // F Chords
  'F':     'C♯',
  'Fm':    'C♯',
  'Fdim':  'C♯',
  'F+':    'C♯',

  // F-Sharp Chords
  'F#':    'C𝄪',
  'F#m':   'C𝄪',
  'F#dim': 'C𝄪',
  'F#+':   'C𝄪',

  // G-Flat Chords
  'Gb':    'D',
  'Gbm':   'D',
  'Gbdim': 'D',
  'Gb+':   'D',

  // G Chords
  'G':     'D♯',
  'Gm':    'D♯',
  'Gdim':  'D♯',
  'G+':    'D♯',

  // G-Sharp Chords
  'G#':    'D𝄪',
  'G#m':   'D𝄪',
  'G#dim': 'D𝄪',
  'G#+':   'D𝄪',

  // A-Flat Chords
  'Ab':    'E',
  'Abm':   'E',
  'Abdim': 'E',
  'Ab+':   'E',

  // A Chords
  'A':     'E♯',
  'Am':    'E♯',
  'Adim':  'E♯',
  'A+':    'E♯',

  // A-Sharp Chords
  'A#':    'E𝄪',
  'A#m':   'E𝄪',
  'A#dim': 'E𝄪',
  'A#+':   'E𝄪',

  // B-Flat Chords
  'Bb':    'F♯',
  'Bbm':   'F♯',
  'Bbdim': 'F♯',
  'Bb+':   'F♯',

  // B Chords
  'B':     'F𝄪',
  'Bm':    'F𝄪',
  'Bdim':  'F𝄪',
  'B+':    'F𝄪',

  // B-Sharp Chords
  'B#':    'F𝄪', // Note: This is a triple-sharp
  'B#m':   'F𝄪',
  'B#dim': 'F𝄪',
  // (no B#+)

  // C-Flat Chords
  'Cb':    'G',
  'Cbm':   'G',
  'Cbdim': 'G',
  'Cb+':   'G'
};
export const chordDiminishedFifths = {
  // C Chords
  'C':     'G♭',
  'Cm':    'G♭',
  'Cdim':  'G♭',
  'C+':    'G♭',

  // C-Sharp Chords
  'C#':    'G',
  'C#m':   'G',
  'C#dim': 'G',
  'C#+':   'G',

  // D-Flat Chords
  'Db':    'A𝄫',
  'Dbm':   'A𝄫',
  'Dbdim': 'A𝄫',
  'Db+':   'A𝄫',

  // D Chords
  'D':     'A♭',
  'Dm':    'A♭',
  'Ddim':  'A♭',
  'D+':    'A♭',

  // D-Sharp Chords
  'D#':    'A',
  'D#m':   'A',
  'D#dim': 'A',
  'D#+':   'A',

  // E-Flat Chords
  'Eb':    'B𝄫',
  'Ebm':   'B𝄫',
  'Ebdim': 'B𝄫',
  'Eb+':   'B𝄫',

  // E Chords
  'E':     'B♭',
  'Em':    'B♭',
  'Edim':  'B♭',
  'E+':    'B♭',

  // E-Sharp Chords
  'E#':    'B',
  'E#m':   'B',
  'E#dim': 'B',
  'E#+':   'B',

  // F-Flat Chords
  'Fb':    'C𝄫',
  'Fbm':   'C𝄫',
  'Fbdim': 'C𝄫',
  'Fb+':   'C𝄫',

  // F Chords
  'F':     'C♭',
  'Fm':    'C♭',
  'Fdim':  'C♭',
  'F+':    'C♭',

  // F-Sharp Chords
  'F#':    'C',
  'F#m':   'C',
  'F#dim': 'C',
  'F#+':   'C',

  // G-Flat Chords
  'Gb':    'D𝄫',
  'Gbm':   'D𝄫',
  'Gbdim': 'D𝄫',
  'Gb+':   'D𝄫',

  // G Chords
  'G':     'D♭',
  'Gm':    'D♭',
  'Gdim':  'D♭',
  'G+':    'D♭',

  // G-Sharp Chords
  'G#':    'D',
  'G#m':   'D',
  'G#dim': 'D',
  'G#+':   'D',

  // A-Flat Chords
  'Ab':    'E𝄫',
  'Abm':   'E𝄫',
  'Abdim': 'E𝄫',
  'Ab+':   'E𝄫',

  // A Chords
  'A':     'E♭',
  'Am':    'E♭',
  'Adim':  'E♭',
  'A+':    'E♭',

  // A-Sharp Chords
  'A#':    'E',
  'A#m':   'E',
  'A#dim': 'E',
  'A#+':   'E',

  // B-Flat Chords
  'Bb':    'F♭',
  'Bbm':   'F♭',
  'Bbdim': 'F♭',
  'Bb+':   'F♭',

  // B Chords
  'B':     'F',
  'Bm':    'F',
  'Bdim':  'F',
  'B+':    'F',

  // B-Sharp Chords
  'B#':    'F♯',
  'B#m':   'F♯',
  'B#dim': 'F♯',
  // (no B#+)

  // C-Flat Chords
  'Cb':    'G𝄫',
  'Cbm':   'G𝄫',
  'Cbdim': 'G𝄫',
  'Cb+':   'G𝄫'
};

export const rhythmChordNotes = { 
  // C Chords
  'C':     ['C3',  'C4',  'E4',  'G4',   'C5'],
  'Cm':    ['C3',  'C4',  'Eb4', 'G4',   'C5'],
  'Cdim':  ['C3',  'C4',  'Eb4', 'Gb4',  'C5'],
  'C+':    ['C3',  'C4',  'E4',  'G#4',  'C5'],

  // C-Sharp Chords
  'C#':    ['C#3', 'C#4', 'E#4', 'G#4',  'C#5'],
  'C#m':   ['C#3', 'C#4', 'E4',  'G#4',  'C#5'],
  'C#dim': ['C#3', 'C#4', 'E4',  'G4',   'C#5'],
  'C#+':   ['C#3', 'C#4', 'E#4', 'G𝄪4', 'C#5'],

  // D-Flat Chords
  'Db':    ['Db3', 'Db4', 'F4',  'Ab4',  'Db5'],
  'Dbm':   ['Db3', 'Db4', 'Fb4', 'Ab4',  'Db5'],
  'Dbdim': ['Db3', 'Db4', 'Fb4', 'Abb4', 'Db5'],
  'Db+':   ['Db3', 'Db4', 'F4',  'A4',   'Db5'],

  // D Chords
  'D':     ['D3',  'D4',  'F#4', 'A4',   'D5'],
  'Dm':    ['D3',  'D4',  'F4',  'A4',   'D5'],
  'Ddim':  ['D3',  'D4',  'F4',  'Ab4',  'D5'],
  'D+':    ['D3',  'D4',  'F#4', 'A#4',  'D5'],

  // D-Sharp Chords
  'D#':    ['D#3', 'D#4', 'F𝄪4', 'A#4',  'D#5'],
  'D#m':   ['D#3', 'D#4', 'F#4',  'A#4',  'D#5'],
  'D#dim': ['D#3', 'D#4', 'F#4',  'A4',   'D#5'],
  'D#+':   ['D#3', 'D#4', 'F𝄪4', 'A𝄪4', 'D#5'],

  // E-Flat Chords
  'Eb':    ['Eb3', 'Eb4', 'G4',   'Bb4',  'Eb5'],
  'Ebm':   ['Eb3', 'Eb4', 'Gb4',  'Bb4',  'Eb5'],
  'Ebdim': ['Eb3', 'Eb4', 'Gb4',  'Bbb4', 'Eb5'],
  'Eb+':   ['Eb3', 'Eb4', 'G4',   'B4',   'Eb5'],

  // E Chords
  'E':     ['E3',  'E4',  'G#4',  'B4',   'E5'],
  'Em':    ['E3',  'E4',  'G4',   'B4',   'E5'],
  'Edim':  ['E3',  'E4',  'G4',   'Bb4',  'E5'],
  'E+':    ['E3',  'E4',  'G#4',  'B#4',  'E5'],

  // E-Sharp Chords
  'E#':    ['E#3', 'E#4', 'G𝄪4', 'B#4',  'E#5'],
  'E#m':   ['E#3', 'E#4', 'G#4',  'B#4',  'E#5'],
  'E#dim': ['E#3', 'E#4', 'G#4',  'B4',   'E#5'],
  'E#+':   ['E#3', 'E#4', 'G𝄪4', 'B𝄪4','E#5'],

  // F-Flat Chords
  'Fb':    ['Fb3', 'Fb4', 'Ab3',  'Cb4',  'Fb4'],
  'Fbm':   ['Fb3', 'Fb4', 'Abb3', 'Cb4',  'Fb4'],
  'Fbdim': ['Fb3', 'Fb4', 'Abb3', 'Cbb4', 'Fb4'],
  'Fb+':   ['Fb3', 'Fb4', 'Ab3',  'C4',   'Fb4'],

  // F Chords
  'F':     ['F3',  'F4',  'A4',   'C5',   'F5'],
  'Fm':    ['F3',  'F4',  'Ab4',  'C5',   'F5'],
  'Fdim':  ['F3',  'F4',  'Ab4',  'Cb5',  'F5'],
  'F+':    ['F3',  'F4',  'A4',   'C#5',  'F5'],

  // F-Sharp Chords
  'F#':    ['F#3', 'F#4', 'A#4',  'C#5',  'F#5'],
  'F#m':   ['F#3', 'F#4', 'A4',   'C#5',  'F#5'],
  'F#dim': ['F#3', 'F#4', 'A4',   'C5',   'F#5'],
  'F#+':   ['F#3', 'F#4', 'A#4',  'C𝄪5', 'F#5'],

  // G-Flat Chords
  'Gb':    ['Gb3', 'Gb4', 'Bb3',  'Db4',  'Gb4'],
  'Gbm':   ['Gb3', 'Gb4', 'Bbb3', 'Db4',  'Gb4'],
  'Gbdim': ['Gb3', 'Gb4', 'Bbb3', 'Dbb4', 'Gb4'],
  'Gb+':   ['Gb3', 'Gb4', 'Bb3',  'D4',   'Gb4'],

  // G Chords
  'G':     ['G3',  'G4',  'B4',   'D5',   'G5'],
  'Gm':    ['G3',  'G4',  'Bb4',  'D5',   'G5'],
  'Gdim':  ['G3',  'G4',  'Bb4',  'Db5',  'G5'],
  'G+':    ['G3',  'G4',  'B4',   'D#5',  'G5'],

  // G-Sharp Chords
  'G#':    ['G#3', 'G#4', 'B#4',  'D#5',  'G#5'],
  'G#m':   ['G#3', 'G#4', 'B4',   'D#5',  'G#5'],
  'G#dim': ['G#3', 'G#4', 'B4',   'D5',   'G#5'],
  'G#+':   ['G#3', 'G#4', 'B#4',  'D𝄪5', 'G#5'],

  // A-Flat Chords
  'Ab':    ['Ab2', 'Ab3', 'C4',   'Eb4',  'Ab4'],
  'Abm':   ['Ab2', 'Ab3', 'Cb4',  'Eb4',  'Ab4'],
  'Abdim': ['Ab2', 'Ab3', 'Cb4',  'Ebb4', 'Ab4'],
  'Ab+':   ['Ab2', 'Ab3', 'C4',   'E4',   'Ab4'],

  // A Chords
  'A':     ['A2',  'A3',  'C#4',  'E4',   'A4'],
  'Am':    ['A2',  'A3',  'C4',   'E4',   'A4'],
  'Adim':  ['A2',  'A3',  'C4',   'Eb4',  'A4'],
  'A+':    ['A2',  'A3',  'C#4',  'E#4',  'A4'],

  // A-Sharp Chords
  'A#':    ['A#2', 'A#3', 'C𝄪4',  'E#4',  'A#4'],
  'A#m':   ['A#2', 'A#3', 'C#4',  'E#4',  'A#4'],
  'A#dim': ['A#2', 'A#3', 'C#4',  'E4',   'A#4'],
  'A#+':   ['A#2', 'A#3', 'C𝄪4',  'E𝄪4', 'A#4'],

  // B-Flat Chords
  'Bb':    ['Bb2', 'Bb3', 'D4',   'F4',   'Bb4'],
  'Bbm':   ['Bb2', 'Bb3', 'Db4',  'F4',   'Bb4'],
  'Bbdim': ['Bb2', 'Bb3', 'Db4',  'Fb4',  'Bb4'],
  'Bb+':   ['Bb2', 'Bb3', 'D4',   'F#4',  'Bb4'],

  // B Chords
  'B':     ['B2',  'B3',  'D#4',  'F#4',  'B4'],
  'Bm':    ['B2',  'B3',  'D4',   'F#4',  'B4'],
  'Bdim':  ['B2',  'B3',  'D4',   'F4',   'B4'],
  'B+':    ['B2',  'B3',  'D#4',  'F𝄪4', 'B4'],

  // B-Sharp Chords
  'B#':    ['B#2', 'B#3', 'D𝄪4', 'F𝄪4', 'B#4'],
  'B#m':   ['B#2', 'B#3', 'D#4',  'F𝄪4', 'B#4'],
  'B#dim': ['B#2', 'B#3', 'D#4',  'F#4',  'B#4'],
  // No B#+

  // C-Flat Chords
  'Cb':    ['Cb3', 'Cb4', 'Eb4',  'Gb4',  'Cb5'],
  'Cbm':   ['Cb3', 'Cb4', 'Ebb4', 'Gb4',  'Cb5'],
  'Cbdim': ['Cb3', 'Cb4', 'Ebb4', 'Gbb4', 'Cb5'],
  'Cb+':   ['Cb3', 'Cb4', 'Eb4',  'G4',   'Cb5']
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
export const rhythmChordSixthNotes = {
  'C': 'A4', 'Dm': 'B4', 'Em': 'C#5', 'F': 'D5', 'G': 'E5', 'Am': 'F#4', 'Bb': 'G4',
  'Db': 'Bb4', 'Ebm': 'C5', 'Fm': 'D5', 'Gb': 'Eb5', 'Ab': 'F4', 'Bbm': 'G4', 'Cb': 'Ab4',
  'D': 'B4', 'F#m': 'D#5', 'Bm': 'G#4',
  'Eb': 'C5', 'Gm': 'E5', 'Cm': 'A4',
  'E': 'C#5', 'G#m': 'E#5', 'C#m': 'A#4',
  'Fb': 'Db5', 'Abm': 'F4',
  'B': 'G#4', 'D#m': 'B#4', 'F#': 'D#5', 'A': 'F#4',
  'Bdim': 'G4', 'Cdim': 'A4', 'C#dim': 'A#4', 'Ddim': 'B4', 'D#dim': 'B#4', 'Edim': 'C#5', 'Fdim': 'D5', 'F#dim': 'D#5', 'Gdim': 'E5', 'G#dim': 'E#5', 'Adim': 'F4', 'A#dim': 'F#4'
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
  sine: { duration: 0.4, attack: 0.04, hold: 0.2, release: 0.16, filterFreq: 3000, filterQ: 0.5, gain: 0.18, vibrato: false }, // Reduced from 0.36
  triangle: { duration: 0.29, attack: 0.015, hold: 0.07, release: 0.2, filterFreq: 1200, filterQ: 1, gain: 0.19, vibrato: false }, // Reduced from 0.38
  square: { duration: 0.25, attack: 0.005, hold: 0.02, release: 0.225, filterFreq: 900, filterQ: 2, gain: 0.15, vibrato: false }, // Reduced from 0.30
  saw: { duration: 0.33, attack: 0.02, hold: 0.05, release: 0.26, filterFreq: 1600, filterQ: 1.5, gain: 0.14, pitchBend: true, bendAmount: 30, bendTime: 0.08, vibrato: false }, // Reduced from 0.28
  voice: { duration: 0.5, attack: 0.08, hold: 0.3, release: 0.12, filterFreq: 1000, filterQ: 1, gain: 0.18, vibrato: true, vibratoFreq: 5, vibratoAmount: 4 } // Reduced from 0.36
};
