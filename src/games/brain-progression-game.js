import { launchGameEngine, getRandomInt } from '../index.js';

const title = 'What number is missing in the progression?';

const genSequenceNumbers = (startNum, step, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(startNum + i * step);
  }
  return result;
};

const createGameParams = () => {
  const hiddenStr = '..';
  const maxStep = 10;
  const maxLength = 10;
  const step = getRandomInt(1, maxStep);
  const startNum = getRandomInt();
  const progressionLength = maxLength || getRandomInt(5, 10);
  const progression = genSequenceNumbers(startNum, step, progressionLength);
  const randomHiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[randomHiddenIndex]);
  progression[randomHiddenIndex] = hiddenStr;
  const questionStr = progression.join(' ');
  return [questionStr, correctAnswer];
};

const startGame = () => {
  launchGameEngine(title, createGameParams);
};

export default startGame;
