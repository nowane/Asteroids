//  jshint esversion: 6
//  Declared variables for HTML elements on the page to manipulate later
let hiddenWord = ""; // Current word - to for generating the word
let currentWord = null; // The generated word - split into individual letters
let wrongGuesses = 0; // Wrong guesses
let maximumWrong = 10; // Max wrong guesses
let guessedLetters = []; // User input -> guessed letters

// Variables for keeping score
let win = 0;
let lost = 0;

// HTML figure parts
const figureParts = document.querySelectorAll(".figure-part");

// Adds keyboard to page when DOM content is loaded
// Disables keyboard before game is started.
window.addEventListener("DOMContentLoaded", (event) => {
    var buttonsHTML = "abcdefghijklmnopqrstuvwxyz" // Create buttons
      .split("")
      .map(
        (letter) =>
          `
              <button
                class="btn-keyboard"
                disabled
                id='` +
          letter +
          `'
                onClick="handleGuess('` +
          letter +
          `')"
              >
                ` +
          letter +
          `
              </button>
            `
      )
      .join("");
      document.getElementById("generateKeyboard").innerHTML = buttonsHTML;
  });
 
// Display maximum allowed wrong guesses
// Display "Can you guess the word?" - text in hidden letter section
document.getElementById("maximumWrong").innerHTML = maximumWrong;
document.getElementById("guess-the-name").innerHTML = "Can you guess the word?";

// Generate random word
function generateWord() {
    hiddenWord = words[Math.floor(Math.random() * words.length)];
}

// Handle chosen letter input
// If chosen letter doesn't excist - push letter into array
// Disable buttons after they have been chosen
function handleGuess(letterChosen) {
    guessedLetters.indexOf(letterChosen) === -1  ?
        guessedLetters.push(letterChosen) : null ;
    document.getElementById(letterChosen).setAttribute("disabled", true);

    // If chosen letter excists
    // Update letters and check for win
    if (hiddenWord.indexOf(letterChosen) >= 0) {
        guessedWord();
        checkWin();

        // if chosen letter does not excist
        // Add +1 to wrong guesses
        // Update number of wrong guesses
        // Check if game is lost
        // Draw hangman figure
    } else if (hiddenWord.indexOf(letterChosen) === -1) {
        wrongGuesses++;
        updateWrongGuesses();
        checkLost();
        drawFigure();
    }
}

// Display hidden word on screen
// map() creates new array populated with results of calling currentWord
// Check if letter excists in array - if positive, points to position
function guessedWord() {
    currentWord = hiddenWord.split("").map(letter =>
        (guessedLetters.indexOf(letter) >= 0 ) ? letter : " _ ").join("");

    // Display the hidden letters of the generated word as undercores on screen
    document.getElementById("hiddenLetters").innerHTML = currentWord;
}

// Update wrong guesses on screen
function updateWrongGuesses() {
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
}

// Draw hangman figure
// Loops through figureParts and displays one piece per incorrect answer
// If amount of looped through parts is < than amount of wrong guesses
// Add a part of figure
// Otherwise do not
function drawFigure() {
    figureParts.forEach((part, index) => {
        if (index < wrongGuesses) {
            part.style.display = "block";
        } else {
            part.style.display = "none";
        }
    });
}

// Check if game was won
// If letter input is equal to the hidden letters - you win
function checkWin() {
    if (currentWord === hiddenWord) {
        // Message shown when won
        // Add +1 to win
        // Update html
        // Display "Can you guess the word?" - text in hidden letter section
        document.getElementById("final-message").innerHTML = "You Win!";
        win = win + 1;
        document.getElementById("win").innerHTML = win;
        document.getElementById("guess-the-name").innerHTML = "";

        // Remove keyboard after win
        document.getElementById("generateKeyboard").innerHTML = "";
    }
}

// Check if game was lost
// If wrong letters === to max wrong letters - you lose
function checkLost() {
    if (wrongGuesses === maximumWrong) {

        // Message shown when lost
        // Answer shown when lose
        document.getElementById("final-message").innerHTML =
            "You Lose!";
        document.getElementById("hiddenLetters").innerHTML =
            "The answer was " + hiddenWord;

        // Add +1 to lost
        // Update html
        // Display "Can you guess the word?" - text in hidden letter section
        lost = lost + 1;
        document.getElementById("lost").innerHTML = lost;
        document.getElementById("guess-the-name").innerHTML = "";

        // Remove keyboard after loss
        document.getElementById("generateKeyboard").innerHTML = "";
    }
}

// Play or reset game
function playGame() {
    // Reset wrong guesses
    // Reset guessed letters
    wrongGuesses = 0;
    guessedLetters = [];

    // Clear You Win/Lose text
    // Display "Can you guess the word?" - text in hidden letter section
    document.getElementById("final-message").innerHTML = "";
    document.getElementById("guess-the-name").innerHTML =
        "Can you guess the word?";

    // Update wrong guesses on screen to starting value
    // Generate new random word
    updateWrongGuesses();
    generateWord();

    // Clear old onderscores
    // Display hidden word on screen to starting value
    document.getElementById("hiddenLetters").innerHTML = "";
    guessedWord();

    // Clears hangman figure
    // Generate Keyboard when "Play Game!"is pressed
    drawFigure();
    generateButtons();
}

// Generate word to be displayed
generateWord();