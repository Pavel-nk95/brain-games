#!/usr/bin/env node

import { gameEngine as startGame, rules, generator } from '../games/brain-progression-game.js';

startGame(rules, generator);
