import { gameEngine, getRandomInt } from '../index.js';

const title = 'What number is missing in the progression?';

const generator = () => {
  const hiddenStr = '..';
  const maxStep = 10;
  const maxLength = 10;
  const step = getRandomInt(1, maxStep);
  const startingNum = getRandomInt();
  const progressionLength = maxLength || getRandomInt(5, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startingNum + i * step);
  }
  const randomHiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[randomHiddenIndex]);
  progression[randomHiddenIndex] = hiddenStr;
  const questionStr = progression.join(' ');
  return [questionStr, correctAnswer];
};

const startGame = () => {
  gameEngine(title, generator);
};

export default startGame;
