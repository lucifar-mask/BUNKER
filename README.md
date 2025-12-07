# BUNKER TERMINAL — README
A full standalone terminal-style website with quests, audio system, events, and Google Sheets integration.

This README explains:
- How to deploy the terminal
- How to connect Google Sheets
- How to add future events
- How to add/edit quests
- How to add secret commands
- How to customize branding & domain
- How to ensure mobile friendliness

---

# 1. 📁 FILE STRUCTURE
```
/bunker-terminal
│
├── index.html
├── style.css
│
├── js/
│   ├── main.js
│   ├── commands.js
│   ├── secret.js
│   ├── quests.js
│   ├── events.js
│   ├── audio.js
│   ├── storage.js
│   ├── utils.js
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

# 2. 🚀 DEPLOYMENT INSTRUCTIONS
The terminal is a **static website**. You can host it anywhere:

### **Fastest options:**
#### **GitHub Pages**
1. Create a GitHub repo
2. Upload all files
3. Go to repo → Settings → Pages
4. Select **root** → deploy
5. Your terminal is live.

#### **Vercel**
1. Create an account
2. Import the repo
3. Click Deploy
4. Done.

#### **Netlify**
Same as Vercel.

#### **Your own domain**
Just upload files to any hosting provider.


---

# 3. 📱 MOBILE FRIENDLINESS
Already implemented:
- Terminal scales to any screen
- Input stays fixed at bottom
- Touch events auto-focus input
- CSS uses viewport-safe height

You don’t need to do anything.

---

# 4. 📡 GOOGLE SHEETS INTEGRATION
Quests send:
- email
- Instagram
- quest ID
- timestamp (already included by browser)

### STEP 1 — Create a Google Sheet
Columns:
```
Email | Instagram | Quest | Timestamp
```

### STEP 2 — Create an Apps Script
In Google Sheets:
- Extensions → Apps Script → New Script

Paste this:
```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.email || '',
    data.ig || '',
    data.quest || '',
    new Date()
  ]);

  return ContentService.createTextOutput("OK");
}
```

### STEP 3 — Deploy as Web App
- Deploy → New Deployment
- Select **Web App**
- Allow Anyone to access
- Copy the URL

### STEP 4 — Paste URL into `quests.js`:
```
fetch("YOUR_WEB_APP_URL", {
```

Done.

---

# 5. ⚙️ ADDING FUTURE EVENTS
Open **events.js** and scroll to the template:
```
// "004": {
//   name: "YOUR EVENT NAME",
//   date: "XX.XX.20XX",
//   location: "CITY / VENUE",
//   status: "upcoming" or "completed",
//   notes: "Optional description or lore."
// },
```
Add it above the comment block.

The events list + detail views update automatically.

---

# 6. 🎮 EDITING OR ADDING QUESTS
Quests live in **quests.js**.

Each quest has:
- ID (`E1`, `M3`, etc.)
- `name`
- `difficulty`
- `start` function
- handler function (e.g., `handleE1`)

To add a new quest:
1. Add ID to the `QUESTS` object
2. Create `startX` function
3. Create `handleX` function
4. Add logic to `main.js` in the routing if needed

Quests support:
- hints
- puzzles
- sequences
- multi‑step logic
- data collection after completion

---

# 7. 🔐 SECRET COMMANDS
Secret commands live in **secret.js**.

To add one:
1. Add a case in `runSecretCommand()`
2. Write the function below

Secret commands only run when **audioEnabled() == true**.

---

# 8. 🎵 AUDIO SYSTEM
- Audio loads on page start
- Disabled by default
- Needs: `sound on`
- Unlocks immersive commands

Add new audio files to `/audio` and register them in `SOUND_FILES`.

---

# 9. 🎨 BRANDING & STYLE
Edit:
- **style.css** for fonts + colors
- ASCII banner in **main.js** under `bootSequence()`
- Tickets/contact URLs in **commands.js**

---

# 10. 🔥 OPTIONAL: ENABLE PASSWORD GATE
In **main.js**, at the top of `window.onload`, replace:
```js
bootSequence();
```
with:
```js
passwordGate().then(() => bootSequence());
```

Password is currently:
```
xxxxbunker091025xxxx
```

---

# 11. 🧪 TESTING
Check on:
- Desktop Chrome
- iPhone Safari
- Android Chrome

Mobile keyboard must open automatically — already handled in `main.js`.

---

# 12. 🧩 FUTURE EXPANSION IDEAS
- Animated glitch splash screen
- More quests with multi-step logic
- Direct DM integration
- Terminal themes
- Real-time event countdown

---

# ✔ DONE
Enjoy your full cyberpunk BUNKER Terminal.

You can now customize, expand, and build your underground world however you want.

