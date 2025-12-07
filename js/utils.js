// =============================
// BUNKER TERMINAL — utils.js
// Helper functions
// =============================

// Print line to terminal
function print(text = "") {
    const out = document.getElementById("terminal-output");
    out.innerHTML += text + "\n";
    out.scrollTop = out.scrollHeight;
  }
  
  // Print without newline
  function printRaw(text = "") {
    const out = document.getElementById("terminal-output");
    out.innerHTML += text;
    out.scrollTop = out.scrollHeight;
  }
  
  // Clear terminal
  function clearOutput() {
    document.getElementById("terminal-output").innerHTML = "";
  }
  
  // ASCII separator
  function separator() {
    return "------------------------------------------";
  }
  
  // Random helper
  function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Delay for typewriter effects
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }