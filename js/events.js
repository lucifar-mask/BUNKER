// =============================
// BUNKER TERMINAL — events.js
// Real event archive (expandable)
// =============================

// NOTE TO STEVIE:
// Add future events using the template at the bottom.

const EVENTS = {
    "001": {
      name: "EUPHORIA RAVE",
      date: "09.10.2025",
      location: "Tel Aviv",
      status: "completed",
      notes: "High-intensity node activation. System records show elevated signal spikes."
    },
  
    "002": {
      name: "UNDERCORE TRANSMISSION",
      date: "TBD",
      location: "TBD",
      status: "upcoming",
      notes: "Operational frequency not yet stabilized. Awaiting authorization."
    },
  
    "003": {
      name: "VOIDSTREAM ACCESS",
      date: "TBD",
      location: "TBD",
      status: "upcoming",
      notes: "Projected to open deeper network layers."
    }
  
    // ------------------------------------------------------
    // TO ADD A NEW EVENT:
    // Copy + paste the block below and edit values.
    //
    // "004": {
    //   name: "YOUR EVENT NAME",
    //   date: "XX.XX.20XX",
    //   location: "CITY / VENUE",
    //   status: "upcoming" or "completed",
    //   notes: "Optional description or lore."
    // },
    // ------------------------------------------------------
  };
  
  
  // List all events
  function listEvents() {
    print("=========================================");
    print("   BUNKER OPERATIONS – EVENT ARCHIVE");
    print("=========================================");
    print("");
  
    print("PAST OPERATIONS:");
    for (const id in EVENTS) {
      if (EVENTS[id].status === "completed") {
        print(`- BUNKER ${id} – "${EVENTS[id].name}" – ${EVENTS[id].date} – ${EVENTS[id].location}`);
      }
    }
    print("");
  
    print("UPCOMING OPERATIONS:");
    for (const id in EVENTS) {
      if (EVENTS[id].status === "upcoming") {
        print(`- BUNKER ${id} – "${EVENTS[id].name}" – ${EVENTS[id].date}`);
      }
    }
  
    print("");
    print("Use: events <id> for details.");
    print("Example: events 001");
    print("");
  }
  
  // Show single event
  function showEventDetails(id) {
    if (!EVENTS[id]) {
      print("No event with this ID.");
      return;
    }
  
    const E = EVENTS[id];
  
    print("=========================================");
    print(`BUNKER ${id} – ${E.name}`);
    print("=========================================");
    print(`DATE: ${E.date}`);
    print(`LOCATION: ${E.location}`);
    print(`STATUS: ${E.status.toUpperCase()}`);
    print("");
    print("NOTES:");
    print(E.notes || "No additional data.");
    print("");
  }