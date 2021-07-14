// Based on https://www.youtube.com/watch?v=dgvyE1sJS3Y  
// Create keyboard buttons on screen
// Split the function in three, to create a QWERTY-keyboard layout over three different elements
function generateButtons() {
  // Top row keyboard 
  let buttonsTopHTML = 'QWERTYUIOP'.split('').map(letter =>
    `
      <button 
        class="btn-general"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join(''); // Remove commas between words

  // Middle row keyboard 
  let buttonsMiddleHTML = 'ASDFGHJKL'.split('').map(letter =>
    `
      <button 
        class="btn-general"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join(''); // Remove commas between words

  // Bottom row keyboard 
  let buttonsBottomHTML = 'ZXCVBNM'.split('').map(letter =>
    `
      <button 
        class="btn-general"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join(''); // Remove commas between words

  // Insert in the HTML 
  document.getElementById('generateTopRow').innerHTML = buttonsTopHTML;
  document.getElementById('generateMiddleRow').innerHTML = buttonsMiddleHTML;
  document.getElementById('generateBottomRow').innerHTML = buttonsBottomHTML;
}

// Excecute function - generate keyboard
generateButtons();