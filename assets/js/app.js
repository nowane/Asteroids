// Test to see if letters show up
let words = [
    "monkey",
    "banana",
    "zoo",
    "chimp",
    "bokito",
];

// Declared variables
let hiddenWord = "";
let maximumWrong = 9;
let wrongGuesses = 0;
let guessedLetters = [];
let currentWord = null;


// Random word generation out of words array
function generateWord() {
    hiddenWord = words[Math.floor(Math.random() * words.length)];
}

// Handle chosen letter input 
function handleGuess(letterChosen) {
        // If chosen letter doesn't excist - push letter into array
        guessedLetters.indexOf(letterChosen) === -1 ? guessedLetters.push(letterChosen) : null;
        // Disable buttons after they have been chosen
    document.getElementById(letterChosen).setAttribute("disabled", true);

    alert(hiddenWord);

      // If chosen letter excists - update letters
    if (hiddenWord.indexOf(letterChosen) >= 0) {
      guessedWord();
    }
}

// Display hidden word on screen 
function guessedWord() {
    // map() creates new array in hiddenWord populated with the results of calling currentWord
    currentWord = hiddenWord.split("").map(letter =>
        // Check if letter excists in array - if positive, points to position
        (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join("");

    // Display the hidden letters of the generated word as undercores on screen
    document.getElementById("hiddenLetters").innerHTML = currentWord;
}

// Display maximum allowed wrong guesses
document.getElementById("maximumWrong").innerHTML = maximumWrong;

generateWord();
guessedWord();