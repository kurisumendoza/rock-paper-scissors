const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';

let playerSelection = prompt('Choose one: Rock, Paper, or Scissors');
playerSelection = playerSelection.toLowerCase();

function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You Lose! Paper beats Rock.';
    } else if (computerSelection === 'scissors') {
      return 'You Win! Rock beats Scissors.';
    } else return 'Tie. Please try again.';
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You Win! Paper beats Rock.';
    } else if (computerSelection === 'scissors') {
      return 'You Lose! Scissors beat Paper.';
    } else return 'Tie. Please try again.';
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You Lose! Rock beats Scissors.';
    } else if (computerSelection === 'paper') {
      return 'You win! Scissors beat Paper.';
    } else return 'Tie. Please try again.';
  } else return 'Sorry. Your choice is invalid. Please try again.'
}

console.log('You: ' + playerSelection);
console.log('Computer: ' + getComputerChoice());
console.log(playRound(playerSelection, computerSelection));