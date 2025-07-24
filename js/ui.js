
import { restDashImgUrl, noteColorClass, dashImgUrl, rhythmBox2, rhythmBox3, rhythmBox4, timeSignatureNumerators, optionColors, allChordOptions, keyChordMap } from './config.js';
import { getProgressionData, appState } from './state.js';
import { buildNotesForDisplay } from './utils.js';

export function updateWaveformDisplay() { 
    document.getElementById("waveform-name").textContent = appState.currentWaveform; 
}

export function updateKeyDisplay() {
  const keyNameDisplay = document.getElementById("current-key-name");
  if (keyNameDisplay) { keyNameDisplay.textContent = appState.currentMusicalKey; }
}

export function setSlotContent(slotIndex) {
    const slot = document.getElementById('slot' + slotIndex);
    const primarySelect = slot.querySelector('.primary-chord-select');
    const primaryNoteRects = slot.querySelector('.primary-note-rects');
    const splitNoteRects = slot.querySelector('.split-note-rects');
    const noteRectsContainer = slot.querySelector('.note-rects-container');
    let img = slot.querySelector('.dash-img-slot');
    
    primaryNoteRects.innerHTML = '';
    splitNoteRects.innerHTML = '';

    const progData = getProgressionData(appState.currentToggle);
    const primaryChord = progData.p[slotIndex];

    // Set primary chord dropdown color
    primarySelect.className = 'chord-select primary-chord-select'; 
    if (primaryChord && primaryChord !== "empty") {
        let chordClass = `c-selected-${primaryChord.toLowerCase()}`;
        chordClass = chordClass.replace('♭', 'flat').replace('♯', 'sharp').replace('#', 'sharp'); 
        primarySelect.classList.add(chordClass);
    }

    if (!primaryChord || primaryChord === "empty") {
        if (!img) {
            img = document.createElement('img');
            img.className = 'dash-img-slot';
            slot.insertBefore(img, noteRectsContainer);
        }
        img.src = restDashImgUrl;
        img.alt = "Rhythm Box Rest";
        img.style.display = "block";
        noteRectsContainer.style.display = "none";
        return;
    } else {
        if (img) img.style.display = "none";
        noteRectsContainer.style.display = "flex";
    }

    const primaryNotes = buildNotesForDisplay(
        primaryChord, progData.s7[slotIndex], progData.s2[slotIndex], progData.s4[slotIndex], 
        progData.sus[slotIndex], progData.maj7[slotIndex], progData.m[slotIndex]
    );
    primaryNoteRects.innerHTML = generateNoteRectsHTML(primaryNotes);

    if (progData.splitActive[slotIndex] && progData.splitVal[slotIndex]) {
        const splitNotes = buildNotesForDisplay(
            progData.splitVal[slotIndex], progData.splitS7[slotIndex], progData.splitS2[slotIndex], progData.splitS4[slotIndex], 
            progData.splitSus[slotIndex], progData.splitMaj7[slotIndex], progData.splitM[slotIndex]
        );
        splitNoteRects.innerHTML = generateNoteRectsHTML(splitNotes);
    }
}

function generateNoteRectsHTML(notes) {
    return notes.map(item => {
        const note = item.note;
        if (!note) return '';
        const typeClass = item.type ? `note-${item.type}` : 'note-default';
        const baseLetter = note.charAt(0);
        let colorClassKey = note.replace('♭', 'flat').replace('♯', 'sharp').replace('#', 'sharp');
        const colorClass = noteColorClass[colorClassKey] || noteColorClass[baseLetter] || 'note-default';
        let accidentalHtml = '';
        if (note.includes('♯') || note.includes('#')) accidentalHtml = `<span class="accidental sharp">♯</span>`;
        else if (note.includes('♭') || note.includes('b')) accidentalHtml = `<span class="accidental flat">♭</span>`;
        return `<div class="note-rect ${typeClass} ${colorClass}">${baseLetter}${accidentalHtml}</div>`;
    }).filter(html => html !== '').join('');
}


export function updateRhythmPictures() {
    const numerator = timeSignatureNumerators[appState.currentTimeSignatureIndex];
    for (let pair = 0; pair < 5; ++pair) { // Iterate up to 5
        const box1 = document.querySelector(`.bottom-rhythm-box[data-pair="${pair}"][data-which="0"]`);
        const box2 = document.querySelector(`.bottom-rhythm-box[data-pair="${pair}"][data-which="1"]`);
        const imgElement = document.getElementById('bottomPic' + pair);
        if (imgElement) {
            const img = imgElement.querySelector('.bottom-picture-img');
            if (box1 && box2 && img) {
                let url = dashImgUrl;
                if (box1.classList.contains('active') && !box2.classList.contains('active')) url = rhythmBox2;
                else if (box1.classList.contains('active') && box2.classList.contains('active')) url = rhythmBox3;
                else if (!box1.classList.contains('active') && box2.classList.contains('active')) url = rhythmBox4;
                img.src = url;
            }
        }
    }
}

