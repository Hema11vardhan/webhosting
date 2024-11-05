let score = 0;

// Get references to elements
const scoreElement = document.getElementById('score');
const squareElement = document.getElementById('square');

// Function to move the square to a random position
function moveSquare() {
  const x = Math.floor(Math.random() * (window.innerWidth - 50));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  squareElement.style.left = `${x}px`;
  squareElement.style.top = `${y}px`;
}

// Update score and move the square when clicked
squareElement.addEventListener('click', () => {
  score++;
  scoreElement.textContent = score;
  moveSquare();
});

// Initial square position
moveSquare();
