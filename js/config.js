// --- Sound Synthesis Variables ---
export const waveforms = ['sine', 'triangle', 'square', 'saw', 'voice'];

// --- Key and Scale Data ---
export const displayKeys = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

export const keyMap = {
    'C': { 'Major': 'C', 'Natural Minor': 'C', 'Harmonic Minor': 'C', 'Melodic Minor': 'C' },
    'C#/Db': { 'Major': 'Db', 'Natural Minor': 'C#', 'Harmonic Minor': 'C#', 'Melodic Minor': 'C#' },
    'D': { 'Major': 'D', 'Natural Minor': 'D', 'Harmonic Minor': 'D', 'Melodic Minor': 'D' },
    'D#/Eb': { 'Major': 'Eb', 'Natural Minor': 'Eb', 'Harmonic Minor': 'Eb', 'Melodic Minor': 'Eb' },
    'E': { 'Major': 'E', 'Natural Minor': 'E', 'Harmonic Minor': 'E', 'Melodic Minor': 'E' },
    'F': { 'Major': 'F', 'Natural Minor': 'F', 'Harmonic Minor': 'F', 'Melodic Minor': 'F' },
    'F#/Gb': { 'Major': 'Gb', 'Natural Minor': 'F#', 'Harmonic Minor': 'F#', 'Melodic Minor': 'F#' },
    'G': { 'Major': 'G', 'Natural Minor': 'G', 'Harmonic Minor': 'G', 'Melodic Minor': 'G' },
    'G#/Ab': { 'Major': 'Ab', 'Natural Minor': 'G#', 'Harmonic Minor': 'G#', 'Melodic Minor': 'G#' },
    'A': { 'Major': 'A', 'Natural Minor': 'A', 'Harmonic Minor': 'A', 'Melodic Minor': 'A' },
    'A#/Bb': { 'Major': 'Bb', 'Natural Minor': 'Bb', 'Harmonic Minor': 'Bb', 'Melodic Minor': 'Bb' },
    'B': { 'Major': 'B', 'Natural Minor': 'B', 'Harmonic Minor': 'B', 'Melodic Minor': 'B' }
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
  'C': [ { value: 'C',  display: 'C / I' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Em', display: 'Em / iii' }, { value: 'F',  display: 'F / IV' }, { value: 'G',  display: 'G / V' }, { value: 'Am', display: 'Am / vi' }, { value: 'B°', display: 'B° / vii°' } ],
  'Db': [ { value: 'Db', display: 'Db / I' }, { value: 'Ebm',display: 'Ebm / ii' }, { value: 'Fm', display: 'Fm / iii' }, { value: 'Gb', display: 'Gb / IV' }, { value: 'Ab', display: 'Ab / V' }, { value: 'Bbm',display: 'Bbm / vi' }, { value: 'C°', display: 'C° / vii°' } ],
  'D': [ { value: 'D',  display: 'D / I' }, { value: 'Em', display: 'Em / ii' }, { value: 'F#m',display: 'F#m / iii' }, { value: 'G',  display: 'G / IV' }, { value: 'A',  display: 'A / V' }, { value: 'Bm', display: 'Bm / vi' }, { value: 'C#°',display: 'C#° / vii°' } ],
  'Eb': [ { value: 'Eb', display: 'Eb / I' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Gm', display: 'Gm / iii' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Cm', display: 'Cm / vi' }, { value: 'D°', display: 'D° / vii°' } ],
  'E': [ { value: 'E',  display: 'E / I' }, { value: 'F#m',display: 'F#m / ii' }, { value: 'G#m',display: 'G#m / iii' }, { value: 'A',  display: 'A / IV' }, { value: 'B',  display: 'B / V' }, { value: 'C#m',display: 'C#m / vi' }, { value: 'D#°',display: 'D#° / vii°' } ],
  'F': [ { value: 'F',  display: 'F / I' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Am', display: 'Am / iii' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'C',  display: 'C / V' }, { value: 'Dm', display: 'Dm / vi' }, { value: 'E°', display: 'E° / vii°' } ],
  'Gb': [ { value: 'Gb', display: 'Gb / I' }, { value: 'Abm',display: 'Abm / ii' }, { value: 'Bbm',display: 'Bbm / iii' }, { value: 'Cb', display: 'Cb / IV' },  { value: 'Db', display: 'Db / V' }, { value: 'Ebm',display: 'Ebm / vi' }, { value: 'F°', display: 'F° / vii°' } ],
  'G': [ { value: 'G',  display: 'G / I' }, { value: 'Am', display: 'Am / ii' }, { value: 'Bm', display: 'Bm / iii' }, { value: 'C',  display: 'C / IV' }, { value: 'D',  display: 'D / V' }, { value: 'Em', display: 'Em / vi' }, { value: 'F#°',display: 'F#° / vii°' } ],
  'Ab': [ { value: 'Ab', display: 'Ab / I' }, { value: 'Bbm',display: 'Bbm / ii' }, { value: 'Cm', display: 'Cm / iii' }, { value: 'Db', display: 'Db / IV' }, { value: 'Eb', display: 'Eb / V' }, { value: 'Fm', display: 'Fm / vi' }, { value: 'G°', display: 'G° / vii°' } ],
  'A': [ { value: 'A',  display: 'A / I' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'C#m',display: 'C#m / iii' }, { value: 'D',  display: 'D / IV' }, { value: 'E',  display: 'E / V' }, { value: 'F#m',display: 'F#m / vi' }, { value: 'G#°',display: 'G#° / vii°' } ],
  'Bb': [ { value: 'Bb', display: 'Bb / I' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Dm', display: 'Dm / iii' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'F',  display: 'F / V' }, { value: 'Gm', display: 'Gm / vi' }, { value: 'A°', display: 'A° / vii°' } ],
  'B': [ { value: 'B',  display: 'B / I' }, { value: 'C#m',display: 'C#m / ii' }, { value: 'D#m',display: 'D#m / iii' }, { value: 'E',  display: 'E / IV' }, { value: 'F#', display: 'F# / V' }, { value: 'G#m',display: 'G#m / vi' }, { value: 'A#°',display: 'A#° / vii°' } ]
};

const naturalMinorKeyChordMap = {
    'C': [ { value: 'Cm', display: 'Cm / i' }, { value: 'D°', display: 'D° / ii°' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'Gm', display: 'Gm / v' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Bb', display: 'Bb / bVII' } ],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'D#°', display: 'D#° / ii°' }, { value: 'E', display: 'E / bIII' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'G#m', display: 'G#m / v' }, { value: 'A', display: 'A / bVI' }, { value: 'B', display: 'B / bVII' } ],
    'D': [ { value: 'Dm', display: 'Dm / i' }, { value: 'E°', display: 'E° / ii°' }, { value: 'F', display: 'F / bIII' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'Am', display: 'Am / v' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'C', display: 'C / bVII' } ],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'F°', display: 'F° / ii°' }, { value: 'Gb', display: 'Gb / bIII' }, { value: 'Abm', display: 'Abm / iv' }, { value: 'Bbm', display: 'Bbm / v' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'Db', display: 'Db / bVII' } ],
    'E': [ { value: 'Em', display: 'Em / i' }, { value: 'F#°', display: 'F#° / ii°' }, { value: 'G', display: 'G / bIII' }, { value: 'Am', display: 'Am / iv' }, { value: 'Bm', display: 'Bm / v' }, { value: 'C', display: 'C / bVI' }, { value: 'D', display: 'D / bVII' } ],
    'F': [ { value: 'Fm', display: 'Fm / i' }, { value: 'G°', display: 'G° / ii°' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'Cm', display: 'Cm / v' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Eb', display: 'Eb / bVII' } ],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'G#°', display: 'G#° / ii°' }, { value: 'A', display: 'A / bIII' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'C#m', display: 'C#m / v' }, { value: 'D', display: 'D / bVI' }, { value: 'E', display: 'E / bVII' } ],
    'G': [ { value: 'Gm', display: 'Gm / i' }, { value: 'A°', display: 'A° / ii°' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'Dm', display: 'Dm / v' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'F', display: 'F / bVII' } ],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'A#°', display: 'A#° / ii°' }, { value: 'B', display: 'B / bIII' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'D#m', display: 'D#m / v' }, { value: 'E', display: 'E / bVI' }, { value: 'F#', display: 'F# / bVII' } ],
    'A': [ { value: 'Am', display: 'Am / i' }, { value: 'B°', display: 'B° / ii°' }, { value: 'C', display: 'C / bIII' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'Em', display: 'Em / v' }, { value: 'F', display: 'F / bVI' }, { value: 'G', display: 'G / bVII' } ],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'C°', display: 'C° / ii°' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Ebm', display: 'Ebm / iv' }, { value: 'Fm', display: 'Fm / v' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Ab', display: 'Ab / bVII' } ],
    'B': [ { value: 'Bm', display: 'Bm / i' }, { value: 'C#°', display: 'C#° / ii°' }, { value: 'D', display: 'D / bIII' }, { value: 'Em', display: 'Em / iv' }, { value: 'F#m', display: 'F#m / v' }, { value: 'G', display: 'G / bVI' }, { value: 'A', display: 'A / bVII' } ]
};

const harmonicMinorKeyChordMap = {
    'C': [ { value: 'Cm', display: 'Cm / i' }, { value: 'D°', display: 'D° / ii°' }, { value: 'Eb+', display: 'Eb+ / bIII+' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'G', display: 'G / V' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'B°', display: 'B° / vii°' } ],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'D#°', display: 'D#° / ii°' }, { value: 'E+', display: 'E+ / bIII+' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'G#', display: 'G# / V' }, { value: 'A', display: 'A / bVI' }, { value: 'B#°', display: 'B#° / vii°' } ],
    'D': [ { value: 'Dm', display: 'Dm / i' }, { value: 'E°', display: 'E° / ii°' }, { value: 'F+', display: 'F+ / bIII+' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'A', display: 'A / V' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'C#°', display: 'C#° / vii°' } ],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'F°', display: 'F° / ii°' }, { value: 'Gb+', display: 'Gb+ / bIII+' }, { value: 'Abm', display: 'Abm / iv' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'D°', display: 'D° / vii°' } ],
    'E': [ { value: 'Em', display: 'Em / i' }, { value: 'F#°', display: 'F#° / ii°' }, { value: 'G+', display: 'G+ / bIII+' }, { value: 'Am', display: 'Am / iv' }, { value: 'B', display: 'B / V' }, { value: 'C', display: 'C / bVI' }, { value: 'D#°', display: 'D#° / vii°' } ],
    'F': [ { value: 'Fm', display: 'Fm / i' }, { value: 'G°', display: 'G° / ii°' }, { value: 'Ab+', display: 'Ab+ / bIII+' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'C', display: 'C / V' }, { value: 'Db', display: 'Db / bVI' }, { value: 'E°', display: 'E° / vii°' } ],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'G#°', display: 'G#° / ii°' }, { value: 'A+', display: 'A+ / bIII+' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'C#', display: 'C# / V' }, { value: 'D', display: 'D / bVI' }, { value: 'E#°', display: 'E#° / vii°' } ],
    'G': [ { value: 'Gm', display: 'Gm / i' }, { value: 'A°', display: 'A° / ii°' }, { value: 'Bb+', display: 'Bb+ / bIII+' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'D', display: 'D / V' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'F#°', display: 'F#° / vii°' } ],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'A#°', display: 'A#° / ii°' }, { value: 'B+', display: 'B+ / bIII+' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'D#', display: 'D# / V' }, { value: 'E', display: 'E / bVI' }, { value: 'F##°', display: 'F##° / vii°' } ],
    'A': [ { value: 'Am', display: 'Am / i' }, { value: 'B°', display: 'B° / ii°' }, { value: 'C+', display: 'C+ / bIII+' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'E', display: 'E / V' }, { value: 'F', display: 'F / bVI' }, { value: 'G#°', display: 'G#° / vii°' } ],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'C°', display: 'C° / ii°' }, { value: 'Db+', display: 'Db+ / bIII+' }, { value: 'Ebm', display: 'Ebm / iv' }, { value: 'F', display: 'F / V' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'A°', display: 'A° / vii°' } ],
    'B': [ { value: 'Bm', display: 'Bm / i' }, { value: 'C#°', display: 'C#° / ii°' }, { value: 'D+', display: 'D+ / bIII+' }, { value: 'Em', display: 'Em / iv' }, { value: 'F#', display: 'F# / V' }, { value: 'G', display: 'G / bVI' }, { value: 'A#°', display: 'A#° / vii°' } ]
};

