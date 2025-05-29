 // Rock Paper Scissors Logic
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice-btn').forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    
    updateScore(result);
    displayResult(playerChoice, computerChoice, result);
  });
});

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  }
  return 'computer';
}

function updateScore(result) {
  if (result === 'player') playerScore++;
  if (result === 'computer') computerScore++;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(player, computer, result) {
  const resultText = {
    player: 'You win!',
    computer: 'Computer wins!',
    draw: "It's a draw!"
  };
  
  document.getElementById('game-result').innerHTML = `
    <p>You chose <strong>${player}</strong></p>
    <p>Computer chose <strong>${computer}</strong></p>
    <h4>${resultText[result]}</h4>
