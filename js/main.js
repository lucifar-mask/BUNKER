// =============================
// BUNKER TERMINAL — main.js
// Input engine, boot sequence, routing
// =============================

let inputField, output;

window.onload = () => {
  inputField = document.getElementById("terminal-input");
  output = document.getElementById("terminal-output");

  initAudio(); // prepare audio system

  // Auto-focus for desktop + mobile
  inputField.focus();
  document.body.addEventListener("touchstart", () => inputField.focus());

  // If first boot complete → skip intro
  if (bootCompleted()) {
    print("BUNKER:~$");
  } else {
    bootSequence();
  }

  // Listen for input
  inputField.addEventListener("keydown", handleInput);
};

// =============================
// HANDLE INPUT
// =============================
function handleInput(e) {
  if (e.key !== "Enter") return;

  const raw = inputField.value.trim();
  inputField.value = "";

  if (raw === "") {
    print("BUNKER:~$");
    return;
  }

  print(`BUNKER:~$ ${raw}`);

  // If quest data capture is active
  if (currentQuestCapture) {
    handleQuestCapture(raw);
    print("BUNKER:~$");
    return;
  }

  routeCommand(raw);
  print("BUNKER:~$");
}

// =============================
// COMMAND ROUTER
// =============================
function routeCommand(raw) {
  const parts = raw.split(" ");
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  runCommand(cmd, args);
}

// =============================
// BOOT SEQUENCE
// =============================
async function bootSequence() {
  clearOutput();

  print("INITIALIZING CORE SYSTEMS…");
  await wait(500);
  print("LOADING MODULES………… DONE");
  await wait(500);
  print("VERIFYING AUTHORIZATION………");
  await wait(600);
  print("AUTH LEVEL: LIMITED OPERATOR");
  await wait(400);
  print("STABILIZING ENVIRONMENT…… OK");
  await wait(600);
  print("");

  // STATUS PANEL
  print("SYSTEM STATUS");
  print(separator());
  print(`AUDIO SUBSYSTEM: ${audioEnabled() ? "ONLINE" : "OFFLINE"}`);
  print("IMMERSIVE MODULES: " + (audioEnabled() ? "UNLOCKED" : "LOCKED"));
  print("SECURE NODES: 3 / 7 ACTIVE");
  print("SIGNAL INTEGRITY: 72%");
  print("ARCHIVE CORRUPTION: DETECTED");
  print("QUEST ENGINE: READY");
  print(separator());
  print("");
  await wait(400);

  // ASCII BANNER
  print("██████╗ ██╗   ██╗███╗   ██╗██╗  ██╗███████╗██████╗ ");
  print("B U N K E R   T E R M I N A L   v1.0");
  print("---------------------------------------------------");
  print("Welcome to BUNKER Terminal.");
  print("Type HELP to begin.");
  print("");

  setBootComplete();
}

// =============================
// PASSWORD GATE (optional to activate)
// =============================
// If you want to enable password gate, call passwordGate()
// at the top of window.onload().

async function passwordGate() {
  clearOutput();
  print("ACCESS RESTRICTED");
  print("ENTER PASSWORD:");

  return new Promise(resolve => {
    const listener = e => {
      if (e.key === "Enter") {
        const pwd = inputField.value.trim();
        inputField.value = "";
        if (pwd === "xxxxbunker091025xxxx") {
          print("ACCESS GRANTED");
          playSound("grant");
          document.removeEventListener("keydown", listener);
          resolve(true);
        } else {
          print("ACCESS DENIED");
          glitchBurst();
        }
      }
    };
    document.addEventListener("keydown", listener);
  });
}