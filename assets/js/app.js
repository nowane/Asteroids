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


// Random word generation
function generateWord() {
    word = words[Math.floor(Math.random() * words.length)];
}

generateWord();