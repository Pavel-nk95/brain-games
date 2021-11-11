#!/usr/bin/env node
import { gameEngine as startGame, rules, generator } from '../games/brain-gcd-game.js';

startGame(rules, generator);
