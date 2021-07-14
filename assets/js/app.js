// Test to see if letters show up
let words = [
    "monkey",
    "banana",
    "zoo",
    "chimp",
    "bokito",
];

// Declared variables
let word = '';
let maximumWrong = 9;
let wrongGuesses = 0;
let guessedLetters = [];
let currentWord = null;


// Random word generation
function generateWord() {
    word = words[Math.floor(Math.random() * words.length)];
}

function guessedWord() {
    currentWord = word.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('hiddenLetters').innerHTML = currentWord;
}

document.getElementById("maximumWrong").innerHTML = maximumWrong;

generateWord();
guessedWord();