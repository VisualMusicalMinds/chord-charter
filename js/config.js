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
  'C': [ { value: 'C',  display: 'C / I' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Em', display: 'Em / iii' }, { value: 'F',  display: 'F / IV' }, { value: 'G',  display: 'G / V' }, { value: 'Am', display: 'Am / vi' }, { value: 'Bdim', display: 'Bdim / vii°' }, { value: 'D', display: 'D / II' }, { value: 'E', display: 'E / III' }, { value: 'Bb', display: 'Bb / bVII' }],
  'Db': [ { value: 'Db', display: 'Db / I' }, { value: 'Ebm',display: 'Ebm / ii' }, { value: 'Fm', display: 'Fm / iii' }, { value: 'Gb', display: 'Gb / IV' }, { value: 'Ab', display: 'Ab / V' }, { value: 'Bbm',display: 'Bbm / vi' }, { value: 'Cdim', display: 'Cdim / vii°' }, { value: 'Eb', display: 'Eb / II' }, { value: 'F', display: 'F / III' }, { value: 'Cb', display: 'Cb / bVII' }],
  'D': [ { value: 'D',  display: 'D / I' }, { value: 'Em', display: 'Em / ii' }, { value: 'F#m',display: 'F#m / iii' }, { value: 'G',  display: 'G / IV' }, { value: 'A',  display: 'A / V' }, { value: 'Bm', display: 'Bm / vi' }, { value: 'C#dim',display: 'C#dim / vii°' }, { value: 'E', display: 'E / II' }, { value: 'F#', display: 'F# / III' }, { value: 'C', display: 'C / bVII' }],
  'Eb': [ { value: 'Eb', display: 'Eb / I' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Gm', display: 'Gm / iii' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Cm', display: 'Cm / vi' }, { value: 'Ddim', display: 'Ddim / vii°' }, { value: 'F', display: 'F / II' }, { value: 'G', display: 'G / III' }, { value: 'Db', display: 'Db / bVII' }],
  'E': [ { value: 'E',  display: 'E / I' }, { value: 'F#m',display: 'F#m / ii' }, { value: 'G#m',display: 'G#m / iii' }, { value: 'A',  display: 'A / IV' }, { value: 'B',  display: 'B / V' }, { value: 'C#m',display: 'C#m / vi' }, { value: 'D#dim',display: 'D#dim / vii°' }, { value: 'F#', display: 'F# / II' }, { value: 'G#', display: 'G# / III' }, { value: 'D', display: 'D / bVII' }],
  'F': [ { value: 'F',  display: 'F / I' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Am', display: 'Am / iii' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'C',  display: 'C / V' }, { value: 'Dm', display: 'Dm / vi' }, { value: 'Edim', display: 'Edim / vii°' }, { value: 'G', display: 'G / II' }, { value: 'A', display: 'A / III' }, { value: 'Eb', display: 'Eb / bVII' }],
  'Gb': [ { value: 'Gb', display: 'Gb / I' }, { value: 'Abm',display: 'Abm / ii' }, { value: 'Bbm',display: 'Bbm / iii' }, { value: 'Cb', display: 'Cb / IV' },  { value: 'Db', display: 'Db / V' }, { value: 'Ebm',display: 'Ebm / vi' }, { value: 'Fdim', display: 'Fdim / vii°' }, { value: 'Ab', display: 'Ab / II' }, { value: 'Bb', display: 'Bb / III' }, { value: 'Fb', display: 'Fb / bVII' }],
  'G': [ { value: 'G',  display: 'G / I' }, { value: 'Am', display: 'Am / ii' }, { value: 'Bm', display: 'Bm / iii' }, { value: 'C',  display: 'C / IV' }, { value: 'D',  display: 'D / V' }, { value: 'Em', display: 'Em / vi' }, { value: 'F#dim',display: 'F#dim / vii°' }, { value: 'A', display: 'A / II' }, { value: 'B', display: 'B / III' }, { value: 'F', display: 'F / bVII' }],
  'Ab': [ { value: 'Ab', display: 'Ab / I' }, { value: 'Bbm',display: 'Bbm / ii' }, { value: 'Cm', display: 'Cm / iii' }, { value: 'Db', display: 'Db / IV' }, { value: 'Eb', display: 'Eb / V' }, { value: 'Fm', display: 'Fm / vi' }, { value: 'Gdim', display: 'Gdim / vii°' }, { value: 'Bb', display: 'Bb / II' }, { value: 'C', display: 'C / III' }, { value: 'Gb', display: 'Gb / bVII' }],
  'A': [ { value: 'A',  display: 'A / I' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'C#m',display: 'C#m / iii' }, { value: 'D',  display: 'D / IV' }, { value: 'E',  display: 'E / V' }, { value: 'F#m',display: 'F#m / vi' }, { value: 'G#dim',display: 'G#dim / vii°' }, { value: 'B', display: 'B / II' }, { value: 'C#', display: 'C# / III' }, { value: 'G', display: 'G / bVII' }],
  'Bb': [ { value: 'Bb', display: 'Bb / I' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Dm', display: 'Dm / iii' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'F',  display: 'F / V' }, { value: 'Gm', display: 'Gm / vi' }, { value: 'Adim', display: 'Adim / vii°' }, { value: 'C', display: 'C / II' }, { value: 'D', display: 'D / III' }, { value: 'Ab', display: 'Ab / bVII' }],
  'B': [ { value: 'B',  display: 'B / I' }, { value: 'C#m',display: 'C#m / ii' }, { value: 'D#m',display: 'D#m / iii' }, { value: 'E',  display: 'E / IV' }, { value: 'F#', display: 'F# / V' }, { value: 'G#m',display: 'G#m / vi' }, { value: 'A#dim',display: 'A#dim / vii°' }, { value: 'C#', display: 'C# / II' }, { value: 'D#', display: 'D# / III' }, { value: 'A', display: 'A / bVII' }],
};

const naturalMinorKeyChordMap = {
    'C':  [ { value: 'Cm', display: 'Cm / i' }, { value: 'Gm', display: 'Gm / v' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Bb', display: 'Bb / bVII' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'Db', display: 'Db / bII' }, { value: 'F', display: 'F / IV' }, { value: 'G', display: 'G / V' }],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'G#m', display: 'G#m / v' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'A', display: 'A / bVI' }, { value: 'B', display: 'B / bVII' }, { value: 'E', display: 'E / bIII' }, { value: 'D', display: 'D / bII' }, { value: 'F#', display: 'F# / IV' }, { value: 'G#', display: 'G# / V' }],
    'D':  [ { value: 'Dm', display: 'Dm / i' }, { value: 'Am', display: 'Am / v' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'C', display: 'C / bVII' }, { value: 'F', display: 'F / bIII' }, { value: 'Eb', display: 'Eb / bII' }, { value: 'G', display: 'G / IV' }, { value: 'A', display: 'A / V' }],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'Bbm', display: 'Bbm / v' }, { value: 'Abm', display: 'Abm / iv' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'Db', display: 'Db / bVII' }, { value: 'Gb', display: 'Gb / bIII' }, { value: 'Fb', display: 'Fb / bII' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bb', display: 'Bb / V' }],
    'E':  [ { value: 'Em', display: 'Em / i' }, { value: 'Bm', display: 'Bm / v' }, { value: 'Am', display: 'Am / iv' }, { value: 'C', display: 'C / bVI' }, { value: 'D', display: 'D / bVII' }, { value: 'G', display: 'G / bIII' }, { value: 'F', display: 'F / bII' }, { value: 'A', display: 'A / IV' }, { value: 'B', display: 'B / V' }],
    'F':  [ { value: 'Fm', display: 'Fm / i' }, { value: 'Cm', display: 'Cm / v' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Eb', display: 'Eb / bVII' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Gb', display: 'Gb / bII' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'C', display: 'C / V' }],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'C#m', display: 'C#m / v' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'D', display: 'D / bVI' }, { value: 'E', display: 'E / bVII' }, { value: 'A', display: 'A / bIII' }, { value: 'G', display: 'G / bII' }, { value: 'B', display: 'B / IV' }, { value: 'C#', display: 'C# / V' }],
    'G':  [ { value: 'Gm', display: 'Gm / i' }, { value: 'Dm', display: 'Dm / v' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'F', display: 'F / bVII' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'Ab', display: 'Ab / bII' }, { value: 'C', display: 'C / IV' }, { value: 'D', display: 'D / V' }],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'D#m', display: 'D#m / v' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'E', display: 'E / bVI' }, { value: 'F#', display: 'F# / bVII' }, { value: 'B', display: 'B / bIII' }, { value: 'A', display: 'A / bII' }, { value: 'C#', display: 'C# / IV' }, { value: 'D#', display: 'D# / V' }],
    'A':  [ { value: 'Am', display: 'Am / i' }, { value: 'Em', display: 'Em / v' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'F', display: 'F / bVI' }, { value: 'G', display: 'G / bVII' }, { value: 'C', display: 'C / bIII' }, { value: 'Bb', display: 'Bb / bII' }, { value: 'D', display: 'D / IV' }, { value: 'E', display: 'E / V' }],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'Fm', display: 'Fm / v' }, { value: 'Ebm', display: 'Ebm / iv' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Ab', display: 'Ab / bVII' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Cb', display: 'Cb / bII' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'F', display: 'F / V' }],
    'B':  [ { value: 'Bm', display: 'Bm / i' }, { value: 'F#m', display: 'F#m / v' }, { value: 'Em', display: 'Em / iv' }, { value: 'G', display: 'G / bVI' }, { value: 'A', display: 'A / bVII' }, { value: 'D', display: 'D / bIII' }, { value: 'C', display: 'C / bII' }, { value: 'E', display: 'E / IV' }, { value: 'F#', display: 'F# / V' }],
};

const harmonicMinorKeyChordMap = {
    'C':  [ { value: 'Cm', display: 'Cm / i' }, { value: 'G', display: 'G / V' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'Bdim', display: 'B° / vii°' }, { value: 'Eb+', display: 'Eb+ / bIII+' }, { value: 'Db', display: 'Db / bII' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'F', display: 'F / IV' }],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'G#', display: 'G# / V' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'B#dim', display: 'B#° / vii°' }, { value: 'E+', display: 'E+ / bIII+' }, { value: 'D', display: 'D / bII' }, { value: 'E', display: 'E / bIII' }, { value: 'F#', display: 'F# / IV' }],
    'D':  [ { value: 'Dm', display: 'Dm / i' }, { value: 'A', display: 'A / V' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'C#dim', display: 'C#° / vii°' }, { value: 'F+', display: 'F+ / bIII+' }, { value: 'Eb', display: 'Eb / bII' }, { value: 'F', display: 'F / bIII' }, { value: 'G', display: 'G / IV' }],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Abm', display: 'Abm / iv' }, { value: 'Ddim', display: 'D° / vii°' }, { value: 'Gb+', display: 'Gb+ / bIII+' }, { value: 'Fb', display: 'Fb / bII' }, { value: 'Gb', display: 'Gb / bIII' }, { value: 'Ab', display: 'Ab / IV' }],
    'E':  [ { value: 'Em', display: 'Em / i' }, { value: 'B', display: 'B / V' }, { value: 'Am', display: 'Am / iv' }, { value: 'D#dim', display: 'D#° / vii°' }, { value: 'G+', display: 'G+ / bIII+' }, { value: 'F', display: 'F / bII' }, { value: 'G', display: 'G / bIII' }, { value: 'A', display: 'A / IV' }],
    'F':  [ { value: 'Fm', display: 'Fm / i' }, { value: 'C', display: 'C / V' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'Edim', display: 'E° / vii°' }, { value: 'Ab+', display: 'Ab+ / bIII+' }, { value: 'Gb', display: 'Gb / bII' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Bb', display: 'Bb / IV' }],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'C#', display: 'C# / V' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'E#dim', display: 'E#° / vii°' }, { value: 'A+', display: 'A+ / bIII+' }, { value: 'G', display: 'G / bII' }, { value: 'A', display: 'A / bIII' }, { value: 'B', display: 'B / IV' }],
    'G':  [ { value: 'Gm', display: 'Gm / i' }, { value: 'D', display: 'D / V' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'F#dim', display: 'F#° / vii°' }, { value: 'Bb+', display: 'Bb+ / bIII+' }, { value: 'Ab', display: 'Ab / bII' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'C', display: 'C / IV' }],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'D#', display: 'D# / V' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'Gdim', display: 'F𝄪° (G°) / vii°' }, { value: 'B+', display: 'B+ / bIII+' }, { value: 'A', display: 'A / bII' }, { value: 'B', display: 'B / bIII' }, { value: 'C#', display: 'C# / IV' }],
    'A':  [ { value: 'Am', display: 'Am / i' }, { value: 'E', display: 'E / V' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'G#dim', display: 'G#° / vii°' }, { value: 'C+', display: 'C+ / bIII+' }, { value: 'Bb', display: 'Bb / bII' }, { value: 'C', display: 'C / bIII' }, { value: 'D', display: 'D / IV' }],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'F', display: 'F / V' }, { value: 'Ebm', display: 'Ebm / iv' }, { value: 'Adim', display: 'A° / vii°' }, { value: 'Db+', display: 'Db+ / bIII+' }, { value: 'Cb', display: 'Cb / bII' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Eb', display: 'Eb / IV' }],
    'B':  [ { value: 'Bm', display: 'Bm / i' }, { value: 'F#', display: 'F# / V' }, { value: 'Em', display: 'Em / iv' }, { value: 'A#dim', display: 'A#° / vii°' }, { value: 'D+', display: 'D+ / bIII+' }, { value: 'C', display: 'C / bII' }, { value: 'D', display: 'D / bIII' }, { value: 'E', display: 'E / IV' }],
};

