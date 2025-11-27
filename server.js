// Simple web server for Strudel
// Run with: npm run server
// Then open: http://localhost:3000

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎵 Strudel server running at http://localhost:${PORT}`);
  console.log('Open your browser to start making music!');
});

