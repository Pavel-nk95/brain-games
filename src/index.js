import launchGameEngine from './gameEngine.js';

const rounds = 3;

const getRandomInt = (minNum = 1, maxNum = 100) => {
  const randomInt = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randomInt;
};

export { launchGameEngine, getRandomInt, rounds };
