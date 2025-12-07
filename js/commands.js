// =============================
// BUNKER TERMINAL — commands.js (FINAL CLEAN VERSION)
// Public command router (works with fixed secret.js)
// =============================

function runCommand(cmd, args) {
  // First: check secret commands
  const handledSecret = runSecretCommand(cmd, args);
  if (handledSecret === true) return; // ONLY skip if secret was truly handled

  // Otherwise run public commands
  switch (cmd) {
    // CORE
    case "help": return helpCommand();
    case "clear": return clearOutput();
    case "clear": return print("██████╗ ██╗   ██╗███╗   ██╗██╗  ██╗███████╗██████╗ ");
    case "clear": return print("B U N K E R   T E R M I N A L   v1.0");
    case "clear": return print("---------------------------------------------------");
    case "clear": return print("Welcome to BUNKER Terminal.");
    case "clear": return print("Type HELP to begin.");
    case "clear": return print("");
    case "version": return versionCommand();

    // AUDIO
    case "sound": return soundCommand(args);

    // EVENTS
    case "events": return eventsCommand(args);

    // QUESTS
    case "quest": return questCommand(args);

    // MEDIA
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
  print("events      → display event list");
  print("sets        → access audio archive");
  print("gallery     → view image archive");
  print("tickets     → ticket portal");
  print("contact     → communication endpoints");
  print("quest       → start missions");
  print("help        → display this manual");
  print("version     → system build info");
  print("clear       → wipe output");
  print("sound on/off → enable immersive system");
  print("");
  print("-----------------------------------------------------");
  print("CLASSIFIED SYSTEM FUNCTIONS:");
  print("[ ACCESS DENIED – INSUFFICIENT AUTHORIZATION ]");
  print("-----------------------------------------------------");
  print("");
  print("NOTE: Additional capabilities may exist.");
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
  print("Use external interface when deployed.");
}

// =============================
// TICKETS
// =============================
function ticketsCommand() {
  print("TICKET PORTAL:");
  print("https://yourdomain.com/tickets");
}

// =============================
// CONTACT
// =============================
function contactCommand() {
  print("CONTACT CHANNELS:");
  print("Email: teddy404.dj@gmail.com");
  print("Instagram: @teddy404.dj");
}

// =============================
// SETS
// =============================
function setsCommand() {
  print("AUDIO ARCHIVE:");
  print("External audio links will be displayed here later.");
}

// =============================
// QUEST COMMAND
// =============================
function questCommand(args) {
  if (!args[0]) return listQuests();

  const arg = args[0];
  if (arg === "random") return startRandomQuest();

  return runQuest(arg);
}