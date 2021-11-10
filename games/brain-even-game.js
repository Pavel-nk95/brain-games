import gameEngine, { getRandomInt } from '../src/index.js';

const rules = ['Answer "yes" if the number is even, otherwise answer "no".', 3];

const generator = () => {
  const randomInt = getRandomInt(1, 99);
  const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return [randomInt, correctAnswer];
};

export { gameEngine, rules, generator };
