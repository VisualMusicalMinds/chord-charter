import { appState, getProgressionData } from './state.js';
import { scaleChordMaps, allChordOptions, optionColors, restDashImgUrl, dashImgUrl, rhythmBox2, rhythmBox3, rhythmBox4, noteColorClass, chordTones, chordSevenths, chordMajorSevenths, chordSeconds, chordFourths } from './config.js';
import { getNotesToPlayForChord } from './audio.js';

export function updateWaveformDisplay() {
  document.getElementById("waveform-name").textContent = appState.currentWaveform;
}

export function updateKeyDisplay() {
  document.getElementById("current-key-name").textContent = appState.currentMusicalKey;
}

export function updateChordDropdowns() {
    const currentKey = appState.currentMusicalKey;
    const currentScale = appState.currentScale;
    
    const keyChords = scaleChordMaps[currentScale]?.[currentKey] || [];

    const allSelects = document.querySelectorAll('.chord-select');
    
    allSelects.forEach(select => {
        const currentVal = select.value;
        select.innerHTML = ''; 

        const emptyOption = document.createElement('option');
        emptyOption.value = "";
        emptyOption.textContent = "----";
        select.appendChild(emptyOption);

        if (keyChords.length > 0) {
            const groupInKey = document.createElement('optgroup');
            groupInKey.label = `Chords in ${currentKey} ${currentScale}`;
            keyChords.forEach(chord => {
                const option = document.createElement('option');
                option.value = chord.value;
                option.textContent = chord.display;
                groupInKey.appendChild(option);
            });
            select.appendChild(groupInKey);
        }

        const groupOutOfKey = document.createElement('optgroup');
        groupOutOfKey.label = "Other Chords";
        allChordOptions.forEach(chord => {
            if (!keyChords.find(kc => kc.value === chord.value)) {
                const option = document.createElement('option');
                option.value = chord.value;
                option.textContent = chord.display;
                groupOutOfKey.appendChild(option);
            }
        });
        select.appendChild(groupOutOfKey);
        
        select.value = currentVal;
    });
}


export function setSlotContent(slotIndex) {
  const slot = document.getElementById(`slot${slotIndex}`);
  if (!slot) return;

  const currentData = getProgressionData(appState.currentToggle);
  if (!currentData) return;

  const primaryChordName = currentData.p[slotIndex];
  const isSplitActive = currentData.splitActive[slotIndex];
  const splitChordName = currentData.splitVal[slotIndex];

  const dashImg = slot.querySelector('.dash-img-slot');
  const noteRectsContainer = slot.querySelector('.note-rects-container');
  const primaryRects = slot.querySelector('.primary-note-rects');
  const splitRects = slot.querySelector('.split-note-rects');

  primaryRects.innerHTML = '';
  splitRects.innerHTML = '';

  let hasContent = false;

  if (primaryChordName) {
    _createNoteRects(primaryChordName, false, slotIndex, primaryRects);
    hasContent = true;
  }
  if (isSplitActive && splitChordName) {
    _createNoteRects(splitChordName, true, slotIndex, splitRects);
    hasContent = true;
  }

  if (hasContent) {
    dashImg.style.display = 'none';
    noteRectsContainer.style.display = 'flex';
  } else {
    dashImg.style.display = 'block';
    noteRectsContainer.style.display = 'none';
  }
}

