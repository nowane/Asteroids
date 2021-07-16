// Test to see if letters show up
let words = [
    "monkey", "banana", "chimp", "tree", "zoo", 
]

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

    // If chosen letter excists 
    if (hiddenWord.indexOf(letterChosen) >= 0) {
        // Update letters
        guessedWord();
        checkWin();
        // if chosen letter does not excist
    } else if (hiddenWord.indexOf(letterChosen) === -1) {
        // Add +1 to wrong guesses
        wrongGuesses++;
        // Function to update the number of wrong guesses
        updateWrongGuesses();

        checkLost();
    }
}

// Check if game was won
function checkWin() {
    // If letter input is equal to the hidden letters - you win
    if (currentWord === hiddenWord) {
        document.getElementById("keyboard").innerHTML = "You Win!"
    }
};

// Check if game was lost
function checkLost() {
    // If wrong letter input is equal to maximum allowed wrong amount of letters - you lose
        if (wrongGuesses === maximumWrong) {
            document.getElementById("keyboard").innerHTML = "You Lose!"
        }
    };

// Display hidden word on screen 
function guessedWord() {
    // map() creates new array in hiddenWord populated with the results of calling currentWord
    currentWord = hiddenWord.split("").map(letter =>
        // Check if letter excists in array - if positive, points to position
        (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join("");

    // Display the hidden letters of the generated word as undercores on screen
    document.getElementById("hiddenLetters").innerHTML = currentWord;
}

// Update wrong guesses on screen
function updateWrongGuesses() {
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
}




// Display maximum allowed wrong guesses
document.getElementById("maximumWrong").innerHTML = maximumWrong;

generateWord();
guessedWord();