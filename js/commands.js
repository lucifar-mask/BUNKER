// =============================
// BUNKER TERMINAL — commands.js
// Public command handlers
// =============================

function runCommand(cmd, args) {
    // First check secret commands
    const handledSecret = runSecretCommand(cmd, args);
    if (handledSecret !== false) return;
  
    switch (cmd) {
      // CORE
      case "help": return helpCommand();
      case "clear": return clearOutput();
      case "version": return versionCommand();
  
      // AUDIO
      case "sound": return soundCommand(args);
  
      // EVENTS
      case "events": return eventsCommand(args);
  
      // QUESTS
      case "quest": return questCommand(args);
  
      // MEDIA / INFO PAGES
      case "gallery": return galleryCommand();
      case "tickets": return ticketsCommand();
      case "contact": return contactCommand();
      case "sets": return setsCommand();
  
      default:
        print("SYNTAX ERROR: Operation not found.");
        print("Consult HELP.");
    }
  }
  
  // =============================
  // HELP
  // =============================
  function helpCommand() {
    print("=====================================================");
    print(" BUNKER TERMINAL – PUBLIC OPERATIONS MANUAL v1.0");
    print("=====================================================");
    print("");
    print("PUBLIC COMMANDS:");
    print("-----------------------------------------------------");
    print("events      → display upcoming activity nodes");
    print("sets        → access audio archives");
    print("gallery     → view historic image records");
    print("tickets     → retrieve external access link");
    print("contact     → communication endpoints");
    print("quest       → initiate intelligence operations");
    print("help        → display this manual");
    print("version     → system build information");
    print("clear       → wipe visible output");
    print("sound on/off → enable immersive subsystem");
    print("");
    print("-----------------------------------------------------");
    print("CLASSIFIED SYSTEM FUNCTIONS:");
    print("[ ACCESS DENIED – INSUFFICIENT AUTHORIZATION ]");
    print("-----------------------------------------------------");
    print("");
    print("NOTE: Further system capabilities exist.");
  }
  
  // =============================
  // VERSION
  // =============================
  function versionCommand() {
    print("BUNKER TERMINAL v1.0");
    print("Build: STABLE");
    print("Audio subsystem: " + (audioEnabled() ? "ONLINE" : "OFFLINE"));
  }
  
  // =============================
  // AUDIO
  // =============================
  function soundCommand(args) {
    const action = args[0];
    if (!action) return print("Use SOUND ON or SOUND OFF");
  
    if (action === "on") {
      enableAudio();
      return print("AUDIO SUBSYSTEM ONLINE ✔");
    }
  
    if (action === "off") {
      disableAudio();
      return print("AUDIO SUBSYSTEM OFFLINE");
    }
  
    print("Invalid parameter.");
  }
  
  // =============================
  // EVENTS
  // =============================
  function eventsCommand(args) {
    if (!args[0]) return listEvents();
    return showEventDetails(args[0]);
  }
  
  // =============================
  // GALLERY
  // =============================
  function galleryCommand() {
    print("ARCHIVE: Visual records not available in terminal mode.");
    print("Use external channel when deployed on full site.");
  }
  
  // =============================
  // TICKETS
  // =============================
  function ticketsCommand() {
    print("TICKET LINK:");
    print("https://yourdomain.com/tickets");
  }
  
  // =============================
  // CONTACT
  // =============================
  function contactCommand() {
    print("CONTACT CHANNELS:");
    print("Email: bunker-ops@yourdomain.com");
    print("Instagram: @teddy404.dj");
  }
  
  // =============================
  // SETS
  // =============================
  function setsCommand() {
    print("AUDIO ARCHIVE:");
    print("Past sets accessible via external channel.");
    print("Upload your SoundCloud/YouTube links here later.");
  }
  
  // =============================
  // QUEST COMMAND
  // =============================
  function questCommand(args) {
    if (!args[0]) return listQuests();
  
    const arg = args[0];
  
    if (arg === "random") return startRandomQuest();
  
    // run quest by ID
    return runQuest(arg);
  }