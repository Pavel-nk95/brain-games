import { launchGameEngine, getRandomInt, rounds } from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  return num1 > num2 ? getGcd(num1 - num2, num2) : getGcd(num1, num2 - num1);
};

const createGameParams = () => {
  const randomIntOne = getRandomInt();
  const randomIntTwo = getRandomInt();
  const questionStr = `${randomIntOne} ${randomIntTwo}`;
  const correctAnswer = String(getGcd(randomIntOne, randomIntTwo));
  return [questionStr, correctAnswer];
};

const startGame = () => {
  launchGameEngine(title, createGameParams, rounds);
};

export default startGame;
