// =============================
// BUNKER TERMINAL — secret.js
// Secret commands (require SOUND ON)
// =============================

// All secret/immersive commands live here.
// They only run when audioEnabled() === true.

  function runSecretCommand(cmd, args) {
  console.log("SECRET CHECK:", cmd);
  } 
  // =============================
  // SECRET COMMANDS IMPLEMENTATION
  // =============================
  
  function matrixEffect() {
    playSound("matrix");
    print("[MATRIX CHANNEL ACTIVATED]");
    for (let i = 0; i < 15; i++) {
      printRaw(randomMatrixLine() + "\n");
    }
    print("CHANNEL CLOSED.");
  }
  
  function randomMatrixLine() {
    const chars = "01";
    let out = "";
    for (let i = 0; i < 40; i++) {
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
  }
  
  function glitchEffect() {
    playSound("glitch2");
    print("*** SIGNAL DISTORTION ***");
    for (let i = 0; i < 3; i++) {
      printRaw("@#%&^$!".repeat(10) + "\n");
    }
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
    print("  (\_/)");
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