const melodicMinorKeyChordMap = {
    'C':  [ { value: 'Cm', display: 'Cm / i' }, { value: 'G', display: 'G / V' }, { value: 'F', display: 'F / IV' }, { value: 'Adim', display: 'A° / vi°' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Eb+', display: 'Eb+ / bIII+' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Bb', display: 'Bb / bVII' }, { value: 'Bdim', display: 'B° / vii°' }],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'G#', display: 'G# / V' }, { value: 'F#', display: 'F# / IV' }, { value: 'A#dim', display: 'A#° / vi°' }, { value: 'D#m', display: 'D#m / ii' }, { value: 'E+', display: 'E+ / bIII+' }, { value: 'A', display: 'A / bVI' }, { value: 'B', display: 'B / bVII' }, { value: 'B#dim', display: 'B#° / vii°' }],
    'D':  [ { value: 'Dm', display: 'Dm / i' }, { value: 'A', display: 'A / V' }, { value: 'G', display: 'G / IV' }, { value: 'Bdim', display: 'B° / vi°' }, { value: 'Em', display: 'Em / ii' }, { value: 'F+', display: 'F+ / bIII+' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'C', display: 'C / bVII' }, { value: 'C#dim', display: 'C#° / vii°' }],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'Bb', display: 'Bb / V' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Cdim', display: 'C° / vi°' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Gb+', display: 'Gb+ / bIII+' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'Db', display: 'Db / bVII' }, { value: 'Ddim', display: 'D° / vii°' }],
    'E':  [ { value: 'Em', display: 'Em / i' }, { value: 'B', display: 'B / V' }, { value: 'A', display: 'A / IV' }, { value: 'C#dim', display: 'C#° / vi°' }, { value: 'F#m', display: 'F#m / ii' }, { value: 'G+', display: 'G+ / bIII+' }, { value: 'C', display: 'C / bVI' }, { value: 'D', display: 'D / bVII' }, { value: 'D#dim', display: 'D#° / vii°' }],
    'F':  [ { value: 'Fm', display: 'Fm / i' }, { value: 'C', display: 'C / V' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'Ddim', display: 'D° / vi°' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Ab+', display: 'Ab+ / bIII+' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Eb', display: 'Eb / bVII' }, { value: 'Edim', display: 'E° / vii°' }],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'C#', display: 'C# / V' }, { value: 'B', display: 'B / IV' }, { value: 'D#dim', display: 'D#° / vi°' }, { value: 'G#m', display: 'G#m / ii' }, { value: 'A+', display: 'A+ / bIII+' }, { value: 'D', display: 'D / bVI' }, { value: 'E', display: 'E / bVII' }, { value: 'E#dim', display: 'E#° / vii°' }],
    'G':  [ { value: 'Gm', display: 'Gm / i' }, { value: 'D', display: 'D / V' }, { value: 'C', display: 'C / IV' }, { value: 'Edim', display: 'E° / vi°' }, { value: 'Am', display: 'Am / ii' }, { value: 'Bb+', display: 'Bb+ / bIII+' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'F', display: 'F / bVII' }, { value: 'F#dim', display: 'F#° / vii°' }],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'D#', display: 'D# / V' }, { value: 'C#', display: 'C# / IV' }, { value: 'E#dim', display: 'E#° / vi°' }, { value: 'A#m', display: 'A#m / ii' }, { value: 'B+', display: 'B+ / bIII+' }, { value: 'E', display: 'E / bVI' }, { value: 'F#', display: 'F# / bVII' }, { value: 'Gdim', display: 'F𝄪° (G°) / vii°' }],
    'A':  [ { value: 'Am', display: 'Am / i' }, { value: 'E', display: 'E / V' }, { value: 'D', display: 'D / IV' }, { value: 'F#dim', display: 'F#° / vi°' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'C+', display: 'C+ / bIII+' }, { value: 'F', display: 'F / bVI' }, { value: 'G', display: 'G / bVII' }, { value: 'G#dim', display: 'G#° / vii°' }],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'F', display: 'F / V' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'Gdim', display: 'G° / vi°' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Db+', display: 'Db+ / bIII+' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Ab', display: 'Ab / bVII' }, { value: 'Adim', display: 'A° / vii°' }],
    'B':  [ { value: 'Bm', display: 'Bm / i' }, { value: 'F#', display: 'F# / V' }, { value: 'E', display: 'E / IV' }, { value: 'G#dim', display: 'G#° / vi°' }, { value: 'C#m', display: 'C#m / ii' }, { value: 'D+', display: 'D+ / bIII+' }, { value: 'G', display: 'G / bVI' }, { value: 'A', display: 'A / bVII' }, { value: 'A#dim', display: 'A#° / vii°' }],
};

