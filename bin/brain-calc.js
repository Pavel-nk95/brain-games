#!/usr/bin/env node
import { gameEngine as startGame, rules, generator } from '../games/brain-calc-game.js';

startGame(rules, generator);
