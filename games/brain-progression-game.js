import gameEngine, { getRandomInt } from '../src/index.js';

const rules = ['What number is missing in the progression?', 3];

const getRandomLength = (value = 10) => {
  if (value === 10) return 10;
  return getRandomInt(5, value);
};

const generator = () => {
  const maxStep = 10;
  const stepProgression = getRandomInt(1, maxStep);
  const startingNum = getRandomInt();
  const progressionLength = getRandomLength();
  const progression = [startingNum];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[progression.length - 1] + stepProgression);
  }
  const randomHiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[randomHiddenIndex]);
  progression[randomHiddenIndex] = '..';
  const questionStr = progression.join(' ');
  return [questionStr, correctAnswer];
};

export { gameEngine, rules, generator };
