# Quick Start: Terminal Music Coding

## 🚀 Fastest Way to Get Started

### Option 1: Web Interface (Easiest - Recommended)

```bash
cd /Users/yoshikondo/InvoiceApp/strudel-music
npm install
npm run server
```

Then open: **http://localhost:3000**

You'll see a web page where you can:
- Type your music code
- Click "Play" to hear it
- Click "Load Example" for a quick start

### Option 2: Use Official Strudel REPL Online

Just open in your browser:
**https://strudel.tidalcycles.org/**

This is the easiest way - no installation needed!

### Option 3: Create Your Own Strudel App

```bash
# Create a new Strudel project
npx degit strudel-science/strudel-kit my-music-app
cd my-music-app
npm install
npm start
```

Then open: **http://localhost:5175**

## 📝 Try These Patterns

Copy and paste into the Strudel REPL or web interface:

### Simple Beat
```
s("bd sd bd sd")
```

### Your Pattern (from the image)
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

### Layered Pattern
```
stack(
  s("bd").beat("0,8", 16),
  s("sd").beat("4,12", 16),
  note("c3 e3 g3").slow(2)
)
```

## 🎯 Recommended: Start with Online REPL

1. Go to: https://strudel.tidalcycles.org/
2. Type: `s("bd sd bd sd")`
3. Press Enter
4. Music plays! 🎵

No installation, no setup - just start coding music!

