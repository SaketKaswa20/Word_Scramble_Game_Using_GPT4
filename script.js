const words = ['apple', 'banana', 'orange', 'grape'];
let currentWord = '';
let score = 0;

function shuffleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function startGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById('scrambled-word').innerText = shuffleWord(currentWord);
}

function checkAnswer() {
  const answer = document.getElementById('answer').value;
  if (answer === currentWord) {
    score++;
    document.getElementById('message').innerText = 'Congratulations!';
  } else {
    document.getElementById('message').innerText = 'Oops! Try Again.';
  }
  startGame();
}

function quitGame() {
  document.getElementById('game').classList.add('hidden');
  document.getElementById('score').classList.remove('hidden');
  document.getElementById('final-score').innerText = `Your score: ${score}`;
}

startGame();
