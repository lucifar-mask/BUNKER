// =============================
// BUNKER TERMINAL — quests.js
// 9-Quest Engine (Easy, Mid, Hard)
// =============================

// Each quest gets an ID like: E1, E2, M1, M2, H1, H2...
// All quests return text-only terminal sequences — NO panels.
// After completion: ask email/IG and send to Google Sheet.

// -------------------------------------
// QUEST REGISTRATION
// -------------------------------------
const QUESTS = {

    // ==========================
    // EASY QUESTS
    // ==========================
  
    E1: {
      name: "Directory Scan",
      difficulty: "EASY",
      start: startE1
    },
  
    E2: {
      name: "Basic Sequence",
      difficulty: "EASY",
      start: startE2
    },
  
    E3: {
      name: "File Reconstruction",
      difficulty: "EASY",
      start: startE3
    },
  
    // ==========================
    // MID QUESTS
    // ==========================
  
    M1: {
      name: "Energy Distribution",
      difficulty: "MID",
      start: startM1
    },
  
    M2: {
      name: "Fragment Puzzle",
      difficulty: "MID",
      start: startM2
    },
  
    M3: {
      name: "ID Trace",
      difficulty: "MID",
      start: startM3
    },
  
    // ==========================
    // HARD QUESTS
    // ==========================
  
    H1: {
      name: "Multi-Layer Corruption",
      difficulty: "HARD",
      start: startH1
    },
  
    H2: {
      name: "Firewall Override",
      difficulty: "HARD",
      start: startH2
    },
  
    H3: {
      name: "Ciphered Archive",
      difficulty: "HARD",
      start: startH3
    }
  };
  
  // -------------------------------------
  // QUEST LIST DISPLAY
  // -------------------------------------
  function listQuests() {
    print("=========================================");
    print("AVAILABLE QUESTS:");
    print("=========================================");
    print("");
  
    Object.keys(QUESTS).forEach(id => {
      const q = QUESTS[id];
      const completed = questDone(id) ? "✔" : "";
      print(`${id} — ${q.name} (${q.difficulty}) ${completed}`);
    });
  
    print("");
    print("Use: quest <id>");
    print("Or:  quest random");
    print("");
  }
  
  // Start a random quest
  function startRandomQuest() {
    const keys = Object.keys(QUESTS);
    const id = randomFrom(keys);
    runQuest(id);
  }
  
  // Run quest by ID
  function runQuest(id) {
    if (!QUESTS[id]) {
      print("No quest with this ID.");
      return;
    }
    clearOutput();
    QUESTS[id].start(id);
  }
  
  
  // ====================================================================
  // ============================ EASY QUESTS ============================
  // ====================================================================
  
  // -----------------------------
  // EASY 1 — Directory Scan
  // -----------------------------
  let E1_state = {};
  function startE1(id) {
    E1_state = { step: 1 };
    print("INITIATING QUEST: DIRECTORY SCAN");
    print(separator());
    print("Explore directories and identify the safe one.");
    print("");
    print("Available:");
    print("/safe");
    print("/noise");
    print("/trap");
  }
  
  function handleE1(input) {
    if (input === "cat /safe/info.txt") {
      print("ACCESSING SAFE NODE…");
      return finishQuest("E1");
    }
    if (input.startsWith("cat") || input.startsWith("ls")) {
      print("Incorrect directory.");
      return;
    }
    print("HINT: inspect /safe");
  }
  
  // -----------------------------
  // EASY 2 — Basic Sequence
  // -----------------------------
  let E2_state = {};
  function startE2(id) {
    E2_state = { step: 1 };
    print("INITIATING QUEST: BASIC SEQUENCE");
    print(separator());
    print("Sequence: 2, 4, 6, ?");
    print("Enter the next number.");
  }
  
  function handleE2(input) {
    if (input === "8") return finishQuest("E2");
    print("Incorrect. Try again.");
  }
  
  // -----------------------------
  // EASY 3 — File Reconstruction
  // -----------------------------
  let E3_state = {};
  function startE3(id) {
    E3_state = { step: 1 };
    print("INITIATING QUEST: FILE RECONSTRUCTION");
    print(separator());
    print("File corruption detected.");
    print("H_L_O   B_N_E_");
    print("Use: repair <word1> <word2>");
  }
  
  function handleE3(input) {
    if (input.toLowerCase() === "repair hello bunker") {
      return finishQuest("E3");
    }
    print("Incorrect reconstruction.");
  }
  
  
  // ====================================================================
  // ============================ MID QUESTS =============================
  // ====================================================================
  
  // -----------------------------
  // MID 1 — Energy Distribution
  // -----------------------------
  let M1_state = {};
  function startM1(id) {
    M1_state = { step: 1 };
    print("QUEST: ENERGY DISTRIBUTION");
    print(separator());
    print("Available energy: 10 units");
    print("");
    print("Subsystems:");
    print("VENTS: 3");
    print("CORE: 5");
    print("LIGHTS: 4");
    print("");
    print("Restore two subsystems in correct order.");
    print("Use: restore <A> <B>");
  }
  
  function handleM1(input) {
    if (input === "restore vents core") return finishQuest("M1");
    print("Energy pattern mismatch.");
  }
  
  // -----------------------------
  // MID 2 — Fragment Puzzle
  // -----------------------------
  let M2_state = {};
  function startM2(id) {
    M2_state = { step: 1, code: "729" };
    print("QUEST: FRAGMENT PUZZLE");
    print(separator());
    print("Fragments scattered.");
    print("Reassemble code and compile.");
    print("Use: compile <digits>");
  }
  
  function handleM2(input) {
    if (input === `compile ${M2_state.code}`) return finishQuest("M2");
    print("Incorrect code.");
  }
  
  // -----------------------------
  // MID 3 — ID Trace
  // -----------------------------
  let M3_state = {};
  function startM3(id) {
    M3_state = { step: 1 };
    print("QUEST: ID TRACE");
    print(separator());
    print("Node pattern: 3 → 8 → ?");
    print("Pattern increases by +5.");
    print("Use: trace <number>");
  }
  
  function handleM3(input) {
    if (input === "trace 13") return finishQuest("M3");
    print("Trace mismatch.");
  }
  
  
  // ====================================================================
  // ============================ HARD QUESTS ============================
  // ====================================================================
  
  // -----------------------------
  // HARD 1 — Multi-Layer Corruption
  // -----------------------------
  let H1_state = {};
  function startH1(id) {
    H1_state = { step: 1 };
    print("QUEST: MULTI-LAYER CORRUPTION");
    print(separator());
    print("3 corrupted layers detected.");
    print("Decode keys from each layer.");
    print("");
    print("Use: decrypt <word>");
  }
  
  function handleH1(input) {
    if (input === "decrypt protocolzeta") return finishQuest("H1");
    print("Incorrect decryption.");
  }
  
  // -----------------------------
  // HARD 2 — Firewall Override
  // -----------------------------
  let H2_state = {};
  function startH2(id) {
    H2_state = { step: 1 };
    print("QUEST: FIREWALL OVERRIDE");
    print(separator());
    print("Steps: elevate privilege → solve checksum → deploy pattern");
    print("Use commands in sequence.");
  }
  
  function handleH2(input) {
    if (H2_state.step === 1 && input === "privilege escalate") {
      H2_state.step = 2;
      return print("PRIVILEGE LEVEL RAISED. Solve checksum: 64 % X = 8");
    }
  
    if (H2_state.step === 2 && input === "7") {
      H2_state.step = 3;
      return print("CHECKSUM VERIFIED. Deploy countermeasure.");
    }
  
    if (H2_state.step === 3 && input === "deploy ghosttrace") {
      return finishQuest("H2");
    }
  
    print("Invalid step.");
  }
  
  // -----------------------------
  // HARD 3 — Ciphered Archive
  // -----------------------------
  let H3_state = {};
  function startH3(id) {
    H3_state = { step: 1 };
    print("QUEST: CIPHERED ARCHIVE");
    print(separator());
    print("Cipher: GSRH RH Z HVXIVG");
    print("(Atbash cipher)");
    print("Use: decode <phrase>");
  }
  
  function handleH3(input) {
    if (input.toLowerCase() === "decode this is a message") {
      return finishQuest("H3");
    }
    print("Decryption incomplete.");
  }
  
  
  // ====================================================================
  // QUEST COMPLETION — Data Capture
  // ====================================================================
  
  function finishQuest(id) {
    print("");
    print("QUEST COMPLETE ✔");
    completeQuest(id);
    print(separator());
    print("WARNING: CONTACT INFORMATION REQUESTED.");
    print("Enter email address:");
    currentQuestCapture = { quest: id, step: "email" };
  }
  
  let currentQuestCapture = null;
  
  function handleQuestCapture(input) {
    if (!currentQuestCapture) return;
  
    // Skip
    if (input.toLowerCase() === "skip") {
      print("Data submission skipped.");
      currentQuestCapture = null;
      return;
    }
  
    // Email step
    if (currentQuestCapture.step === "email") {
      currentQuestCapture.email = input;
      print("INSTAGRAM USERNAME (OPTIONAL):");
      currentQuestCapture.step = "ig";
      return;
    }
  
    // IG step
    if (currentQuestCapture.step === "ig") {
      currentQuestCapture.ig = input;
      print("UPLOADING TO SECURE NODE…");
      submitToSheet(currentQuestCapture);
      currentQuestCapture = null;
      return;
    }
  }
  
  // Send data to Google Sheet API
  function submitToSheet(payload) {
    fetch("https://script.google.com/macros/s/YOUR_API_KEY/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(() => print("TRANSMISSION ACCEPTED ✔"))
    .catch(() => print("TRANSMISSION FAILED"));
  }  