export function setPlayingUI(playing) {
  const playIcon = document.getElementById('playIcon'), pauseIcon = document.getElementById('pauseIcon'), playPauseBtn = document.getElementById('playPauseBtn');
  if(playIcon) playIcon.style.display = playing ? "none" : "block"; 
  if(pauseIcon) pauseIcon.style.display = playing ? "block" : "none";
  if(playPauseBtn) { playPauseBtn.title = playing ? "Pause" : "Play"; playPauseBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play'); }
}

export function updateSlotHighlights() { 
    for (let i = 0; i < 4; i++) unhighlightSlot(i); 
    if (appState.isPlaying) highlightSlot(appState.slotHighlightStep % 4); 
}
function highlightSlot(idx) { document.getElementById(appState.slotIds[idx])?.classList.add('enlarged'); }
function unhighlightSlot(idx) { document.getElementById(appState.slotIds[idx])?.classList.remove('enlarged'); }

export function updatePictureHighlights() { 
    const numerator = timeSignatureNumerators[appState.currentTimeSignatureIndex];
    for (let i = 0; i < 5; i++) unhighlightPicture(i); 
    if (appState.isPlaying) highlightPicture(appState.pictureHighlightStep % numerator); 
}
function highlightPicture(idx) { document.getElementById('bottomPic'+idx)?.classList.add('picture-highlighted'); }
function unhighlightPicture(idx) { document.getElementById('bottomPic'+idx)?.classList.remove('picture-highlighted'); }

export function updateModifierButtonVisuals(modifierKey, buttonClassName, progressionModifierArray) {
  const currentData = getProgressionData(appState.currentToggle);
  const statesArray = progressionModifierArray || currentData[modifierKey]; 
  if (statesArray) {
    document.querySelectorAll(`.${buttonClassName}`).forEach((btn, idx) => btn.classList.toggle('active', statesArray[idx]));
  }
}

export function _updateQualityButtonVisualForSlot(idx, state) {
    const slot = document.getElementById('slot' + idx);
    if (!slot) return;
    const qualityBtn = slot.querySelector('.quality-toggle-btn');
    if (qualityBtn) {
        if (state === 'minor') qualityBtn.textContent = 'm';
        else qualityBtn.textContent = 'M'; 
        qualityBtn.classList.toggle('quality-active', state === 'major' || state === 'minor');
    }
}

export function setSplitSlotColorAndStyle(slotIndex, selectElement, chordToDisplay) {
    selectElement.className = 'chord-select split-chord-select visible'; // ensure base classes are there
    if (chordToDisplay && chordToDisplay !== "empty" && chordToDisplay !== "") {
        let chordClass = `c-selected-${chordToDisplay.toLowerCase()}`;
        chordClass = chordClass.replace('♭', 'flat').replace('♯', 'sharp').replace('#', 'sharp');
        selectElement.classList.add(chordClass);
    }
}

export function updateChordDropdowns() {
    const chordsForCurrentKey = keyChordMap[appState.currentMusicalKey] || [];
    const diatonicChordValues = new Set(chordsForCurrentKey.map(c => c.value));

    document.querySelectorAll('.chord-select').forEach(selectElement => {
        const currentVal = selectElement.value;
        const hasCurrentVal = allChordOptions.some(opt => opt.value === currentVal);
        
        selectElement.innerHTML = ''; 

        // Add default and empty options
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "-";
        selectElement.appendChild(defaultOption);
        const emptyOption = document.createElement('option');
        emptyOption.value = "empty";
        emptyOption.textContent = "";
        selectElement.appendChild(emptyOption);

        // Add an optgroup for diatonic chords
        const diatonicGroup = document.createElement('optgroup');
        diatonicGroup.label = `${appState.currentMusicalKey} Major Scale Chords`;
        chordsForCurrentKey.forEach(chordData => {
            const option = createChordOption(chordData);
            diatonicGroup.appendChild(option);
        });
        selectElement.appendChild(diatonicGroup);
        
        // Add an optgroup for other chords if necessary
        const otherChords = allChordOptions.filter(c => !diatonicChordValues.has(c.value));
        if (otherChords.length > 0) {
            const nonDiatonicGroup = document.createElement('optgroup');
            nonDiatonicGroup.label = "Other Chords";
            otherChords.forEach(chordData => {
                const option = createChordOption(chordData);
                nonDiatonicGroup.appendChild(option);
            });
            selectElement.appendChild(nonDiatonicGroup);
        }
        
        // Restore the selected value
        if (hasCurrentVal) {
            selectElement.value = currentVal;
        } else {
            selectElement.value = "";
        }
    });
}

function createChordOption(chordData) {
    const option = document.createElement('option');
    option.value = chordData.value;
    option.textContent = chordData.display;

    const rootNote = chordData.value.replace(/m|dim|sus|maj7/g, '').replace(/#|♯/g, 'sharp').replace(/b|♭/g, 'flat').charAt(0);
    const colorInfo = optionColors[rootNote.toUpperCase()];
     if (colorInfo) {
        option.style.backgroundColor = colorInfo.background;
        option.style.color = colorInfo.text;
    }
    return option;
}

export function updateLinkVisuals(progLetter) {
  const icon = document.getElementById('linkIcon' + progLetter);
  if (icon) {
    icon.classList.toggle('linked', appState.progressionLinkStates[progLetter]);
  }
}

export function updateGridForTimeSignature(numerator) {
    document.documentElement.style.setProperty('--time-sig-beats', numerator);

    for (let i = 0; i < 5; i++) {
        const pic = document.getElementById(`bottomPic${i}`);
        const pair = document.getElementById(`rhythm-box-pair-${i}`);
        if (pic) {
            pic.style.display = i < numerator ? 'flex' : 'none';
        }
        if (pair) {
            pair.style.display = i < numerator ? 'flex' : 'none';
        }
    }
}
