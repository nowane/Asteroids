// Create keyboard buttons on screen
function generateButtons() {
  var buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
    `
        <button
          class="btn-keyboard"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join("");

  document.getElementById("generateKeyboard").innerHTML = buttonsHTML;
};
