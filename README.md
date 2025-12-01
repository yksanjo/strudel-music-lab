# Strudel Music Terminal Guide

[![GitHub stars](https://img.shields.io/github/stars/yksanjo/strudel-music-lab?style=social)](https://github.com/yksanjo/strudel-music-lab/stargazers) [![GitHub forks](https://img.shields.io/github/forks/yksanjo/strudel-music-lab.svg)](https://github.com/yksanjo/strudel-music-lab/network/members) [![GitHub issues](https://img.shields.io/github/issues/yksanjo/strudel-music-lab.svg)](https://github.com/yksanjo/strudel-music-lab/issues) [![Last commit](https://img.shields.io/github/last-commit/yksanjo/strudel-music-lab.svg)](https://github.com/yksanjo/strudel-music-lab/commits/main)


This project lets you create music with code using Strudel in your terminal.

## Quick Start

### 1. Install Dependencies

```bash
cd strudel-music
npm install
```

### 2. Run Music

**Option A: Run a music file**
```bash
npm start
```

**Option B: Interactive REPL**
```bash
npm run repl
```

Then type patterns like:
```
s("bd sd bd sd")
stack(s("bd"), s("sd"))
note("c3 e3 g3")
```

**Option C: Web Interface**
```bash
npm run server
```

Then open http://localhost:3000 in your browser.

## Usage Examples

### In REPL Mode

```bash
npm run repl
```

Then try:
- `s("bd sd bd sd")` - Simple drum pattern
- `note("c3 e3 g3 c4")` - Melody
- `stack(s("bd"), s("sd"))` - Layered patterns
- `setCpm(140)` - Set tempo
- `help` - Show help
- `exit` - Quit

### In Code Mode

Edit `music.js` and run:
```bash
npm start
```

## File Structure

- `music.js` - Example music file
- `repl.js` - Interactive REPL
- `server.js` - Web server
- `index.html` - Web interface

## Tips

1. Start simple with `s("bd sd")`
2. Use `stack()` to layer sounds
3. Experiment with `.beat()` for timing
4. Add effects like `.lpf(400)` or `.room(0.5)`

## Resources

- Strudel Docs: https://strudel.tidalcycles.org/learn/
- Examples: See `strudel-examples.js` in parent directory

Happy coding! 🎵

