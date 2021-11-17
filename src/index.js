import readlineSync from 'readline-sync';

const getRandomInt = (minNum = 1, maxNum = 100) => {
  const randomInt = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randomInt;
};

const gameEngine = (title, generator, rounds = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(title);
  for (let i = 1; i <= rounds; i += 1) {
    const [question, correctAnswer] = generator();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { gameEngine, getRandomInt };
