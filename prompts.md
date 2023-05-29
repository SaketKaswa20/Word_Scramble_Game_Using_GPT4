Prepare a web based Word Scramble game.  Provide me with the HTML, CSS and Javascript code. Design it with Tailwind CSS in dark mode. Add a quit game button. A submit button to give answer. Show a congratulations message if the answer is correct and Oops Try Again for wrong answer. When the user clicks the quit button display his score with a thank you message. Give one point for correct answer and 0 for wrong

Output:
As a software engineer, I can provide you with a basic structure for a web-based Word Scramble game using HTML, CSS, and JavaScript. I'll use Tailwind CSS for styling and include the requested features. Here's the code:

1. HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Word Scramble Game</title>
</head>
<body class="bg-gray-900 text-white">
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-4xl font-bold mb-6">Word Scramble Game</h1>
    <div id="game">
      <p id="scrambled-word" class="text-2xl mb-4"></p>
      <input id="answer" class="bg-gray-800 text-white px-4 py-2 rounded" type="text" placeholder="Your answer">
      <button id="submit" class="bg-blue-600 px-4 py-2 rounded ml-2" onclick="checkAnswer()">Submit</button>
      <button id="quit" class="bg-red-600 px-4 py-2 rounded ml-2" onclick="quitGame()">Quit</button>
      <p id="message" class="mt-4"></p>
    </div>
    <div id="score" class="hidden">
      <p id="final-score" class="text-2xl"></p>
      <p class="text-xl">Thank you for playing!</p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

2. JavaScript (script.js):
```javascript
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
```

This code provides a basic structure for the Word Scramble game. You can further customize the design and functionality as needed. Note that this is a simple example and may not cover all edge cases or provide the best user experience. You may want to add more features, such as a timer, more words, or better input validation.


