const dorianKeyChordMap = {
    'C':  [ { value: 'Cm', display: 'Cm / i' }, { value: 'F', display: 'F / IV' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'Gm', display: 'Gm / v' }, { value: 'Bb', display: 'Bb / bVII' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Adim', display: 'A° / vi°' }, { value: 'G', display: 'G / V' }],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'F#', display: 'F# / IV' }, { value: 'E', display: 'E / bIII' }, { value: 'G#m', display: 'G#m / v' }, { value: 'B', display: 'B / bVII' }, { value: 'D#m', display: 'D#m / ii' }, { value: 'A', display: 'A / bVI' }, { value: 'A#dim', display: 'A#° / vi°' }, { value: 'G#', display: 'G# / V' }],
    'D':  [ { value: 'Dm', display: 'Dm / i' }, { value: 'G', display: 'G / IV' }, { value: 'F', display: 'F / bIII' }, { value: 'Am', display: 'Am / v' }, { value: 'C', display: 'C / bVII' }, { value: 'Em', display: 'Em / ii' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'Bdim', display: 'B° / vi°' }, { value: 'A', display: 'A / V' }],
    'Eb': [ { value: 'Ebm', display: 'Ebm / i' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Gb', display: 'Gb / bIII' }, { value: 'Bbm', display: 'Bbm / v' }, { value: 'Db', display: 'Db / bVII' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'Cdim', display: 'C° / vi°' }, { value: 'Bb', display: 'Bb / V' }],
    'E':  [ { value: 'Em', display: 'Em / i' }, { value: 'A', display: 'A / IV' }, { value: 'G', display: 'G / bIII' }, { value: 'Bm', display: 'Bm / v' }, { value: 'D', display: 'D / bVII' }, { value: 'F#m', display: 'F#m / ii' }, { value: 'C', display: 'C / bVI' }, { value: 'C#dim', display: 'C#° / vi°' }, { value: 'B', display: 'B / V' }],
    'F':  [ { value: 'Fm', display: 'Fm / i' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Cm', display: 'Cm / v' }, { value: 'Eb', display: 'Eb / bVII' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Ddim', display: 'D° / vi°' }, { value: 'C', display: 'C / V' }],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'B', display: 'B / IV' }, { value: 'A', display: 'A / bIII' }, { value: 'C#m', display: 'C#m / v' }, { value: 'E', display: 'E / bVII' }, { value: 'G#m', display: 'G#m / ii' }, { value: 'D', display: 'D / bVI' }, { value: 'D#dim', display: 'D#° / vi°' }, { value: 'C#', display: 'C# / V' }],
    'G':  [ { value: 'Gm', display: 'Gm / i' }, { value: 'C', display: 'C / IV' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'Dm', display: 'Dm / v' }, { value: 'F', display: 'F / bVII' }, { value: 'Am', display: 'Am / ii' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'Edim', display: 'E° / vi°' }, { value: 'D', display: 'D / V' }],
    'Ab': [ { value: 'Abm', display: 'Abm / i' }, { value: 'Db', display: 'Db / IV' }, { value: 'Cb', display: 'Cb / bIII' }, { value: 'Ebm', display: 'Ebm / v' }, { value: 'Gb', display: 'Gb / bVII' }, { value: 'Bbm', display: 'Bbm / ii' }, { value: 'Fb', display: 'Fb / bVI' }, { value: 'Fdim', display: 'F° / vi°' }, { value: 'Eb', display: 'Eb / V' }],
    'A':  [ { value: 'Am', display: 'Am / i' }, { value: 'D', display: 'D / IV' }, { value: 'C', display: 'C / bIII' }, { value: 'Em', display: 'Em / v' }, { value: 'G', display: 'G / bVII' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'F', display: 'F / bVI' }, { value: 'F#dim', display: 'F#° / vi°' }, { value: 'E', display: 'E / V' }],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Fm', display: 'Fm / v' }, { value: 'Ab', display: 'Ab / bVII' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Gdim', display: 'G° / vi°' }, { value: 'F', display: 'F / V' }],
    'B':  [ { value: 'Bm', display: 'Bm / i' }, { value: 'E', display: 'E / IV' }, { value: 'D', display: 'D / bIII' }, { value: 'F#m', display: 'F#m / v' }, { value: 'A', display: 'A / bVII' }, { value: 'C#m', display: 'C#m / ii' }, { value: 'G', display: 'G / bVI' }, { value: 'G#dim', display: 'G#° / vi°' }, { value: 'F#', display: 'F# / V' }],
};

