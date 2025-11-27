// Interactive Strudel REPL
// Run with: npm run repl

import { repl } from '@strudel/web';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'strudel> '
});

console.log('🎵 Strudel REPL - Interactive Music Coding');
console.log('Type your patterns and press Enter');
console.log('Examples:');
console.log('  s("bd sd bd sd")');
console.log('  stack(s("bd"), s("sd"))');
console.log('  note("c3 e3 g3")');
console.log('Type "exit" or "quit" to stop\n');

rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  
  if (input === 'exit' || input === 'quit') {
    console.log('\n👋 Goodbye!');
    rl.close();
    return;
  }
  
  if (input === 'help') {
    console.log('\nCommands:');
    console.log('  s("bd sd") - Play drum pattern');
    console.log('  note("c3 e3") - Play melody');
    console.log('  stack(...) - Layer patterns');
    console.log('  setCpm(140) - Set tempo');
    console.log('  exit - Quit\n');
    rl.prompt();
    return;
  }
  
  if (input) {
    try {
      repl.evaluate(input);
      console.log('✓ Pattern loaded\n');
    } catch (error) {
      console.error('✗ Error:', error.message);
      console.log('Type "help" for examples\n');
    }
  }
  
  rl.prompt();
});

rl.on('close', () => {
  console.log('\nStopping...');
  process.exit(0);
});

