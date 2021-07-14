// Create keyboard buttons on-screen
function generateTopButtons() {
  let buttonsHTML = 'QWERTYUIOP'.split('').map(letter =>
    `
      <button 
        class="btn-general mx-auto"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('generateTopRow').innerHTML = buttonsHTML;
}

function generateMiddleButtons() {
  let buttonsHTML = 'ASDFGHJKL'.split('').map(letter =>
    `
      <button 
        class="btn-general mx-auto"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('generateMiddleRow').innerHTML = buttonsHTML;
}

function generateBottomButtons() {
  let buttonsHTML = 'ZXCVBNM'.split('').map(letter =>
    `
      <button 
        class="btn-general mx-auto"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('generateBottomRow').innerHTML = buttonsHTML;
}

generateTopButtons();
generateMiddleButtons();
generateBottomButtons();