const phrygianKeyChordMap = {
    'C':  [ { value: 'Cm', display: 'Cm / i' }, { value: 'Db', display: 'Db / bII' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Bbm', display: 'Bbm / bvii' }, { value: 'Gb', display: 'Gb / bV' }, { value: 'Gdim', display: 'G° / v°' }, { value: 'Bb', display: 'Bb / bVII' }],
    'C#': [ { value: 'C#m', display: 'C#m / i' }, { value: 'D', display: 'D / bII' }, { value: 'E', display: 'E / bIII' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'A', display: 'A / bVI' }, { value: 'Bm', display: 'Bm / bvii' }, { value: 'G', display: 'G / bV' }, { value: 'G#dim', display: 'G#° / v°' }, { value: 'B', display: 'B / bVII' }],
    'D':  [ { value: 'Dm', display: 'Dm / i' }, { value: 'Eb', display: 'Eb / bII' }, { value: 'F', display: 'F / bIII' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'Cm', display: 'Cm / bvii' }, { value: 'Ab', display: 'Ab / bV' }, { value: 'Adim', display: 'A° / v°' }, { value: 'C', display: 'C / bVII' }],
    'D#': [ { value: 'D#m', display: 'D#m / i' }, { value: 'E', display: 'E / bII' }, { value: 'F#', display: 'F# / bIII' }, { value: 'G#m', display: 'G#m / iv' }, { value: 'B', display: 'B / bVI' }, { value: 'C#m', display: 'C#m / bvii' }, { value: 'A', display: 'A / bV' }, { value: 'A#dim', display: 'A#° / v°' }, { value: 'C#', display: 'C# / bVII' }],
    'E':  [ { value: 'Em', display: 'Em / i' }, { value: 'F', display: 'F / bII' }, { value: 'G', display: 'G / bIII' }, { value: 'Am', display: 'Am / iv' }, { value: 'C', display: 'C / bVI' }, { value: 'Dm', display: 'Dm / bvii' }, { value: 'Bb', display: 'Bb / bV' }, { value: 'Bdim', display: 'B° / v°' }, { value: 'D', display: 'D / bVII' }],
    'F':  [ { value: 'Fm', display: 'Fm / i' }, { value: 'Gb', display: 'Gb / bII' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Ebm', display: 'Ebm / bvii' }, { value: 'Cb', display: 'Cb / bV' }, { value: 'Cdim', display: 'C° / v°' }, { value: 'Eb', display: 'Eb / bVII' }],
    'F#': [ { value: 'F#m', display: 'F#m / i' }, { value: 'G', display: 'G / bII' }, { value: 'A', display: 'A / bIII' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'D', display: 'D / bVI' }, { value: 'Em', display: 'Em / bvii' }, { value: 'C', display: 'C / bV' }, { value: 'C#dim', display: 'C#° / v°' }, { value: 'E', display: 'E / bVII' }],
    'G':  [ { value: 'Gm', display: 'Gm / i' }, { value: 'Ab', display: 'Ab / bII' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'Fm', display: 'Fm / bvii' }, { value: 'Db', display: 'Db / bV' }, { value: 'Ddim', display: 'D° / v°' }, { value: 'F', display: 'F / bVII' }],
    'G#': [ { value: 'G#m', display: 'G#m / i' }, { value: 'A', display: 'A / bII' }, { value: 'B', display: 'B / bIII' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'E', display: 'E / bVI' }, { value: 'F#m', display: 'F#m / bvii' }, { value: 'D', display: 'D / bV' }, { value: 'D#dim', display: 'D#° / v°' }, { value: 'E', display: 'E / bVII' }],
    'A':  [ { value: 'Am', display: 'Am / i' }, { value: 'Bb', display: 'Bb / bII' }, { value: 'C', display: 'C / bIII' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'F', display: 'F / bVI' }, { value: 'Gm', display: 'Gm / bvii' }, { value: 'Eb', display: 'Eb / bV' }, { value: 'Edim', display: 'E° / v°' }, { value: 'G', display: 'G / bVII' }],
    'Bb': [ { value: 'Bbm', display: 'Bbm / i' }, { value: 'Cb', display: 'Cb / bII' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Ebm', display: 'Ebm / iv' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Abm', display: 'Abm / bvii' }, { value: 'Fb', display: 'Fb / bV' }, { value: 'Fdim', display: 'F° / v°' }, { value: 'Ab', display: 'Ab / bVII' }],
    'B':  [ { value: 'Bm', display: 'Bm / i' }, { value: 'C', display: 'C / bII' }, { value: 'D', display: 'D / bIII' }, { value: 'Em', display: 'Em / iv' }, { value: 'G', display: 'G / bVI' }, { value: 'Am', display: 'Am / bvii' }, { value: 'F', display: 'F / bV' }, { value: 'F#dim', display: 'F#° / v°' }, { value: 'A', display: 'A / bVII' }],
};

const lydianKeyChordMap = {
    'C':  [ { value: 'C', display: 'C / I' }, { value: 'G', display: 'G / V' }, { value: 'D', display: 'D / II' }, { value: 'Em', display: 'Em / iii' }, { value: 'Am', display: 'Am / vi' }, { value: 'Bm', display: 'Bm / vii' }, { value: 'F', display: 'F / IV' }, { value: 'F#dim', display: 'F#° / #iv°' }, { value: 'Ddim', display: 'D° / ii°' }],
    'Db': [ { value: 'Db', display: 'Db / I' }, { value: 'Ab', display: 'Ab / V' }, { value: 'Eb', display: 'Eb / II' }, { value: 'Fm', display: 'Fm / iii' }, { value: 'Bbm', display: 'Bbm / vi' }, { value: 'Cm', display: 'Cm / vii' }, { value: 'Gb', display: 'Gb / IV' }, { value: 'Gdim', display: 'G° / #iv°' }, { value: 'Ebdim', display: 'Eb° / ii°' }],
    'D':  [ { value: 'D', display: 'D / I' }, { value: 'A', display: 'A / V' }, { value: 'E', display: 'E / II' }, { value: 'F#m', display: 'F#m / iii' }, { value: 'Bm', display: 'Bm / vi' }, { value: 'C#m', display: 'C#m / vii' }, { value: 'G', display: 'G / IV' }, { value: 'G#dim', display: 'G#° / #iv°' }, { value: 'Edim', display: 'E° / ii°' }],
    'Eb': [ { value: 'Eb', display: 'Eb / I' }, { value: 'Bb', display: 'Bb / V' }, { value: 'F', display: 'F / II' }, { value: 'Gm', display: 'Gm / iii' }, { value: 'Cm', display: 'Cm / vi' }, { value: 'Dm', display: 'Dm / vii' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Adim', display: 'A° / #iv°' }, { value: 'Fdim', display: 'F° / ii°' }],
    'E':  [ { value: 'E', display: 'E / I' }, { value: 'B', display: 'B / V' }, { value: 'F#', display: 'F# / II' }, { value: 'G#m', display: 'G#m / iii' }, { value: 'C#m', display: 'C#m / vi' }, { value: 'D#m', display: 'D#m / vii' }, { value: 'A', display: 'A / IV' }, { value: 'A#dim', display: 'A#° / #iv°' }, { value: 'F#dim', display: 'F#° / ii°' }],
    'F':  [ { value: 'F', display: 'F / I' }, { value: 'C', display: 'C / V' }, { value: 'G', display: 'G / II' }, { value: 'Am', display: 'Am / iii' }, { value: 'Dm', display: 'Dm / vi' }, { value: 'Em', display: 'Em / vii' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'Bdim', display: 'B° / #iv°' }, { value: 'Gdim', display: 'G° / ii°' }],
    'Gb': [ { value: 'Gb', display: 'Gb / I' }, { value: 'Db', display: 'Db / V' }, { value: 'Ab', display: 'Ab / II' }, { value: 'Bbm', display: 'Bbm / iii' }, { value: 'Ebm', display: 'Ebm / vi' }, { value: 'Fm', display: 'Fm / vii' }, { value: 'Cb', display: 'Cb / IV' }, { value: 'Cdim', display: 'C° / #iv°' }, { value: 'Abdim', display: 'Ab° / ii°' }],
    'G':  [ { value: 'G', display: 'G / I' }, { value: 'D', display: 'D / V' }, { value: 'A', display: 'A / II' }, { value: 'Bm', display: 'Bm / iii' }, { value: 'Em', display: 'Em / vi' }, { value: 'F#m', display: 'F#m / vii' }, { value: 'C', display: 'C / IV' }, { value: 'C#dim', display: 'C#° / #iv°' }, { value: 'Adim', display: 'A° / ii°' }],
    'Ab': [ { value: 'Ab', display: 'Ab / I' }, { value: 'Eb', display: 'Eb / V' }, { value: 'Bb', display: 'Bb / II' }, { value: 'Cm', display: 'Cm / iii' }, { value: 'Fm', display: 'Fm / vi' }, { value: 'Gm', display: 'Gm / vii' }, { value: 'Db', display: 'Db / IV' }, { value: 'Ddim', display: 'D° / #iv°' }, { value: 'Bbdim', display: 'Bb° / ii°' }],
    'A':  [ { value: 'A', display: 'A / I' }, { value: 'E', display: 'E / V' }, { value: 'B', display: 'B / II' }, { value: 'C#m', display: 'C#m / iii' }, { value: 'F#m', display: 'F#m / vi' }, { value: 'G#m', display: 'G#m / vii' }, { value: 'D', display: 'D / IV' }, { value: 'D#dim', display: 'D#° / #iv°' }, { value: 'Bdim', display: 'B° / ii°' }],
    'Bb': [ { value: 'Bb', display: 'Bb / I' }, { value: 'F', display: 'F / V' }, { value: 'C', display: 'C / II' }, { value: 'Dm', display: 'Dm / iii' }, { value: 'Gm', display: 'Gm / vi' }, { value: 'Am', display: 'Am / vii' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'Edim', display: 'E° / #iv°' }, { value: 'Cdim', display: 'C° / ii°' }],
    'B':  [ { value: 'B', display: 'B / I' }, { value: 'F#', display: 'F# / V' }, { value: 'C#', display: 'C# / II' }, { value: 'D#m', display: 'D#m / iii' }, { value: 'G#m', display: 'G#m / vi' }, { value: 'A#m', display: 'A#m / vii' }, { value: 'E', display: 'E / IV' }, { value: 'E#dim', display: 'E#° / #iv°' }, { value: 'C#dim', display: 'C#° / ii°' }],
};

const mixolydianKeyChordMap = {
    'C':  [ { value: 'C', display: 'C / I' }, { value: 'Bb', display: 'Bb / bVII' }, { value: 'F', display: 'F / IV' }, { value: 'Gm', display: 'Gm / v' }, { value: 'Dm', display: 'Dm / ii' }, { value: 'Am', display: 'Am / vi' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'Eb', display: 'Eb / bIII' }, { value: 'Edim', display: 'E° / iii°' }],
    'C#': [ { value: 'C#', display: 'C# / I' }, { value: 'B', display: 'B / bVII' }, { value: 'F#', display: 'F# / IV' }, { value: 'G#m', display: 'G#m / v' }, { value: 'D#m', display: 'D#m / ii' }, { value: 'A#m', display: 'A#m / vi' }, { value: 'A', display: 'A / bVI' }, { value: 'E', display: 'E / bIII' }, { value: 'E#dim', display: 'E#° / iii°' }],
    'D':  [ { value: 'D', display: 'D / I' }, { value: 'C', display: 'C / bVII' }, { value: 'G', display: 'G / IV' }, { value: 'Am', display: 'Am / v' }, { value: 'Em', display: 'Em / ii' }, { value: 'Bm', display: 'Bm / vi' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'F', display: 'F / bIII' }, { value: 'F#dim', display: 'F#° / iii°' }],
    'Eb': [ { value: 'Eb', display: 'Eb / I' }, { value: 'Db', display: 'Db / bVII' }, { value: 'Ab', display: 'Ab / IV' }, { value: 'Bbm', display: 'Bbm / v' }, { value: 'Fm', display: 'Fm / ii' }, { value: 'Cm', display: 'Cm / vi' }, { value: 'Cb', display: 'Cb / bVI' }, { value: 'Gb', display: 'Gb / bIII' }, { value: 'Gdim', display: 'G° / iii°' }],
    'E':  [ { value: 'E', display: 'E / I' }, { value: 'D', display: 'D / bVII' }, { value: 'A', display: 'A / IV' }, { value: 'Bm', display: 'Bm / v' }, { value: 'F#m', display: 'F#m / ii' }, { value: 'C#m', display: 'C#m / vi' }, { value: 'C', display: 'C / bVI' }, { value: 'G', display: 'G / bIII' }, { value: 'G#dim', display: 'G#° / iii°' }],
    'F':  [ { value: 'F', display: 'F / I' }, { value: 'Eb', display: 'Eb / bVII' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'Cm', display: 'Cm / v' }, { value: 'Gm', display: 'Gm / ii' }, { value: 'Dm', display: 'Dm / vi' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Ab', display: 'Ab / bIII' }, { value: 'Adim', display: 'A° / iii°' }],
    'F#': [ { value: 'F#', display: 'F# / I' }, { value: 'E', display: 'E / bVII' }, { value: 'B', display: 'B / IV' }, { value: 'C#m', display: 'C#m / v' }, { value: 'G#m', display: 'G#m / ii' }, { value: 'D#m', display: 'D#m / vi' }, { value: 'D', display: 'D / bVI' }, { value: 'A', display: 'A / bIII' }, { value: 'A#dim', display: 'A#° / iii°' }],
    'G':  [ { value: 'G', display: 'G / I' }, { value: 'F', display: 'F / bVII' }, { value: 'C', display: 'C / IV' }, { value: 'Dm', display: 'Dm / v' }, { value: 'Am', display: 'Am / ii' }, { value: 'Em', display: 'Em / vi' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'Bb', display: 'Bb / bIII' }, { value: 'Bdim', display: 'B° / iii°' }],
    'Ab': [ { value: 'Ab', display: 'Ab / I' }, { value: 'Gb', display: 'Gb / bVII' }, { value: 'Db', display: 'Db / IV' }, { value: 'Ebm', display: 'Ebm / v' }, { value: 'Bbm', display: 'Bbm / ii' }, { value: 'Fm', display: 'Fm / vi' }, { value: 'Fb', display: 'Fb / bVI' }, { value: 'Cb', display: 'Cb / bIII' }, { value: 'Cdim', display: 'C° / iii°' }],
    'A':  [ { value: 'A', display: 'A / I' }, { value: 'G', display: 'G / bVII' }, { value: 'D', display: 'D / IV' }, { value: 'Em', display: 'Em / v' }, { value: 'Bm', display: 'Bm / ii' }, { value: 'F#m', display: 'F#m / vi' }, { value: 'F', display: 'F / bVI' }, { value: 'C', display: 'C / bIII' }, { value: 'C#dim', display: 'C#° / iii°' }],
    'Bb': [ { value: 'Bb', display: 'Bb / I' }, { value: 'Ab', display: 'Ab / bVII' }, { value: 'Eb', display: 'Eb / IV' }, { value: 'Fm', display: 'Fm / v' }, { value: 'Cm', display: 'Cm / ii' }, { value: 'Gm', display: 'Gm / vi' }, { value: 'Gb', display: 'Gb / bVI' }, { value: 'Db', display: 'Db / bIII' }, { value: 'Ddim', display: 'D° / iii°' }],
    'B':  [ { value: 'B', display: 'B / I' }, { value: 'A', display: 'A / bVII' }, { value: 'E', display: 'E / IV' }, { value: 'F#m', display: 'F#m / v' }, { value: 'C#m', display: 'C#m / ii' }, { value: 'G#m', display: 'G#m / vi' }, { value: 'G', display: 'G / bVI' }, { value: 'D', display: 'D / bIII' }, { value: 'D#dim', display: 'D#° / iii°' }],
};

const locrianKeyChordMap = {
    'C':  [ { value: 'Cdim', display: 'C° / i°' }, { value: 'Fm', display: 'Fm / iv' }, { value: 'Ebm', display: 'Ebm / biii' }, { value: 'Bbm', display: 'Bbm / bvii' }, { value: 'Db', display: 'Db / bII' }, { value: 'Ab', display: 'Ab / bVI' }, { value: 'F', display: 'F / IV' }, { value: 'Ab+', display: 'Ab+ / bVI+' }, { value: 'Gb', display: 'Gb / bV' }],
    'C#': [ { value: 'C#dim', display: 'C#° / i°' }, { value: 'F#m', display: 'F#m / iv' }, { value: 'Em', display: 'Em / biii' }, { value: 'Bm', display: 'Bm / bvii' }, { value: 'D', display: 'D / bII' }, { value: 'A', display: 'A / bVI' }, { value: 'F#', display: 'F# / IV' }, { value: 'A+', display: 'A+ / bVI+' }, { value: 'G', display: 'G / bV' }],
    'D':  [ { value: 'Ddim', display: 'D° / i°' }, { value: 'Gm', display: 'Gm / iv' }, { value: 'Fm', display: 'Fm / biii' }, { value: 'Cm', display: 'Cm / bvii' }, { value: 'Eb', display: 'Eb / bII' }, { value: 'Bb', display: 'Bb / bVI' }, { value: 'G', display: 'G / IV' }, { value: 'Bb+', display: 'Bb+ / bVI+' }, { value: 'Ab', display: 'Ab / bV' }],
    'Eb': [ { value: 'D#dim', display: 'D#° / i°' }, { value: 'G#m', display: 'G#m / iv' }, { value: 'F#m', display: 'F#m / biii' }, { value: 'C#m', display: 'C#m / bvii' }, { value: 'E', display: 'E / bII' }, { value: 'B', display: 'B / bVI' }, { value: 'G#', display: 'G# / IV' }, { value: 'B+', display: 'B+ / bVI+' }, { value: 'A', display: 'A / bV' }],
    'E':  [ { value: 'Edim', display: 'E° / i°' }, { value: 'Am', display: 'Am / iv' }, { value: 'Gm', display: 'Gm / biii' }, { value: 'Dm', display: 'Dm / bvii' }, { value: 'F', display: 'F / bII' }, { value: 'C', display: 'C / bVI' }, { value: 'A', display: 'A / IV' }, { value: 'C+', display: 'C+ / bVI+' }, { value: 'Bb', display: 'Bb / bV' }],
    'F':  [ { value: 'Fdim', display: 'F° / i°' }, { value: 'Bbm', display: 'Bbm / iv' }, { value: 'Abm', display: 'Abm / biii' }, { value: 'Ebm', display: 'Ebm / bvii' }, { value: 'Gb', display: 'Gb / bII' }, { value: 'Db', display: 'Db / bVI' }, { value: 'Bb', display: 'Bb / IV' }, { value: 'Db+', display: 'Db+ / bVI+' }, { value: 'Cb', display: 'Cb / bV' }],
    'F#': [ { value: 'F#dim', display: 'F#° / i°' }, { value: 'Bm', display: 'Bm / iv' }, { value: 'Am', display: 'Am / biii' }, { value: 'Em', display: 'Em / bvii' }, { value: 'G', display: 'G / bII' }, { value: 'D', display: 'D / bVI' }, { value: 'B', display: 'B / IV' }, { value: 'D+', display: 'D+ / bVI+' }, { value: 'C', display: 'C / bV' }],
    'G':  [ { value: 'Gdim', display: 'G° / i°' }, { value: 'Cm', display: 'Cm / iv' }, { value: 'Bbm', display: 'Bbm / biii' }, { value: 'Fm', display: 'Fm / bvii' }, { value: 'Ab', display: 'Ab / bII' }, { value: 'Eb', display: 'Eb / bVI' }, { value: 'C', display: 'C / IV' }, { value: 'Eb+', display: 'Eb+ / bVI+' }, { value: 'Db', display: 'Db / bV' }],
    'Ab': [ { value: 'G#dim', display: 'G#° / i°' }, { value: 'C#m', display: 'C#m / iv' }, { value: 'Bm', display: 'Bm / biii' }, { value: 'F#m', display: 'F#m / bvii' }, { value: 'A', display: 'A / bII' }, { value: 'E', display: 'E / bVI' }, { value: 'C#', display: 'C# / IV' }, { value: 'E+', display: 'E+ / bVI+' }, { value: 'D', display: 'D / bV' }],
    'A':  [ { value: 'Adim', display: 'A° / i°' }, { value: 'Dm', display: 'Dm / iv' }, { value: 'Cm', display: 'Cm / biii' }, { value: 'Gm', display: 'Gm / bvii' }, { value: 'Bb', display: 'Bb / bII' }, { value: 'F', display: 'F / bVI' }, { value: 'D', display: 'D / IV' }, { value: 'F+', display: 'F+ / bVI+' }, { value: 'Eb', display: 'Eb / bV' }],
    'Bb': [ { value: 'A#dim', display: 'A#° / i°' }, { value: 'D#m', display: 'D#m / iv' }, { value: 'C#m', display: 'C#m / biii' }, { value: 'G#m', display: 'G#m / bvii' }, { value: 'B', display: 'B / bII' }, { value: 'F#', display: 'F# / bVI' }, { value: 'D#', display: 'D# / IV' }, { value: 'F#+', display: 'F#+ / bVI+' }, { value: 'E', display: 'E / bV' }],
    'B':  [ { value: 'Bdim', display: 'B° / i°' }, { value: 'Em', display: 'Em / iv' }, { value: 'Dm', display: 'Dm / biii' }, { value: 'Am', display: 'Am / bvii' }, { value: 'C', display: 'C / bII' }, { value: 'G', display: 'G / bVI' }, { value: 'E', display: 'E / IV' }, { value: 'G+', display: 'G+ / bVI+' }, { value: 'F', display: 'F / bV' }],
};

// --- Structure for all scale maps ---
export const scaleChordMaps = {
  'Major': majorKeyChordMap,
  'Natural Minor': naturalMinorKeyChordMap,
  'Harmonic Minor': harmonicMinorKeyChordMap,
  'Melodic Minor': melodicMinorKeyChordMap,
  'Dorian': dorianKeyChordMap,
  'Phrygian': phrygianKeyChordMap,
  'Lydian': lydianKeyChordMap,
  'Mixolydian': mixolydianKeyChordMap,
  'Locrian': locrianKeyChordMap,
};

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
  'Cb': 'major',  'Cb+': 'major',


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
  'Bm': 'minor',   'Bdim': 'minor',
  'Cbm': 'minor',  'Cbdim': 'minor',
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
  'Ab':    { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb4' },
  'Abm':   { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb4' },
  'Abdim': { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb4' },
  'Ab+':   { 'major': 'C',    'minor': 'C♭',  'majorNote': 'C5',   'minorNote': 'Cb4' },

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
  'B+':  ['B',   'D♯',  'F𝄪'],

  'Cb':    ['C♭', 'E♭', 'G♭'],
  'Cbm':   ['C♭', 'E𝄫', 'G♭'],
  'Cbdim': ['C♭', 'E𝄫', 'G𝄫'],
  'Cb+':   ['C♭', 'E♭', 'G'],
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
  'Fdim':  ['F3',  'F4',  'Ab4',  'Cb4',  'F5'],
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
  // C Chords
  'C':     'Bb4',
  'Cm':    'Bb4',
  'Cdim':  'Bb4',
  'C+':    'Bb4',

  // C-Sharp Chords
  'C#':    'B4',
  'C#m':   'B4',
  'C#dim': 'B4',
  'C#+':   'B4',

  // D-Flat Chords
  'Db':    'Cb4', // Note: Db is enharmonically C#, but often grouped with higher octave patterns. Let's use 5 based on Eb. Re-evaluating. Db is Cb4 in the original. Let's stick to that.
  'Db':    'Cb4',
  'Dbm':   'Cb4',
  'Dbdim': 'Cb4',
  'Db+':   'Cb4',

  // D Chords
  'D':     'C5',
  'Dm':    'C5',
  'Ddim':  'C5',
  'D+':    'C5',

  // D-Sharp Chords
  'D#':    'C#5',
  'D#m':   'C#5',
  'D#dim': 'C#5',
  'D#+':   'C#5',

  // E-Flat Chords
  'Eb':    'Db5',
  'Ebm':   'Db5',
  'Ebdim': 'Db5',
  'Eb+':   'Db5',

  // E Chords
  'E':     'D5',
  'Em':    'D5',
  'Edim':  'D5',
  'E+':    'D5',

  // E-Sharp Chords
  'E#':    'D#5',
  'E#m':   'D#5',
  'E#dim': 'D#5',
  'E#+':   'D#5',

  // F-Flat Chords
  'Fb':    'Ebb5',
  'Fbm':   'Ebb5',
  'Fbdim': 'Ebb5',
  'Fb+':   'Ebb5',

  // F Chords
  'F':     'Eb5',
  'Fm':    'Eb5',
  'Fdim':  'Eb5',
  'F+':    'Eb5',

  // F-Sharp Chords
  'F#':    'E5',
  'F#m':   'E5',
  'F#dim': 'E5',
  'F#+':   'E5',

  // G-Flat Chords
  'Gb':    'Fb5',
  'Gbm':   'Fb5',
  'Gbdim': 'Fb5',
  'Gb+':   'Fb5',

  // G Chords
  'G':     'F5',
  'Gm':    'F5',
  'Gdim':  'F5',
  'G+':    'F5',

  // G-Sharp Chords
  'G#':    'F#5',
  'G#m':   'F#5',
  'G#dim': 'F#5',
  'G#+':   'F#5',

  // A-Flat Chords
  'Ab':    'Gb4',
  'Abm':   'Gb4',
  'Abdim': 'Gb4',
  'Ab+':   'Gb4',

  // A Chords
  'A':     'G4',
  'Am':    'G4',
  'Adim':  'G4',
  'A+':    'G4',

  // A-Sharp Chords
  'A#':    'G#4',
  'A#m':   'G#4',
  'A#dim': 'G#4',
  'A#+':   'G#4',

  // B-Flat Chords
  'Bb':    'Ab4',
  'Bbm':   'Ab4',
  'Bbdim': 'Ab4',
  'Bb+':   'Ab4',

  // B Chords
  'B':     'A4',
  'Bm':    'A4',
  'Bdim':  'A4',
  'B+':    'A4',

  // B-Sharp Chords
  'B#':    'A#4',
  'B#m':   'A#4',
  'B#dim': 'A#4',
  // (no B#+)

  // C-Flat Chords
  'Cb':    'Bbb4',
  'Cbm':   'Bbb4',
  'Cbdim': 'Bbb4',
  'Cb+':   'Bbb4'
};
export const rhythmChordMajorSeventhNotes = {
  // C Chords
  'C':     'B4',
  'Cm':    'B4',
  'Cdim':  'B4',
  'C+':    'B4',

  // C-Sharp Chords
  'C#':    'B#4',
  'C#m':   'B#4',
  'C#dim': 'B#4',
  'C#+':   'B#4',

  // D-Flat Chords
  'Db':    'C5',
  'Dbm':   'C5',
  'Dbdim': 'C5',
  'Db+':   'C5',

  // D Chords
  'D':     'C#5',
  'Dm':    'C#5',
  'Ddim':  'C#5',
  'D+':    'C#5',

  // D-Sharp Chords
  'D#':    'C𝄪5',
  'D#m':   'C𝄪5',
  'D#dim': 'C𝄪5',
  'D#+':   'C𝄪5',

  // E-Flat Chords
  'Eb':    'D5',
  'Ebm':   'D5',
  'Ebdim': 'D5',
  'Eb+':   'D5',

  // E Chords
  'E':     'D#5',
  'Em':    'D#5',
  'Edim':  'D#5',
  'E+':    'D#5',

  // E-Sharp Chords
  'E#':    'D𝄪5',
  'E#m':   'D𝄪5',
  'E#dim': 'D𝄪5',
  'E#+':   'D𝄪5',

  // F-Flat Chords
  'Fb':    'Eb5',
  'Fbm':   'Eb5',
  'Fbdim': 'Eb5',
  'Fb+':   'Eb5',

  // F Chords
  'F':     'E5',
  'Fm':    'E5',
  'Fdim':  'E5',
  'F+':    'E5',

  // F-Sharp Chords
  'F#':    'E#5',
  'F#m':   'E#5',
  'F#dim': 'E#5',
  'F#+':   'E#5',

  // G-Flat Chords
  'Gb':    'F4',
  'Gbm':   'F4',
  'Gbdim': 'F4',
  'Gb+':   'F4',

  // G Chords
  'G':     'F#4',
  'Gm':    'F#4',
  'Gdim':  'F#4',
  'G+':    'F#4',

  // G-Sharp Chords
  'G#':    'F𝄪4',
  'G#m':   'F𝄪4',
  'G#dim': 'F𝄪4',
  'G#+':   'F𝄪4',

  // A-Flat Chords
  'Ab':    'G4',
  'Abm':   'G4',
  'Abdim': 'G4',
  'Ab+':   'G4',

  // A Chords
  'A':     'G#4',
  'Am':    'G#4',
  'Adim':  'G#4',
  'A+':    'G#4',

  // A-Sharp Chords
  'A#':    'G𝄪4',
  'A#m':   'G𝄪4',
  'A#dim': 'G𝄪4',
  'A#+':   'G𝄪4',

  // B-Flat Chords
  'Bb':    'A4',
  'Bbm':   'A4',
  'Bbdim': 'A4',
  'Bb+':   'A4',

  // B Chords
  'B':     'A#4',
  'Bm':    'A#4',
  'Bdim':  'A#4',
  'B+':    'A#4',

  // B-Sharp Chords
  'B#':    'A𝄪4',
  'B#m':   'A𝄪4',
  'B#dim': 'A𝄪4',
  // (no B#+)

  // C-Flat Chords
  'Cb':    'Bb4',
  'Cbm':   'Bb4',
  'Cbdim': 'Bb4',
  'Cb+':   'Bb4'
};
export const rhythmChordSecondNotes = {
  // C Chords
  'C':     'D4',
  'Cm':    'D4',
  'Cdim':  'D4',
  'C+':    'D4',

  // C-Sharp Chords
  'C#':    'D#4',
  'C#m':   'D#4',
  'C#dim': 'D#4',
  'C#+':   'D#4',

  // D-Flat Chords
  'Db':    'Eb4',
  'Dbm':   'Eb4',
  'Dbdim': 'Eb4',
  'Db+':   'Eb4',

  // D Chords
  'D':     'E4',
  'Dm':    'E4',
  'Ddim':  'E4',
  'D+':    'E4',

  // D-Sharp Chords
  'D#':    'E#4',
  'D#m':   'E#4',
  'D#dim': 'E#4',
  'D#+':   'E#4',

  // E-Flat Chords
  'Eb':    'F4',
  'Ebm':   'F4',
  'Ebdim': 'F4',
  'Eb+':   'F4',

  // E Chords
  'E':     'F#4',
  'Em':    'F#4',
  'Edim':  'F#4',
  'E+':    'F#4',

  // E-Sharp Chords
  'E#':    'F𝄪4',
  'E#m':   'F𝄪4',
  'E#dim': 'F𝄪4',
  'E#+':   'F𝄪4',

  // F-Flat Chords
  'Fb':    'Gb4',
  'Fbm':   'Gb4',
  'Fbdim': 'Gb4',
  'Fb+':   'Gb4',

  // F Chords
  'F':     'G4',
  'Fm':    'G4',
  'Fdim':  'G4',
  'F+':    'G4',

  // F-Sharp Chords
  'F#':    'G#4',
  'F#m':   'G#4',
  'F#dim': 'G#4',
  'F#+':   'G#4',

  // G-Flat Chords
  'Gb':    'Ab4',
  'Gbm':   'Ab4',
  'Gbdim': 'Ab4',
  'Gb+':   'Ab4',

  // G Chords
  'G':     'A4',
  'Gm':    'A4',
  'Gdim':  'A4',
  'G+':    'A4',

  // G-Sharp Chords
  'G#':    'A#4',
  'G#m':   'A#4',
  'G#dim': 'A#4',
  'G#+':   'A#4',

  // A-Flat Chords
  'Ab':    'Bb3',
  'Abm':   'Bb3',
  'Abdim': 'Bb3',
  'Ab+':   'Bb3',

  // A Chords
  'A':     'B3',
  'Am':    'B3',
  'Adim':  'B3',
  'A+':    'B3',

  // A-Sharp Chords
  'A#':    'B#3',
  'A#m':   'B#3',
  'A#dim': 'B#3',
  'A#+':   'B#3',

  // B-Flat Chords
  'Bb':    'C4',
  'Bbm':   'C4',
  'Bbdim': 'C4',
  'Bb+':   'C4',

  // B Chords
  'B':     'C#4',
  'Bm':    'C#4',
  'Bdim':  'C#4',
  'B+':    'C#4',

  // B-Sharp Chords
  'B#':    'C𝄪4',
  'B#m':   'C𝄪4',
  'B#dim': 'C𝄪4',
  // (no B#+)

  // C-Flat Chords
  'Cb':    'Db4',
  'Cbm':   'Db4',
  'Cbdim': 'Db4',
  'Cb+':   'Db4'
};
export const rhythmChordFourthNotes = {
  // C Chords
  'C':     'F4',
  'Cm':    'F4',
  'Cdim':  'F4',
  'C+':    'F4',

  // C-Sharp Chords
  'C#':    'F#4',
  'C#m':   'F#4',
  'C#dim': 'F#4',
  'C#+':   'F#4',

  // D-Flat Chords
  'Db':    'Gb4',
  'Dbm':   'Gb4',
  'Dbdim': 'Gb4',
  'Db+':   'Gb4',

  // D Chords
  'D':     'G4',
  'Dm':    'G4',
  'Ddim':  'G4',
  'D+':    'G4',

  // D-Sharp Chords
  'D#':    'G#4',
  'D#m':   'G#4',
  'D#dim': 'G#4',
  'D#+':   'G#4',

  // E-Flat Chords
  'Eb':    'Ab4',
  'Ebm':   'Ab4',
  'Ebdim': 'Ab4',
  'Eb+':   'Ab4',

  // E Chords
  'E':     'A4',
  'Em':    'A4',
  'Edim':  'A4',
  'E+':    'A4',

  // E-Sharp Chords
  'E#':    'A#4',
  'E#m':   'A#4',
  'E#dim': 'A#4',
  'E#+':   'A#4',

  // F-Flat Chords
  'Fb':    'Bbb4',
  'Fbm':   'Bbb4',
  'Fbdim': 'Bbb4',
  'Fb+':   'Bbb4',

  // F Chords
  'F':     'Bb4',
  'Fm':    'Bb4',
  'Fdim':  'Bb4',
  'F+':    'Bb4',

  // F-Sharp Chords (Low Octave Rule)
  'F#':    'B3',
  'F#m':   'B3',
  'F#dim': 'B3',
  'F#+':   'B3',

  // G-Flat Chords
  'Gb':    'Cb4',
  'Gbm':   'Cb4',
  'Gbdim': 'Cb4',
  'Gb+':   'Cb4',

  // G Chords (High Octave Rule)
  'G':     'C5',
  'Gm':    'C5',
  'Gdim':  'C5',
  'G+':    'C5',

  // G-Sharp Chords (High Octave Rule)
  'G#':    'C#5',
  'G#m':   'C#5',
  'G#dim': 'C#5',
  'G#+':   'C#5',

  // A-Flat Chords (High Octave Rule)
  'Ab':    'Db5',
  'Abm':   'Db5',
  'Abdim': 'Db5',
  'Ab+':   'Db5',

  // A Chords
  'A':     'D4',
  'Am':    'D4',
  'Adim':  'D4',
  'A+':    'D4',

  // A-Sharp Chords
  'A#':    'D#4',
  'A#m':   'D#4',
  'A#dim': 'D#4',
  'A#+':   'D#4',

  // B-Flat Chords
  'Bb':    'Eb4',
  'Bbm':   'Eb4',
  'Bbdim': 'Eb4',
  'Bb+':   'Eb4',

  // B Chords
  'B':     'E4',
  'Bm':    'E4',
  'Bdim':  'E4',
  'B+':    'E4',

  // B-Sharp Chords
  'B#':    'E#4',
  'B#m':   'E#4',
  'B#dim': 'E#4',
  // (no B#+)

  // C-Flat Chords
  'Cb':    'Fb4',
  'Cbm':   'Fb4',
  'Cbdim': 'Fb4',
  'Cb+':   'Fb4'
};
export const rhythmChordSixthNotes = {
  // C Chords
  'C':     'A4',
  'Cm':    'A4',
  'Cdim':  'A4', // Corrected to Major Sixth
  'C+':    'A4',

  // C-Sharp Chords
  'C#':    'A#4',
  'C#m':   'A#4',
  'C#dim': 'A#4', // Corrected to Major Sixth
  'C#+':   'A#4',

  // D-Flat Chords
  'Db':    'Bb4',
  'Dbm':   'Bb4',
  'Dbdim': 'Bb4', // Corrected to Major Sixth
  'Db+':   'Bb4',

  // D Chords
  'D':     'B4',
  'Dm':    'B4',
  'Ddim':  'B4',  // Corrected to Major Sixth
  'D+':    'B4',

  // D-Sharp Chords
  'D#':    'B#4',
  'D#m':   'B#4',
  'D#dim': 'B#4', // Corrected to Major Sixth
  'D#+':   'B#4',

  // E-Flat Chords (Octave 5)
  'Eb':    'C5',
  'Ebm':   'C5',
  'Ebdim': 'C5',  // Corrected to Major Sixth
  'Eb+':   'C5',

  // E Chords (Octave 5)
  'E':     'C#5',
  'Em':    'C#5',
  'Edim':  'C#5', // Corrected to Major Sixth
  'E+':    'C#5',

  // E-Sharp Chords (Octave 5)
  'E#':    'C𝄪5',
  'E#m':   'C𝄪5',
  'E#dim': 'C𝄪5', // Corrected to Major Sixth
  'E#+':   'C𝄪5',

  // F-Flat Chords (Octave 5)
  'Fb':    'Db5',
  'Fbm':   'Db5',
  'Fbdim': 'Db5', // Corrected to Major Sixth
  'Fb+':   'Db5',

  // F Chords (Octave 5)
  'F':     'D5',
  'Fm':    'D5',
  'Fdim':  'D5',  // Corrected to Major Sixth
  'F+':    'D5',

  // F-Sharp Chords (Octave 5)
  'F#':    'D#5',
  'F#m':   'D#5',
  'F#dim': 'D#5', // Corrected to Major Sixth
  'F#+':   'D#5',

  // G-Flat Chords (Octave 5)
  'Gb':    'Eb5',
  'Gbm':   'Eb5',
  'Gbdim': 'Eb5', // Corrected to Major Sixth
  'Gb+':   'Eb5',

  // G Chords (Octave 5)
  'G':     'E5',
  'Gm':    'E5',
  'Gdim':  'E5',  // Corrected to Major Sixth
  'G+':    'E5',

  // G-Sharp Chords (Octave 5)
  'G#':    'E#5',
  'G#m':   'E#5',
  'G#dim': 'E#5', // Corrected to Major Sixth
  'G#+':   'E#5',

  // A-Flat Chords
  'Ab':    'F4',
  'Abm':   'F4',
  'Abdim': 'F4',  // Corrected to Major Sixth
  'Ab+':   'F4',

  // A Chords
  'A':     'F#4',
  'Am':    'F#4',
  'Adim':  'F#4', // Corrected to Major Sixth
  'A+':    'F#4',

  // A-Sharp Chords
  'A#':    'F𝄪4',
  'A#m':   'F𝄪4',
  'A#dim': 'F𝄪4', // Corrected to Major Sixth
  'A#+':   'F𝄪4',

  // B-Flat Chords
  'Bb':    'G4',
  'Bbm':   'G4',
  'Bbdim': 'G4',  // Corrected to Major Sixth
  'Bb+':   'G4',

  // B Chords
  'B':     'G#4',
  'Bm':    'G#4',
  'Bdim':  'G#4', // Corrected to Major Sixth
  'B+':    'G#4',

  // B-Sharp Chords
  'B#':    'G𝄪4',
  'B#m':   'G𝄪4',
  'B#dim': 'G𝄪4', // Corrected to Major Sixth
  // (no B#+)

  // C-Flat Chords
  'Cb':    'Ab4',
  'Cbm':   'Ab4',
  'Cbdim': 'Ab4', // Corrected to Major Sixth
  'Cb+':   'Ab4'
};


export const noteColorClass = {
  // C Chords
  'C':     'note-C',
  'Cm':    'note-C',
  'Cdim':  'note-C',
  'C+':    'note-C',

  // C-Sharp Chords
  'C#':    'note-C',
  'C#m':   'note-C',
  'C#dim': 'note-C',
  'C#+':   'note-C',

  // D-Flat Chords
  'Db':    'note-D',
  'Dbm':   'note-D',
  'Dbdim': 'note-D',
  'Db+':   'note-D',

  // D Chords
  'D':     'note-D',
  'Dm':    'note-D',
  'Ddim':  'note-D',
  'D+':    'note-D',

  // D-Sharp Chords
  'D#':    'note-D',
  'D#m':   'note-D',
  'D#dim': 'note-D',
  'D#+':   'note-D',

  // E-Flat Chords
  'Eb':    'note-E',
  'Ebm':   'note-E',
  'Ebdim': 'note-E',
  'Eb+':   'note-E',

  // E Chords
  'E':     'note-E',
  'Em':    'note-E',
  'Edim':  'note-E',
  'E+':    'note-E',

  // E-Sharp Chords
  'E#':    'note-E',
  'E#m':   'note-E',
  'E#dim': 'note-E',
  'E#+':   'note-E',

  // F-Flat Chords (Enharmonic Exception)
  'Fb':    'note-F',
  'Fbm':   'note-F',
  'Fbdim': 'note-F',
  'Fb+':   'note-F',

  // F Chords
  'F':     'note-F',
  'Fm':    'note-F',
  'Fdim':  'note-F',
  'F+':    'note-F',

  // F-Sharp Chords
  'F#':    'note-F',
  'F#m':   'note-F',
  'F#dim': 'note-F',
  'F#+':   'note-F',

  // G-Flat Chords
  'Gb':    'note-G',
  'Gbm':   'note-G',
  'Gbdim': 'note-G',
  'Gb+':   'note-G',

  // G Chords
  'G':     'note-G',
  'Gm':    'note-G',
  'Gdim':  'note-G',
  'G+':    'note-G',

  // G-Sharp Chords
  'G#':    'note-G',
  'G#m':   'note-G',
  'G#dim': 'note-G',
  'G#+':   'note-G',

  // A-Flat Chords
  'Ab':    'note-A',
  'Abm':   'note-A',
  'Abdim': 'note-A',
  'Ab+':   'note-A',

  // A Chords
  'A':     'note-A',
  'Am':    'note-A',
  'Adim':  'note-A',
  'A+':    'note-A',

  // A-Sharp Chords
  'A#':    'note-A',
  'A#m':   'note-A',
  'A#dim': 'note-A',
  'A#+':   'note-A',

  // B-Flat Chords
  'Bb':    'note-B',
  'Bbm':   'note-B',
  'Bbdim': 'note-B',
  'Bb+':   'note-B',

  // B Chords
  'B':     'note-B',
  'Bm':    'note-B',
  'Bdim':  'note-B',
  'B+':    'note-B',

  // B-Sharp Chords
  'B#':    'note-B',
  'B#m':   'note-B',
  'B#dim': 'note-B',
  // (no B#+)

  // C-Flat Chords (Enharmonic Exception)
  'Cb':    'note-C',
  'Cbm':   'note-C',
  'Cbdim': 'note-C',
  'Cb+':   'note-C'
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

// --- MASTER CHORD LIST (NEW - Placed at the end to avoid errors) ---
const chromaticRootNotes = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'Cb'];

// Generate a comprehensive list of all possible chords based on roots and types.
const allPossibleChords = chromaticRootNotes.flatMap(root => [
    { value: `${root}`, display: `${root}` },
    { value: `${root}m`, display: `${root}m` },
    { value: `${root}dim`, display: `${root}°` },
    { value: `${root}+`, display: `${root}+` }
]);

// Filter this list to only include chords that are actually defined in our chordTones map.
// This ensures we don't offer chords we can't play.
export const allChordOptions = allPossibleChords.filter(chord => chordTones.hasOwnProperty(chord.value));

// Create a simple array of just the chord values (e.g., "C", "Cdim") for other logic.
export const allChords = allChordOptions.map(option => option.value);
