import gameEngine, { getRandomInt } from '../src/index.js';

const rules = ['Answer "yes" if given number is prime. Otherwise answer "no".', 3];

const isPrimeNumber = (num) => {
  if (num === 1) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generator = () => {
  const randomInt = getRandomInt(1, 100);
  const correctAnswer = isPrimeNumber(randomInt);
  return [randomInt, correctAnswer];
};

export { gameEngine, rules, generator };
