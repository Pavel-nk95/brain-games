import { launchGameEngine, getRandomInt, rounds } from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const createGameParams = () => {
  const randomInt = getRandomInt();
  const correctAnswer = randomInt % 2 === 0 ? 'yes' : 'no';
  return [randomInt, correctAnswer];
};

const startGame = () => {
  launchGameEngine(title, createGameParams, rounds);
};

export default startGame;
