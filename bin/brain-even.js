#!/usr/bin/env node
import getName from '../src/cli.js';
import parityCheck from '../src/brain-even-game.js';

console.log('Welcome to the Brain Games!');
const name = getName();
parityCheck(3, name);
