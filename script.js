const modeToggle = document.querySelector('.mode-toggle');
const body = document.querySelector('body');

function toggleMode() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Light Mode';
  } else {
    modeToggle.textContent = 'Dark Mode';
  }
}

