let currentInput = '';
const display = document.getElementById('display');

function press(key) {
  if (key === 'C') {
    currentInput = '';
  } else if (key === '±') {
    currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
  } else if (key === '%') {
    currentInput = (parseFloat(currentInput) / 100).toString();
  } else {
    currentInput += key;
  }
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Erreur';
  }
  display.innerText = currentInput;
}

// Gestion du clavier
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[0-9+\-*/.%]/.test(key)) {
    press(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'c' || key === 'C' || key === 'Escape') {
    press('C');
  } else if (key === '±') {
    press('±');
  }

  event.preventDefault();
});


press(''); // Initialiser l'affichage

calculate();