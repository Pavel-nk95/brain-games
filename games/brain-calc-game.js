import gameEngine, { getRandomInt } from '../src/index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
};

const rules = ['What is the result of the expression?', 3];

const generator = () => {
  const randomIntOne = getRandomInt();
  const randomIntTwo = getRandomInt();
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
