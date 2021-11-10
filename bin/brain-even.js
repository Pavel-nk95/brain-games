#!/usr/bin/env node
import { gameEngine as startGame, rules, generator } from '../games/brain-even-game.js';

startGame(rules, generator);
