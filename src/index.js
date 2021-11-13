import readlineSync from 'readline-sync';

const getRandomInt = (minNum = 1, maxNum = 100) => Math.floor(Math.random() * (maxNum - minNum + 1))
 + minNum;

export { getRandomInt };

export default (rules, generator) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const [startMessage, steps] = rules;
  console.log(startMessage);
  for (let i = 1; i <= steps; i += 1) {
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
