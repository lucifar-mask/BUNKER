# BUNKER TERMINAL — FULL SYSTEM BLUEPRINT (MOBILE-FRIENDLY)

This document contains the **complete architecture** of the BUNKER Terminal, including:
- file structure
- system behavior
- responsive/mobile plan
- command engine model
- quest engine model
- audio subsystem plan
- Google Sheets data capture API blueprint

Code files will follow after this blueprint.

---

## 1. FILE STRUCTURE
```
/bunker-terminal
│
├── index.html
├── style.css
│
├── js/
│   ├── main.js          ← boot, input, renderer
│   ├── commands.js      ← public commands
│   ├── secret.js        ← secret commands (require SOUND ON)
│   ├── quests.js        ← quests + handlers
│   ├── events.js        ← event archive
│   ├── audio.js         ← audio subsystem controller
│   ├── storage.js       ← localStorage saves
│   ├── utils.js         ← helpers
│
├── audio/
│   ├── access_granted.mp3
│   ├── access_denied.mp3
│   ├── glitch1.mp3
│   ├── glitch2.mp3
│   ├── hum_loop.mp3
│   ├── click.mp3
│   ├── shutdown.mp3
│   └── matrix_whirr.mp3
│
└── README.md
```

---

## 2. MOBILE-FRIENDLY DESIGN

### Requirements Achieved:
- Terminal resizes to any screen
- Input bar stays fixed at bottom
- When tapped, **mobile keyboard auto-opens**
- Font scales dynamically (vw-based)
- Output scrolls properly with touch
- Hidden overflow prevented

### Implementation:
- CSS uses `height: 100vh` with safe area insets
- Input field uses `input[type=text]` with `autofocus` + JS focus handling
- Touchstart event ensures keyboard opens

---

## 3. BOOT SEQUENCE

### Steps:
1. Password gate (wrong attempts allowed, no lockout)
2. On correct password → Boot animation
3. System Status panel
4. ASCII banner
5. `BUNKER:~$` prompt
6. SOUND OFF by default
7. Immersive commands locked

---

## 4. AUDIO SUBSYSTEM

Default: OFF

User must type:
```
sound on
```
After which:
- background hum starts
- immersive commands unlock
- glitch sounds enabled

If user tries immersive commands while sound is OFF:
```
IMMERSIVE MODULE DISABLED.
Audio subsystem is offline.
Use SOUND ON to unlock advanced interactions.
```

---

## 5. PUBLIC COMMANDS

```
events
sets
gallery
tickets
contact
quest
help
version
clear
sound on/off
```

---

## 6. SECRET COMMANDS (require SOUND ON)
```
matrix
glitch
scan
encrypt
decode
teddy
shutdown
init
```

---

## 7. QUEST SYSTEM (9 QUESTS)

Ranges:
- 3 Easy
- 3 Medium
- 3 Hard

Behavior:
- `quest` → list
- `quest <id>` → run
- `quest random` → random quest
- `hint` → optional hint
- After completion → ask email + Instagram
- Sends to Google Sheet (API defined later)
- Save completion progress in localStorage

---

## 8. EVENTS SYSTEM (real BUNKER events)

`events.js` contains:
```
const EVENTS = {
  "001": { name, date, location, status },
  "002": { ... },
  // to add new events:
  // "004": { name: "...", date: "...", location: "...", status: "upcoming" },
};
```

`events` → list
`events 001` → detail

---

## 9. GOOGLE SHEETS DATA CAPTURE

User enters:
- email
- Instagram
- quest ID
- timestamp

Sent via POST to Google Apps Script endpoint.

Sheet columns:
```
Email | Instagram | Quest | Timestamp
```

---

## 10. ERROR SYSTEM

Invalid command:
```
SYNTAX ERROR: Operation not found.
Consult HELP.
```

---

## 11. NEXT STEP

The next messages will include:
- Full index.html
- Full style.css
- All JS modules (main.js, commands.js, etc.)
- Google Apps Script code snippet
- README deployment instructions

This blueprint is now locked and approved.

