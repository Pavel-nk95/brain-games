import gameEngine, { getRandomInt, getRandomOperator } from '../src/index.js';

const rules = ['What is the result of the expression?', 3];

const generator = () => {
  const randomIntOne = getRandomInt(1, 100);
  const randomIntTwo = getRandomInt(1, 100);
  const randomOperator = getRandomOperator();
  const questionStr = `${randomIntOne} ${randomOperator} ${randomIntTwo}`;
  let correctAnswer = null;
  switch (randomOperator) {
    case '+':
      correctAnswer = randomIntOne + randomIntTwo;
      break;
    case '-':
      correctAnswer = randomIntOne - randomIntTwo;
      break;
    case '*':
      correctAnswer = randomIntOne * randomIntTwo;
      break;
    default:
  }
  return [questionStr, String(correctAnswer)];
};

export { gameEngine, rules, generator };
