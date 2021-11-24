import { launchGameEngine, getRandomInt } from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createGameParams = () => {
  const randomInt = getRandomInt();
  const correctAnswer = isPrimeNumber(randomInt) ? 'yes' : 'no';
  return [randomInt, correctAnswer];
};

const startGame = () => {
  launchGameEngine(title, createGameParams);
};

export default startGame;