function _createNoteRects(chordName, isSplit, slotIndex, container) {
    if (!chordName) return;
    const progData = getProgressionData(appState.currentToggle);
    const notes = getNotesToPlayForChord(chordName, isSplit, slotIndex, progData).map(n => n.slice(0, -1));

    notes.forEach(noteName => {
        const rootNote = noteName.match(/^[A-G][b#]?/)?.[0];
        if (!rootNote) return;

        const colorClass = noteColorClass[rootNote] || `note-${rootNote.charAt(0)}`;
        const rect = document.createElement('div');
        rect.className = `note-rect ${colorClass}`;
        
        let textContent = rootNote.charAt(0);
        let accidental = '';
        if (rootNote.length > 1) {
            accidental = `<span class="accidental">${rootNote.charAt(1)}</span>`;
        }
        rect.innerHTML = `${textContent}${accidental}`;
        
        container.appendChild(rect);
    });
}


export function updateRhythmPictures() {
  const states = Array.from(document.querySelectorAll('.bottom-rhythm-box')).map(box => box.classList.contains('active'));
  const pictureImgs = document.querySelectorAll('.bottom-picture-img');
  
  for (let i = 0; i < pictureImgs.length; i++) {
    const firstOfPair = states[i * 2];
    const secondOfPair = states[i * 2 + 1];

    if (firstOfPair && secondOfPair) {
      pictureImgs[i].src = rhythmBox4;
    } else if (firstOfPair && !secondOfPair) {
      pictureImgs[i].src = rhythmBox2;
    } else if (!firstOfPair && secondOfPair) {
      pictureImgs[i].src = rhythmBox3;
    } else {
      pictureImgs[i].src = restDashImgUrl; 
    }
  }
}

export function setPlayingUI(playing) {
  document.getElementById('playIcon').style.display = playing ? 'none' : 'block';
  document.getElementById('pauseIcon').style.display = playing ? 'block' : 'none';
}

export function updateSlotHighlights() {
    appState.slotIds.forEach((id, index) => {
        const slot = document.getElementById(id);
        if (slot) {
            slot.parentElement.classList.toggle('enlarged', appState.isPlaying && index === (appState.slotHighlightStep % 4));
        }
    });
}

export function updatePictureHighlights() {
    const pictures = document.querySelectorAll('.bottom-picture');
    pictures.forEach((pic, index) => {
        pic.classList.toggle('picture-highlighted', appState.isPlaying && index === appState.pictureHighlightStep);
    });
}

export function updateModifierButtonVisuals(modifierKey, className, states) {
  document.querySelectorAll(`.${className}`).forEach((btn, idx) => {
    btn.classList.toggle('active', states[idx]);
  });
}

export function _updateQualityButtonVisualForSlot(idx, quality) {
  const btn = document.querySelectorAll('.quality-toggle-btn')[idx];
  if (!btn) return;

  btn.classList.remove('quality-active');
  let text = 'M';

  if (quality === 'major') {
    text = 'M';
    btn.classList.add('quality-active');
  } else if (quality === 'minor') {
    text = 'm';
    btn.classList.add('quality-active');
  }

  btn.textContent = text;
}

export function setSplitSlotColorAndStyle(idx, splitSelect, splitVal) {
    const rootNote = splitVal ? splitVal.match(/^[A-G][b#]?/)?.[0] : null;
    const colorInfo = rootNote ? optionColors[rootNote.charAt(0)] : null;
    
    if (colorInfo) {
        splitSelect.style.backgroundColor = colorInfo.background;
        splitSelect.style.color = colorInfo.text;
    } else {
        splitSelect.style.backgroundColor = '';
        splitSelect.style.color = '';
    }
}

export function updateLinkVisuals(progLetter) {
  const icon = document.getElementById('linkIcon' + progLetter);
  if (icon) {
    icon.classList.toggle('linked', appState.progressionLinkStates[progLetter]);
  }
}

export function updateGridForTimeSignature(numerator) {
  const bottomGrid = document.getElementById('bottom-grid');
  const gridContainer = document.getElementById('bottom-grid-container');

  document.documentElement.style.setProperty('--time-sig-beats', numerator);

  for (let i = 0; i < 5; i++) { 
    const pic = document.getElementById(`bottomPic${i}`);
    const pair = document.getElementById(`rhythm-box-pair-${i}`);
    const shouldShow = i < numerator;
    if (pic) pic.style.display = shouldShow ? 'flex' : 'none';
    if (pair) pair.style.display = shouldShow ? 'flex' : 'none';
  }
}
