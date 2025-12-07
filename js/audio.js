// =============================
// BUNKER TERMINAL — audio.js
// Full audio subsystem
// =============================

// Sound files (placed in /audio folder)
const SOUND_FILES = {
    grant: "audio/access_granted.mp3",
    deny: "audio/access_denied.mp3",
    glitch1: "audio/glitch1.mp3",
    glitch2: "audio/glitch2.mp3",
    click: "audio/click.mp3",
    shutdown: "audio/shutdown.mp3",
    matrix: "audio/matrix_whirr.mp3",
    hum: "audio/hum_loop.mp3"
  };
  
  // Audio elements
  let sounds = {};
  let humLoop = null;
  
  // Initialize audio elements
  function initAudio() {
    for (const key in SOUND_FILES) {
      sounds[key] = new Audio(SOUND_FILES[key]);
      sounds[key].preload = "auto";
    }
  
    // Background hum loop
    humLoop = new Audio(SOUND_FILES.hum);
    humLoop.loop = true;
    humLoop.volume = 0.4;
  }
  
  // Play a sound (only if audio ON)
  function playSound(name) {
    if (!audioEnabled()) return;
    if (sounds[name]) {
      sounds[name].currentTime = 0;
      sounds[name].play().catch(() => {});
    }
  }
  
  // Play glitch burst always (even audio off)
  function glitchBurst() {
    if (sounds.glitch1) {
      sounds.glitch1.currentTime = 0;
      sounds.glitch1.play().catch(() => {});
    }
  }
  
  // Turn audio ON
  function enableAudio() {
    setAudioState(true);
    playSound("grant");
    if (humLoop) humLoop.play().catch(() => {});
  }
  
  // Turn audio OFF
  function disableAudio() {
    setAudioState(false);
    playSound("shutdown");
    if (humLoop) humLoop.pause();
  }
  
  // Immersive commands guard
  function audioCheck() {
    if (!audioEnabled()) {
      print("IMMERSIVE MODULE DISABLED.");
      print("Audio subsystem is offline.");
      print("Use SOUND ON to unlock advanced interactions.");
      return false;
    }
    return true;
  }