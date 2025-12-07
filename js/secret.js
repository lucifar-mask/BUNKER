// =============================
// BUNKER TERMINAL — secret.js (FINAL CLEAN VERSION)
// Secret commands — ONLY run when audioEnabled() is true.
// =============================

// List of secret-only commands
const SECRET_COMMANDS = [
  "matrix",
  "glitch",
  "scan",
  "encrypt",
  "decode",
  "teddy",
  "init",
  "shutdown"
];

// ======================================================
// SECRET COMMAND ROUTER (bulletproof, final version)
// ======================================================
function runSecretCommand(cmd, args) {
  console.log("SECRET CHECK:", cmd);

  // 1. If command is NOT secret → allow normal commands
  if (!SECRET_COMMANDS.includes(cmd)) return false;

  // 2. Secret command but AUDIO OFF → block
  if (!audioEnabled()) {
    print("IMMERSIVE MODULE DISABLED.");
    print("Audio subsystem is offline.");
    print("Use SOUND ON to unlock advanced interactions.");
    return true; // handled (blocked)
  }

  // 3. Secret + audio ON → execute command
  switch (cmd) {
    case "matrix":
      matrixEffect();
      return true;

    case "glitch":
      glitchEffect();
      return true;

    case "scan":
      identityScan();
      return true;

    case "encrypt":
      encryptOutput(args);
      return true;

    case "decode":
      decodeOutput(args);
      return true;

    case "teddy":
      teddyAscii();
      return true;

    case "init":
      replayIntro();
      return true;

    case "shutdown":
      shutdownSequence();
      return true;
  }

  return false; // fallback
}

// ======================================================
// SECRET COMMAND IMPLEMENTATIONS
// ======================================================

function matrixEffect() {
  playSound("matrix");
  print("[MATRIX CHANNEL ACTIVATED]");
  for (let i = 0; i < 15; i++) printRaw(randomMatrixLine() + "\n");
  print("CHANNEL CLOSED.");
}

function randomMatrixLine() {
  const chars = "01";
  let out = "";
  for (let i = 0; i < 40; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function glitchEffect() {
  playSound("glitch2");
  print("*** SIGNAL DISTORTION ***");
  for (let i = 0; i < 3; i++) printRaw("@#%&^$!".repeat(10) + "\n");
  print("STABILIZING…");
}

function identityScan() {
  playSound("click");
  print("INITIALIZING IDENTITY SCAN…");
  print("Scanning cognitive signature…");
  wait(800).then(() => print("Neural imprint detected."));
  wait(1200).then(() => print("Trace complete."));
}

function encryptOutput(args) {
  playSound("click");
  const text = args.join(" ") || "DATA";
  const encrypted = btoa(text).replace(/=/g, "");
  print(`ENCRYPTED: ${encrypted}`);
}

function decodeOutput(args) {
  playSound("click");
  try {
    const decoded = atob(args.join(" "));
    print(`DECODED: ${decoded}`);
  } catch {
    print("INVALID ENCODED STRING");
  }
}

function teddyAscii() {
  playSound("glitch1");
  print("GLITCH SIGNATURE: TEDDY404");
  print("--------------------------------");
  print("  (\\_/)");
  print("  ( •_•)   <\\ glitch bear online");
  print(" / >❤️   ");
  print("--------------------------------");
}

function replayIntro() {
  playSound("grant");
  clearOutput();
  bootSequence();
}

function shutdownSequence() {
  playSound("shutdown");
  print("SHUTTING DOWN TERMINAL…");
  wait(1000).then(() => clearOutput());
}