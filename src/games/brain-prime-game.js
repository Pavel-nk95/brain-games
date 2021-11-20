import { launchGameEngine, getRandomInt, rounds } from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num === 1) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const createGameParams = () => {
  const randomInt = getRandomInt();
  const correctAnswer = isPrimeNumber(randomInt);
  return [randomInt, correctAnswer];
};

const startGame = () => {
  launchGameEngine(title, createGameParams, rounds);
};

export default startGame;
