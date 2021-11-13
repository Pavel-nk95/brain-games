#!/usr/bin/env node

import { gameEngine as startGame, rules, generator } from '../games/brain-prime-game.js';

startGame(rules, generator);
