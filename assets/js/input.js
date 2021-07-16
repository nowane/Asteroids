// Create keyboard buttons on screen
function generateButtons() {
    let buttonsTopRowHTML = "qwertyuiop".split("").map(letter =>
      `
        <button
          class="btn-general"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join(""); 

      let buttonsMiddleRowHTML = "asdfghjkl".split("").map(letter =>
        `
          <button
            class="btn-general"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
          >
            ` + letter + `
          </button>
        `).join(""); 

        let buttonsBottomRowHTML = "zxcvbnm".split("").map(letter =>
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

