import { launchGameEngine, getRandomInt } from '../index.js';

const title = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
};

const createGameParams = () => {
  const randomIntOne = getRandomInt();
  const randomIntTwo = getRandomInt();
  const randomOperator = getRandomOperator();
  const question = `${randomIntOne} ${randomOperator} ${randomIntTwo}`;
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
  return [question, String(correctAnswer)];
};

const startGame = () => {
  launchGameEngine(title, createGameParams);
};

export default startGame;
