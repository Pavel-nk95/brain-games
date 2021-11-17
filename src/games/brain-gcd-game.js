import { gameEngine, getRandomInt } from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  return num1 > num2 ? getGcd(num1 - num2, num2) : getGcd(num1, num2 - num1);
};

const generator = () => {
  const randomIntOne = getRandomInt();
  const randomIntTwo = getRandomInt();
  const questionStr = `${randomIntOne} ${randomIntTwo}`;
  const correctAnswer = String(getGcd(randomIntOne, randomIntTwo));
  return [questionStr, correctAnswer];
};

const startGame = () => {
  gameEngine(title, generator);
};

export default startGame;
