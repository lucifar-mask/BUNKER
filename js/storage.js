// =============================
// BUNKER TERMINAL — storage.js
// Handles localStorage saving/loading
// =============================

// All saved under one root key
const STORAGE_KEY = "BUNKER_TERMINAL_DATA";

// Default storage structure
const DEFAULT_DATA = {
  questsCompleted: {}, // example: { "E1": true }
  audioEnabled: false,
  firstBootComplete: false
};

// Load storage
function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { ...DEFAULT_DATA };
  try {
    return JSON.parse(raw);
  } catch {
    return { ...DEFAULT_DATA };
  }
}

// Save storage
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Get a fresh working copy
let DATA = loadData();

// Mark quest as complete
function completeQuest(id) {
  DATA.questsCompleted[id] = true;
  saveData(DATA);
}

// Check completion
function questDone(id) {
  return DATA.questsCompleted[id] === true;
}

// Audio settings
function setAudioState(enabled) {
  DATA.audioEnabled = enabled;
  saveData(DATA);
}
function audioEnabled() {
  return DATA.audioEnabled === true;
}

// First boot flag
function setBootComplete() {
  DATA.firstBootComplete = true;
  saveData(DATA);
}
function bootCompleted() {
  return DATA.firstBootComplete === true;
}