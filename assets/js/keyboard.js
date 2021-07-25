// jshint esversion: 6
// Create keyboard buttons by splitting array into individual letter
function generateButtons() {
  var buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
    `
        <button
          class="btn-keyboard disabled"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join("");

// Grab keyboard-container id and insert HTML
  document.getElementById("generateKeyboard").innerHTML = buttonsHTML;
}
