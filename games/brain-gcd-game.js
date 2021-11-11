import gameEngine, { getRandomInt } from '../src/index.js';

const rules = ['Find the greatest common divisor of given numbers.', 3];

const getGcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  return num1 > num2 ? getGcd(num1 - num2, num2) : getGcd(num1, num2 - num1);
};

const generator = () => {
  const randomIntOne = getRandomInt(1, 100);
  const randomIntTwo = getRandomInt(1, 100);
  const questionStr = `${randomIntOne} ${randomIntTwo}`;
  const correctAnswer = String(getGcd(randomIntOne, randomIntTwo));
  return [questionStr, correctAnswer];
};

export { gameEngine, rules, generator };
