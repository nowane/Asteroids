// Test to see if letters show up
let words = [
    "monkey",
    "banana",
    "zoo",
    "chimp",
    "bokito",
];

// Declared variables
let hiddenWord = '';
let maximumWrong = 9;
let wrongGuesses = 0;
let guessedLetters = [];
let currentWord = null;


// Random word generation out of words array
function generateWord() {
    hiddenWord = words[Math.floor(Math.random() * words.length)];
}

// Display hidden word on screen 
function guessedWord() {
    // map() creates new array in hiddenWord populated with the results of calling currentWord
    currentWord = hiddenWord.split('').map(letter =>
        // Check if letter excists in array - if positive, points to position
        (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    // Display the hidden letters of the generated word as undercores in screen
    document.getElementById('hiddenLetters').innerHTML = currentWord;
}

// Display maximum allowed wrong guesses
document.getElementById("maximumWrong").innerHTML = maximumWrong;

generateWord();
guessedWord();