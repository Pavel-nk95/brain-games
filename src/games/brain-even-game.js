import { gameEngine, getRandomInt } from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const generator = () => {
  const randomInt = getRandomInt();
  const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return [randomInt, correctAnswer];
};

const startGame = () => {
  gameEngine(title, generator);
};

export default startGame;
