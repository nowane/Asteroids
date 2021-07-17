// Create keyboard buttons on screen
function generateButtons() {
  var buttonsTopRowHTML = "qwertyuiop".split("").map(letter =>
    `
        <button
          class="btn-general"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join("");

  var buttonsMiddleRowHTML = "asdfghjkl".split("").map(letter =>
    `
          <button
            class="btn-general"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
          >
            ` + letter + `
          </button>
        `).join("");

  var buttonsBottomRowHTML = "zxcvbnm".split("").map(letter =>
    `
              <button
                class="btn-general"
                id='` + letter + `'
                onClick="handleGuess('` + letter + `')"
              >
                ` + letter + `
              </button>
            `).join("");

  document.getElementById("generateTopRow").innerHTML = buttonsTopRowHTML;
  document.getElementById("generateMiddleRow").innerHTML = buttonsMiddleRowHTML;
  document.getElementById("generateBottomRow").innerHTML = buttonsBottomRowHTML;
}

generateButtons();