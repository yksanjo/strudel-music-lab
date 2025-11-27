# Terminal Commands - Copy & Paste

## 🎯 Quick Start (3 Options)

### Option 1: Local Web Server (Recommended)

```bash
# Step 1: Go to the project
cd /Users/yoshikondo/InvoiceApp/strudel-music

# Step 2: Install dependencies
npm install

# Step 3: Start server
npm run server
```

Then open: **http://localhost:3000** in your browser

---

### Option 2: Official Online REPL (No Installation!)

Just open this in your browser:
```
https://strudel.tidalcycles.org/
```

Type: `s("bd sd bd sd")` and press Enter!

---

### Option 3: Create Full Strudel App

```bash
# Create new project
npx degit strudel-science/strudel-kit my-music-app
cd my-music-app
npm install
npm start
```

Then open: **http://localhost:5175**

---

## 🎵 Try These Patterns

Copy these into the Strudel interface:

### Basic Beat
```
s("bd sd bd sd")
```

### Your Pattern (from image)
```
setCpm(170/4)
stack(
  s("bd:1").beat("0,7?,10", 16),
  s("sd:2").beat("4,12", 16)
).orbit(2)._scope()
```

### Melody
```
note("c3 e3 g3 c4")
```

### Complex Pattern
```
stack(
  s("bd").beat("0,8", 16),
  s("sd").beat("4,12", 16),
  note("c3 e3 g3").slow(2)
)
```

---

## 📋 All Available Commands

| Command | What it does |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run server` | Start web server (port 3000) |
| `npm start` | Run music.js file |
| `npm run repl` | Start interactive REPL |

---

## 🆘 Troubleshooting

### Port already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Need to reinstall?
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 Pro Tips

1. **Start simple**: Try `s("bd sd")` first
2. **Use the online REPL**: Easiest way to experiment
3. **Check browser console**: For error messages
4. **Experiment**: Try different patterns and see what happens!

---

**Ready? Run this now:**

```bash
cd /Users/yoshikondo/InvoiceApp/strudel-music && npm install && npm run server
```

Then open http://localhost:3000 🎵

