// Test to see if letters show up  --  TO BE REPLACED
let words = [
    "monkey", "banana", "chimp", "tree", "zoo",
]

//  Declared variables for HTML elements on the page to manipulate later
let hiddenWord = ""; // Current word - to be generated  
let currentWord = null; // Generated word - being split into individual letters
let wrongGuesses = 0; // Wrong guesses
let maximumWrong = 10; // Max wrong guesses
let guessedLetters = []; // User input - guessed letters

// Variables for keeping score
let win = 0;
let lost = 0;

const figureParts = document.querySelectorAll('.figure-part');

// Display maximum allowed wrong guesses
document.getElementById("maximumWrong").innerHTML = maximumWrong;

document.getElementById("guess-the-name").innerHTML = "Can you guess the word?";

function generateWord() {
    hiddenWord = words[Math.floor(Math.random() * words.length)];
};

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
        drawFigure();
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
};

// Update wrong guesses on screen
function updateWrongGuesses() {
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
};

function drawFigure() {
    //  Loops through figureParts and displays one piece per incorrect answer
    figureParts.forEach((part, index) => {
        const mistakes = guessedLetters.length;
        if (index < mistakes) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })
};

// Check if game was won
function checkWin() {
    // If letter input is equal to the hidden letters - you win
    if (currentWord === hiddenWord) {
        // Message shown when won
        document.getElementById("final-message").innerHTML = "You Win!";

        // Add +1 to win
        win = win + 1;
        // Update html
        document.getElementById("win").innerHTML = win;

        document.getElementById("guess-the-name").innerHTML = "";

        // Remove keyboard after win
        document.getElementById("generateTopRow").innerHTML = "";
        document.getElementById("generateMiddleRow").innerHTML = "";
        document.getElementById("generateBottomRow").innerHTML = "";
    }
};

// Check if game was lost
function checkLost() {
    // If wrong letter input is equal to maximum allowed wrong amount of letters - you lose
    if (wrongGuesses === maximumWrong) {

        // Message shown when lost
        document.getElementById("final-message").innerHTML = "You Lose!";
        // Answer shown when lose
        document.getElementById("hiddenLetters").innerHTML = "The answer was " + hiddenWord;

        // Add +1 to lost
        lost = lost + 1;
        // Update html
        document.getElementById("lost").innerHTML = lost;

        document.getElementById("guess-the-name").innerHTML = "";

        // Remove keyboard after loss
        document.getElementById("generateTopRow").innerHTML = "";
        document.getElementById("generateMiddleRow").innerHTML = "";
        document.getElementById("generateBottomRow").innerHTML = "";
    }
};

// Play again - reset data
function rePlay() {
    wrongGuesses = 0; // Reset wrong guesses
    guessedLetters = []; // Reset guessed letters

    document.getElementById("final-message").innerHTML = ""; // Clear You Win/Lose text
    document.getElementById("guess-the-name").innerHTML = "Can you guess the word?";

    updateWrongGuesses(); // Update wrong guesses on screen to starting value
    generateWord(); // Generate new random word

    document.getElementById("hiddenLetters").innerHTML = ""; // Clear old onderscores
    guessedWord(); // Display hidden word on screen to starting value
    drawFigure();
    generateButtons();
};


drawFigure();
generateButtons();
generateWord();
guessedWord();