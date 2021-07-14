// Create keyboard buttons on-screen
function generateButtons() {
  let buttonsTopHTML = 'QWERTYUIOP'.split('').map(letter =>
    `
      <button 
        class="btn-general mx-auto"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  let buttonsMiddleHTML = 'ASDFGHJKL'.split('').map(letter =>
    `
      <button 
        class="btn-general mx-auto"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  let buttonsBottomHTML = 'ZXCVBNM'.split('').map(letter =>
    `
      <button 
        class="btn-general mx-auto"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('generateTopRow').innerHTML = buttonsTopHTML;
  document.getElementById('generateMiddleRow').innerHTML = buttonsMiddleHTML;
  document.getElementById('generateBottomRow').innerHTML = buttonsBottomHTML;
}

generateButtons();