const melodicMinorKeyChordMap = {
  'C': [ { value: 'Cm', display: 'Cm / i' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Eb+', display: 'Eb+ / bIII+' }, { value: 'F', display: 'F / IV' }, { value: 'G', display: 'G / V' }, { value: 'A°', display: 'A° / vi°' }, { value: 'B°', display: 'B° / vii°' } ],
  'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'D#m', display: 'D#m / ii' }, { value: 'E+', display: 'E+ / bIII+' }, { value: 'F#', display: 'F# / IV' }, { value: 'G#', display: 'G# / V' }, { value: 'A#°', display: 'A#° / vi°' }, { value: 'B#°', display: 'B#° / vii°' } ],
  'D': [ { value: 'Dm', display: 'Dm / i' }, { value: 'Em', display: 'Em / ii' }, { value: 'F+', display: 'F+ / bIII+' }, { value: 'G', display: 'G / IV' }, { value: 'A', display: 'A / V' }, { value: 'B°', display: 'B° / vi°' }, { value: 'C#°', display: 'C#° / vii°' } ],
  'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Gb+', display: 'Gb+ / bIII+' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bb', display: 'Bb / V' }, { value: 'C°', display: 'C° / vi°' }, { value: 'D°', display: 'D° / vii°' } ],
  'E': [ { value: 'Em', display: 'Em / i' }, { value: 'F#m', display: 'F#m / ii' }, { value: 'G+', display: 'G+ / bIII+' }, { value: 'A', display: 'A / IV' }, { value: 'B', display: 'B / V' }, { value: 'C#°', display: 'C#° / vi°' }, { value: 'D#°', display: 'D#° / vii°' } ],
  'F': [ { value: 'Fm', display: 'Fm / i' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Ab+', display: 'Ab+ / bIII+' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'C', display: 'C / V' }, { value: 'D°', display: 'D° / vi°' }, { value: 'E°', display: 'E° / vii°' } ],
  'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'G#m', display: 'G#m / ii' }, { value: 'A+', display: 'A+ / bIII+' }, { value: 'B', display: 'B / IV' }, { value: 'C#', display: 'C# / V' }, { value: 'D#°', display: 'D#° / vi°' }, { value: 'E#°', display: 'E#° / vii°' } ],
  'G': [ { value: 'Gm', display: 'Gm / i' }, { value: 'Am', display: 'Am / ii' }, { value: 'Bb+', display: 'Bb+ / bIII+' }, { value: 'C', display: 'C / IV' }, { value: 'D', display: 'D / V' }, { value: 'E°', display: 'E° / vi°' }, { value: 'F#°', display: 'F#° / vii°' } ],
  'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'A#m', display: 'A#m / ii' }, { value: 'B+', display: 'B+ / bIII+' }, { value: 'C#', display: 'C# / IV' }, { value: 'D#', display: 'D# / V' }, { value: 'E#°', display: 'E#° / vi°' }, { value: 'F##°', display: 'F##° / vii°' } ],
  'A': [ { value: 'Am', display: 'Am / i' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'C+', display: 'C+ / bIII+' }, { value: 'D', display: 'D / IV' }, { value: 'E', display: 'E / V' }, { value: 'F#°', display: 'F#° / vi°' }, { value: 'G#°', display: 'G#° / vii°' } ],
  'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Db+', display: 'Db+ / bIII+' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'F', display: 'F / V' }, { value: 'G°', display: 'G° / vi°' }, { value: 'A°', display: 'A° / vii°' } ],
  'B': [ { value: 'Bm', display: 'Bm / i' }, { value: 'C#m', display: 'C#m / ii' }, { value: 'D+', display: 'D+ / bIII+' }, { value: 'E', display: 'E / IV' }, { value: 'F#', display: 'F# / V' }, { value: 'G#°', display: 'G#° / vi°' }, { value: 'A#°', display: 'A#° / vii°' } ]
};

// --- Structure for all scale maps ---
export const scaleChordMaps = {
  'Major': majorKeyChordMap,
  'Natural Minor': naturalMinorKeyChordMap,
  'Harmonic Minor': harmonicMinorKeyChordMap,
  'Melodic Minor': melodicMinorKeyChordMap,
};

// --- Create a master list of all unique chords ---
const allMajorChords = Object.values(majorKeyChordMap).flat().map(c => c.value);
const allNaturalMinorChords = Object.values(naturalMinorKeyChordMap).flat().map(c => c.value);
const allHarmonicMinorChords = Object.values(harmonicMinorKeyChordMap).flat().map(c => c.value);
const allMelodicMinorChords = Object.values(melodicMinorKeyChordMap).flat().map(c => c.value);
export const allChords = [...new Set([...allMajorChords, ...allNaturalMinorChords, ...allHarmonicMinorChords, ...allMelodicMinorChords])].sort();

export const allChordOptions = allChords.map(chordValue => {
    let displayName = chordValue;
    // Prioritize finding a display name from the Major scale maps first
    for (const key in majorKeyChordMap) {
        const found = majorKeyChordMap[key].find(c => c.value === chordValue);
        if (found) {
            displayName = found.display;
            return { value: chordValue, display: displayName };
        }
    }
    // Then check other scales
    for (const scaleName in scaleChordMaps) {
        if (scaleName === 'Major') continue;
        for (const key in scaleChordMaps[scaleName]) {
            const found = scaleChordMaps[scaleName][key].find(c => c.value === chordValue);
            if (found) {
                displayName = found.display;
                return { value: chordValue, display: displayName };
            }
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
  // Augmented Chords
  'C+': 'augmented', 'Db+': 'augmented', 'D+': 'augmented', 'Eb+': 'augmented', 'E+': 'augmented', 'F+': 'augmented',
  'F#+': 'augmented', 'Gb+': 'augmented', 'G+': 'augmented', 'Ab+': 'augmented', 'A+': 'augmented', 'Bb+': 'augmented', 'B+': 'augmented',
  // Diminished Chords
  'C°': 'diminished', 'C#°': 'diminished', 'D°': 'diminished', 'D#°': 'diminished', 'E°': 'diminished', 'F°': 'diminished',
  'F#°': 'diminished', 'F##°': 'diminished', 'G°': 'diminished', 'G#°': 'diminished', 'A°': 'diminished', 'A#°': 'diminished', 'B°': 'diminished', 'B#°': 'diminished'
};

export const chordTones = { 
  'C': ['C', 'E', 'G'], 'Dm': ['D', 'F', 'A'], 'Em': ['E', 'G', 'B'], 'F': ['F', 'A', 'C'], 'G': ['G', 'B', 'D'], 'Am': ['A', 'C', 'E'],
  'Db': ['D♭', 'F', 'A♭'], 'Ebm': ['E♭', 'G♭', 'B♭'], 'Fm': ['F', 'A♭', 'C'], 'Gb': ['G♭', 'B♭', 'D♭'], 'Ab': ['A♭', 'C', 'E♭'], 'Bbm': ['B♭', 'D♭', 'F'],
  'D': ['D', 'F♯', 'A'], 'F#m': ['F♯', 'A', 'C♯'], 'Bm': ['B', 'D', 'F♯'],
  'Eb': ['E♭', 'G', 'B♭'], 'Gm': ['G', 'B♭', 'D'], 'Cm': ['C', 'E♭', 'G'],
  'E': ['E', 'G♯', 'B'], 'G#m': ['G♯', 'B', 'D♯'], 'C#m': ['C♯', 'E', 'G♯'],
  'B': ['B', 'D♯', 'F♯'], 'D#m': ['D♯', 'F♯', 'A♯'], 'F#': ['F♯', 'A♯', 'C♯'], 'A': ['A', 'C♯', 'E'],
  'Bb': ['B♭', 'D', 'F'], 'Cb': ['C♭', 'E♭', 'G♭'], 'Fb': ['F♭', 'A♭', 'C♭'], 'Abm': ['A♭', 'C♭', 'E♭'],
  // Augmented Chords
  'C+': ['C', 'E', 'G♯'], 'Db+': ['D♭', 'F', 'A'], 'D+': ['D', 'F♯', 'A♯'], 'Eb+': ['E♭', 'G', 'B'], 'E+': ['E', 'G♯', 'B♯'], 'F+': ['F', 'A', 'C♯'],
  'F#+': ['F♯', 'A♯', 'C𝄪'], 'Gb+': ['G♭', 'B♭', 'D'], 'G+': ['G', 'B', 'D♯'], 'Ab+': ['A♭', 'C', 'E'], 'A+': ['A', 'C♯', 'E♯'], 'Bb+': ['B♭', 'D', 'F♯'], 'B+': ['B', 'D♯', 'F𝄪'],
  // Diminished Chords
  'C°': ['C', 'E♭', 'G♭'], 'C#°': ['C♯', 'E', 'G'], 'D°': ['D', 'F', 'A♭'], 'D#°': ['D♯', 'F♯', 'A'], 'E°': ['E', 'G', 'B♭'], 'F°': ['F', 'A♭', 'C♭'],
  'F#°': ['F♯', 'A', 'C'], 'F##°': ['F𝄪', 'A♯', 'C♯'], 'G°': ['G', 'B♭', 'D♭'], 'G#°': ['G♯', 'B', 'D'], 'A°': ['A', 'C', 'E♭'], 'A#°': ['A♯', 'C♯', 'E'], 'B°': ['B', 'D', 'F'], 'B#°': ['B♯', 'D♯', 'F♯']
};

export const chordAlternateThirds = {
  'C': { 'major': 'E', 'minor': 'E♭' }, 'Dm': { 'major': 'F♯', 'minor': 'F' }, 'Em': { 'major': 'G♯', 'minor': 'G' },
  'F': { 'major': 'A', 'minor': 'A♭' }, 'G': { 'major': 'B', 'minor': 'B♭' }, 'Am': { 'major': 'C♯', 'minor': 'C' },
  'Db': { 'major': 'F', 'minor': 'F♭' }, 'Ebm': { 'major': 'G', 'minor': 'G♭' }, 'Fm': { 'major': 'A', 'minor': 'A♭' },
  'Gb': { 'major': 'B♭', 'minor': 'B𝄫' }, 'Ab': { 'major': 'C', 'minor': 'C♭' }, 'Bbm': { 'major': 'D', 'minor': 'D♭' },
  'D': { 'major': 'F♯', 'minor': 'F' }, 'F#m': { 'major': 'A♯', 'minor': 'A' }, 'A': { 'major': 'C♯', 'minor': 'C' }, 'Bm': { 'major': 'D♯', 'minor': 'D' },
  'Eb': { 'major': 'G', 'minor': 'G♭' }, 'Gm': { 'major': 'B', 'minor': 'B♭' }, 'Cm': { 'major': 'E', 'minor': 'E♭' },
  'E': { 'major': 'G♯', 'minor': 'G' }, 'G#m': { 'major': 'B♯', 'minor': 'B' }, 'C#m': { 'major': 'E♯', 'minor': 'E' },
  'B': { 'major': 'D♯', 'minor': 'D' }, 'D#m': { 'major': 'F𝄪', 'minor': 'F♯' }, 'Fb': { 'major': 'A♭', 'minor': 'A𝄫' },
  'F#': { 'major': 'A♯', 'minor': 'A' }, 'Abm': { 'major': 'C', 'minor': 'C♭' }, 'Bb': { 'major': 'D', 'minor': 'D♭' },
  'Cb': { 'major': 'E♭', 'minor': 'E𝄫' },
  // Diminished chords have a minor third
  'C°': { 'minor': 'E♭' }, 'C#°': { 'minor': 'E' }, 'D°': { 'minor': 'F' }, 'D#°': { 'minor': 'F♯' }, 'E°': { 'minor': 'G' }, 'F°': { 'minor': 'A♭' },
  'F#°': { 'minor': 'A' }, 'F##°': { 'minor': 'A♯' }, 'G°': { 'minor': 'B♭' }, 'G#°': { 'minor': 'B' }, 'A°': { 'minor': 'C' }, 'A#°': { 'minor': 'C♯' }, 'B°': { 'minor': 'D' }, 'B#°': { 'minor': 'D♯' },
  // Augmented chords have a major third
  'C+': { 'major': 'E' }, 'Db+': { 'major': 'F' }, 'D+': { 'major': 'F♯' }, 'Eb+': { 'major': 'G' }, 'E+': { 'major': 'G♯' }, 'F+': { 'major': 'A' },
  'F#+': { 'major': 'A♯' }, 'Gb+': { 'major': 'B♭' }, 'G+': { 'major': 'B' }, 'Ab+': { 'major': 'C' }, 'A+': { 'major': 'C♯' }, 'Bb+': { 'major': 'D' }, 'B+': { 'major': 'D♯' }
};

export const chordSevenths = { 
  'C': 'B♭', 'Dm': 'C', 'Em': 'D', 'F': 'E♭', 'G': 'F', 'Am': 'G', 'Bb': 'A♭',
  'Db': 'C♭', 'Ebm': 'D♭', 'Fm': 'E♭', 'Gb': 'F♭', 'Ab': 'G♭', 'Bbm': 'A♭', 'Cb': 'B𝄫',
  'D': 'C', 'F#m': 'E', 'Bm': 'A',
  'Eb': 'D♭', 'Gm': 'F', 'Cm': 'B♭',
  'E': 'D', 'G#m': 'F♯', 'C#m': 'B',
  'Fb': 'E𝄫', 'Abm': 'G♭', 
  'B': 'A', 'D#m': 'C♯', 'F#': 'E', 'A': 'G',
  'C+': 'B♭', 'Db+': 'C♭', 'D+': 'C', 'Eb+': 'D♭', 'E+': 'D', 'F+': 'E♭', 'Gb+': 'F♭', 'G+': 'F', 'Ab+': 'G♭', 'A+': 'G', 'Bb+': 'A♭', 'B+': 'A',
  'C°': 'B𝄫', 'C#°': 'B', 'D°': 'C', 'D#°': 'C♯', 'E°': 'D', 'F°': 'E𝄫', 'F#°': 'E', 'G°': 'F', 'G#°': 'F♯', 'A°': 'G', 'A#°': 'G♯', 'B°': 'A'
};

export const chordMajorSevenths = { 
  'C': 'B', 'Dm': 'C♯', 'Em': 'D♯', 'F': 'E', 'G': 'F♯', 'Am': 'G♯', 'Bb': 'A',
  'Db': 'C', 'Ebm': 'D', 'Fm': 'E', 'Gb': 'F', 'Ab': 'G', 'Bbm': 'A', 'Cb': 'B♭',
  'D': 'C♯', 'F#m': 'E♯', 'Bm': 'A♯',
  'Eb': 'D', 'Gm': 'F♯', 'Cm': 'B',
  'E': 'D♯', 'G#m': 'F𝄪', 'C#m': 'B♯',
  'Fb': 'E♭', 'Abm': 'G', 
  'B': 'A♯', 'D#m': 'C𝄪', 'F#': 'E♯', 'A': 'G♯',
  'C+': 'B', 'Db+': 'C', 'D+': 'C♯', 'Eb+': 'D', 'E+': 'D♯', 'F+': 'E', 'Gb+': 'F', 'G+': 'F♯', 'Ab+': 'G', 'A+': 'G♯', 'Bb+': 'A', 'B+': 'A♯',
  'C°': 'B♭', 'C#°': 'B♯', 'D°': 'C♯', 'D#°': 'C𝄪', 'E°': 'D♯', 'F°': 'E', 'F#°': 'E♯', 'G°': 'F♯', 'G#°': 'F𝄪', 'A°': 'G♯', 'A#°': 'G𝄪', 'B°': 'A♯'
};

export const chordSeconds = { 
  'C': 'D', 'Dm': 'E', 'Em': 'F♯', 'F': 'G', 'G': 'A', 'Am': 'B', 'Bb': 'C',
  'Db': 'E♭', 'Ebm': 'F', 'Fm': 'G', 'Gb': 'A♭', 'Ab': 'B♭', 'Bbm': 'C', 'Cb': 'D♭',
  'D': 'E', 'F#m': 'G♯', 'Bm': 'C♯',
  'Eb': 'F', 'Gm': 'A', 'Cm': 'D',
  'E': 'F♯', 'G#m': 'A♯', 'C#m': 'D♯',
  'Fb': 'G♭', 'Abm': 'B♭', 
  'B': 'C♯', 'D#m': 'E♯', 'F#': 'G♯', 'A': 'B',
  'C+': 'D', 'Db+': 'E♭', 'D+': 'E', 'Eb+': 'F', 'E+': 'F♯', 'F+': 'G', 'Gb+': 'A♭', 'G+': 'A', 'Ab+': 'B♭', 'A+': 'B', 'Bb+': 'C', 'B+': 'C♯',
  'C°': 'D', 'C#°': 'D♯', 'D°': 'E', 'D#°': 'E♯', 'E°': 'F♯', 'F°': 'G', 'F#°': 'G♯', 'G°': 'A', 'G#°': 'A♯', 'A°': 'B', 'A#°': 'B♯', 'B°': 'C♯'
};

export const chordFourths = { 
  'C': 'F', 'Dm': 'G', 'Em': 'A', 'F': 'B♭', 'G': 'C', 'Am': 'D', 'Bb': 'E♭',
  'Db': 'G♭', 'Ebm': 'A♭', 'Fm': 'B♭', 'Gb': 'C♭', 'Ab': 'D♭', 'Bbm': 'E♭', 'Cb': 'F♭',
  'D': 'G', 'F#m': 'B', 'Bm': 'E',
  'Eb': 'A♭', 'Gm': 'C', 'Cm': 'F',
  'E': 'A', 'G#m': 'C♯', 'C#m': 'F♯',
  'Fb': 'B𝄫', 'Abm': 'D♭', 
  'B': 'E', 'D#m': 'G♯', 'F#': 'B', 'A': 'D',
  'C+': 'F', 'Db+': 'G♭', 'D+': 'G', 'Eb+': 'A♭', 'E+': 'A', 'F+': 'B♭', 'Gb+': 'C♭', 'G+': 'C', 'Ab+': 'D♭', 'A+': 'D', 'Bb+': 'E♭', 'B+': 'E',
  'C°': 'F', 'C#°': 'F♯', 'D°': 'G', 'D#°': 'G♯', 'E°': 'A', 'F°': 'B♭', 'F#°': 'B', 'G°': 'C', 'G#°': 'C♯', 'A°': 'D', 'A#°': 'D♯', 'B°': 'E'
};

export const chordSixths = {
    'C': 'A', 'Dm': 'B', 'Em': 'C♯', 'F': 'D', 'G': 'E', 'Am': 'F♯', 'Bb': 'G',
    'Db': 'B♭', 'Ebm': 'C', 'Fm': 'D', 'Gb': 'E♭', 'Ab': 'F', 'Bbm': 'G', 'Cb': 'A♭',
    'D': 'B', 'F#m': 'D♯', 'Bm': 'G♯',
    'Eb': 'C', 'Gm': 'E', 'Cm': 'A',
    'E': 'C♯', 'G#m': 'E♯', 'C#m': 'A♯',
    'Fb': 'D♭', 'Abm': 'F',
    'B': 'G♯', 'D#m': 'B♯', 'F#': 'D♯', 'A': 'F♯',
    'C+': 'A', 'Db+': 'B♭', 'D+': 'B', 'Eb+': 'C', 'E+': 'C♯', 'F+': 'D', 'Gb+': 'E♭', 'G+': 'E', 'Ab+': 'F', 'A+': 'F♯', 'Bb+': 'G', 'B+': 'G♯',
    'C°': 'A', 'C#°': 'A♯', 'D°': 'B', 'D#°': 'B♯', 'E°': 'C♯', 'F°': 'D', 'F#°': 'D♯', 'G°': 'E', 'G#°': 'E♯', 'A°': 'F', 'A#°': 'F♯', 'B°': 'G'
};

export const chordAugmentedFifths = {
    'C': 'G♯', 'Dm': 'A♯', 'Em': 'B♯', 'F': 'C♯', 'G': 'D♯', 'Am': 'E♯', 'Bb': 'F♯',
    'Db': 'A', 'Ebm': 'B', 'Fm': 'C♯', 'Gb': 'D', 'Ab': 'E', 'Bbm': 'F♯', 'Cb': 'G',
    'D': 'A♯', 'F#m': 'C𝄪', 'Bm': 'F𝄪',
    'Eb': 'B', 'Gm': 'D♯', 'Cm': 'G♯',
    'E': 'B♯', 'G#m': 'D𝄪', 'C#m': 'G𝄪',
    'Fb': 'C', 'Abm': 'E',
    'B': 'F𝄪', 'D#m': 'A𝄪', 'F#': 'C𝄪', 'A': 'E♯',
    'C°': 'G', 'C#°': 'G♯', 'D°': 'A', 'D#°': 'A♯', 'E°': 'B', 'F°': 'C', 'F#°': 'C♯', 'G°': 'D', 'G#°': 'D♯', 'A°': 'E', 'A#°': 'E♯', 'B°': 'F♯'
};

export const chordDiminishedFifths = {
    'C': 'G♭', 'Dm': 'A♭', 'Em': 'B♭', 'F': 'C♭', 'G': 'D♭', 'Am': 'E♭', 'Bb': 'F♭',
    'Db': 'A𝄫', 'Ebm': 'B𝄫', 'Fm': 'C♭', 'Gb': 'D𝄫', 'Ab': 'E𝄫', 'Bbm': 'F♭', 'Cb': 'G𝄫',
    'D': 'A♭', 'F#m': 'C', 'Bm': 'F',
    'Eb': 'B𝄫', 'Gm': 'D♭', 'Cm': 'G♭',
    'E': 'B♭', 'G#m': 'D', 'C#m': 'G',
    'Fb': 'C𝄫', 'Abm': 'E𝄫',
    'B': 'F', 'D#m': 'A', 'F#': 'C', 'A': 'E♭',
    'C+': 'G', 'Db+': 'A♭', 'D+': 'A', 'Eb+': 'B♭', 'E+': 'B', 'F+': 'C', 'Gb+': 'D♭', 'G+': 'D', 'Ab+': 'E♭', 'A+': 'E', 'Bb+': 'F', 'B+': 'F♯'
};

export const rhythmChordNotes = { 
  'C': ['C3', 'C4', 'E4', 'G4', 'C5'], 'Dm': ['D3', 'D4', 'F4', 'A4', 'D5'], 'Em': ['E3', 'E4', 'G4', 'B4', 'E5'], 'F':  ['F3', 'F4', 'A4', 'C5', 'F5'],  'G':  ['G3', 'G4', 'B4', 'D5', 'G5'], 'Am': ['A2', 'A3', 'C4', 'E4', 'A4'],
  'Db': ['Db3','Db4','F4','Ab4','Db5'], 'Ebm':['Eb3','Eb4','Gb4','Bb4','Eb5'], 'Fm': ['F3','F4','Ab4','C5','F5'], 'Gb': ['Gb3', 'Gb4', 'Bb3', 'Db4', 'Gb5'], 'Ab': ['Ab2','Ab3','C4','Eb4','Ab4'], 'Bbm':['Bb2','Bb3','Db4','F4','Bb4'],
  'D':  ['D3', 'D4', 'F#4', 'A4', 'D5'], 'F#m':['F#3','F#4','A4','C#5','F#5'], 'Bm': ['B2','B3','D4','F#4','B4'],
  'Eb': ['Eb3','Eb4','G4','Bb4','Eb5'], 'Gm': ['G3','G4','Bb4','D5','G5'], 'Cm': ['C3','C4','Eb4','G4','C5'],
  'E':  ['E3', 'E4', 'G#4', 'B4', 'E5'], 'G#m':['G#3','G#4','B4','D#5','G#5'], 'C#m':['C#3','C#4','E4','G#4','C#5'],
  'Fb': ['Fb3','Fb4','Ab4','Cb4','Fb5'], 'Abm':['Ab2','Ab3','Cb4','Eb4','Ab4'], 
  'B':  ['B2', 'B3', 'D#4', 'F#4', 'B4'], 'D#m':['D#3','D#4','F#4','A#4','D#5'], 'F#': ['F#3','F#4','A#4','C#5','F#5'], 'A': ['A2','A3','C#4','E4','A4'],
  'C+': ['C3','C4','E4','G#4','C5'], 'Db+': ['Db3','Db4','F4','A4','Db5'], 'D+': ['D3','D4','F#4','A#4','D5'], 'Eb+': ['Eb3','Eb4','G4','B4','Eb5'], 'E+': ['E3','E4','G#4','B#4','E5'], 'F+': ['F3','F4','A4','C#5','F5'],
  'F#+': ['F#3','F#4','A#4','C##5','F#5'], 'Gb+': ['Gb3','Gb4','Bb4','D5','Gb5'], 'G+': ['G3','G4','B4','D#5','G5'], 'Ab+': ['Ab2','Ab3','C4','E4','Ab4'], 'A+': ['A2','A3','C#4','E#4','A4'], 'Bb+': ['Bb2','Bb3','D4','F#4','Bb4'], 'B+': ['B2','B3','D#4','F##4','B4'],
  'C°': ['C3','C4','Eb4','Gb4','C5'], 'C#°': ['C#3','C#4','E4','G4','C#5'], 'D°': ['D3','D4','F4','Ab4','D5'], 'D#°': ['D#3','D#4','F#4','A4','D#5'], 'E°': ['E3','E4','G4','Bb4','E5'], 'F°': ['F3','F4','Ab4','Cb5','F5'],
  'F#°': ['F#3','F#4','A4','C5','F#5'], 'F##°': ['F##3','F##4','A#4','C#5','F##5'], 'G°': ['G3','G4','Bb4','Db5','G5'], 'G#°': ['G#3','G#4','B4','D5','G#5'], 'A°': ['A2','A3','C4','Eb4','A4'], 'A#°': ['A#2','A#3','C#4','E4','A#4'], 'B°': ['B2','B3','D4','F4','B4'], 'B#°': ['B#2','B#3','D#4','F#4','B#4']
};
export const rhythmChordSeventhNotes = { 
  'C': 'Bb4', 'Dm': 'C5', 'Em': 'D5', 'F': 'Eb5', 'G': 'F5', 'Am': 'G4', 'Bb': 'Ab4',
  'Db':'Cb4', 'Ebm':'Db5', 'Fm':'Eb5', 'Gb':'Fb5', 'Ab':'Gb4', 'Bbm':'Ab4', 'Cb':'Bbb4',
  'D': 'C5', 'F#m':'E5', 'Bm':'A4',
  'Eb':'Db5', 'Gm':'F5', 'Cm':'Bb4',
  'E': 'D5', 'G#m':'F#5', 'C#m':'B4',
  'Fb':'Ebb5', 'Abm': 'Gb4', 
  'B': 'A4', 'D#m':'C#5', 'F#':'E5', 'A':'G4',
  'B°': 'A4', 'C°': 'Bb4', 'C#°': 'B4', 'D°': 'C5', 'D#°': 'C#5', 'E°': 'D5', 'F°': 'Eb5', 'F#°': 'E5', 'G°': 'F5', 'G#°': 'F#5', 'A°': 'G4', 'A#°': 'G#4'
};
export const rhythmChordMajorSeventhNotes = { 
  'C': 'B4', 'Dm': 'C#5', 'Em': 'D#5', 'F': 'E5', 'G': 'F#4', 'Am': 'G#4', 'Bb': 'A4',
  'Db':'C5', 'Ebm':'D5', 'Fm':'E5', 'Gb':'F4', 'Ab':'G4', 'Bbm':'A4', 'Cb':'Bb4',
  'D': 'C#5', 'F#m':'E#5', 'Bm':'A#4', 
  'Eb':'D5', 'Gm':'F#5', 'Cm':'B4',
  'E': 'D#5', 'G#m':'F##5', 'C#m':'B#5', 
  'Fb':'Eb5', 'Abm': 'G4', 
  'B': 'A#4', 'D#m':'C##5', 'F#':'E#5', 'A':'G#4',
  'B°': 'A#4', 'C°': 'B4', 'C#°': 'B#4', 'D°': 'C#5', 'D#°': 'C##5', 'E°': 'D#5', 'F°': 'E5', 'F#°': 'E#5', 'G°': 'F#5', 'G#°': 'F##5', 'A°': 'G#4', 'A#°': 'G##4'
};
export const rhythmChordSecondNotes = {
  'C': 'D4', 'Dm': 'E4', 'Em': 'F#4', 'F': 'G4', 'G': 'A4', 'Am': 'B4', 'Bb': 'C4',
  'Db':'Eb4', 'Ebm':'F4', 'Fm':'G4', 'Gb':'Ab4', 'Ab':'Bb4', 'Bbm':'C4', 'Cb':'Db4',
  'D': 'E4', 'F#m':'G#4', 'Bm':'C#4',
  'Eb':'F4', 'Gm':'A4', 'Cm':'D4',
  'E': 'F#4', 'G#m':'A#4', 'C#m':'D#4',
  'Fb':'Gb4', 'Abm': 'Bb3', 
  'B': 'C#4', 'D#m':'E#4', 'F#':'G#4', 'A':'B3',
  'B°': 'C#4', 'C°': 'D4', 'C#°': 'D#4', 'D°': 'E4', 'D#°': 'E#4', 'E°': 'F#4', 'F°': 'G4', 'F#°': 'G#4', 'G°': 'A4', 'G#°': 'A#4', 'A°': 'B3', 'A#°': 'B#3'
};
export const rhythmChordFourthNotes = {
  'C': 'F4', 'Dm': 'G4', 'Em': 'A4', 'F': 'Bb4', 'G': 'C5', 'Am': 'D5', 'Bb': 'Eb4',
  'Db':'Gb4', 'Ebm':'Ab4', 'Fm':'Bb4', 'Gb':'Cb4', 'Ab':'Db5', 'Bbm':'Eb4', 'Cb':'Fb4',
  'D': 'G4', 'F#m':'B4', 'Bm':'E4',
  'Eb':'Ab4', 'Gm':'C5', 'Cm':'F4',
  'E': 'A4', 'G#m':'C#5', 'C#m':'F#4',
  'Fb':'Bbb4', 'Abm': 'Db5', 
  'B': 'E4', 'D#m':'G#4', 'F#':'B3', 'A':'D4',
  'B°': 'E4', 'C°': 'F4', 'C#°': 'F#4', 'D°': 'G4', 'D#°': 'G#4', 'E°': 'A4', 'F°': 'Bb4', 'F#°': 'B3', 'G°': 'C5', 'G#°': 'C#5', 'A°': 'D4', 'A#°': 'D#4'
};
export const rhythmChordSixthNotes = {
  'C': 'A4', 'Dm': 'B4', 'Em': 'C#5', 'F': 'D5', 'G': 'E5', 'Am': 'F#4', 'Bb': 'G4',
  'Db': 'Bb4', 'Ebm': 'C5', 'Fm': 'D5', 'Gb': 'Eb5', 'Ab': 'F4', 'Bbm': 'G4', 'Cb': 'Ab4',
  'D': 'B4', 'F#m': 'D#5', 'Bm': 'G#4',
  'Eb': 'C5', 'Gm': 'E5', 'Cm': 'A4',
  'E': 'C#5', 'G#m': 'E#5', 'C#m': 'A#4',
  'Fb': 'Db5', 'Abm': 'F4',
  'B': 'G#4', 'D#m': 'B#4', 'F#': 'D#5', 'A': 'F#4',
  'B°': 'G4', 'C°': 'A4', 'C#°': 'A#4', 'D°': 'B4', 'D#°': 'B#4', 'E°': 'C#5', 'F°': 'D5', 'F#°': 'D#5', 'G°': 'E5', 'G#°': 'E#5', 'A°': 'F4', 'A#°': 'F#4'
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
  sine: { duration: 0.4, attack: 0.04, hold: 0.2, release: 0.16, filterFreq: 3000, filterQ: 0.5, gain: 0.27, vibrato: false },
  triangle: { duration: 0.29, attack: 0.015, hold: 0.07, release: 0.2, filterFreq: 1200, filterQ: 1, gain: 0.285, vibrato: false },
  square: { duration: 0.25, attack: 0.005, hold: 0.02, release: 0.225, filterFreq: 900, filterQ: 2, gain: 0.225, vibrato: false },
  saw: { duration: 0.33, attack: 0.02, hold: 0.05, release: 0.26, filterFreq: 1600, filterQ: 1.5, gain: 0.21, pitchBend: true, bendAmount: 30, bendTime: 0.08, vibrato: false },
  voice: { duration: 0.5, attack: 0.08, hold: 0.3, release: 0.12, filterFreq: 1000, filterQ: 1, gain: 0.27, vibrato: true, vibratoFreq: 5, vibratoAmount: 4 }
};
