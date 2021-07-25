// Create keyboard buttons on screen by splitting the array of letter into individual letters
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
};
