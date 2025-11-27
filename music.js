// Strudel Music Example
// Run with: npm start

import { repl } from '@strudel/web';

console.log('🎵 Starting Strudel Music...\n');

// Set tempo
repl.evaluate('setCpm(170/4)');

// Your drum pattern from the image
const pattern = `
stack(
  s("bd:1").beat("0,7?,10", 16),
  s("sd:2").beat("4,12", 16)
).orbit(2)._scope()
`;

console.log('Playing pattern:');
console.log(pattern);
console.log('\n');

repl.evaluate(pattern);

// Keep the process running
console.log('Music is playing! Press Ctrl+C to stop.');
process.on('SIGINT', () => {
  console.log('\n\nStopping music...');
  process.exit(0);
});

