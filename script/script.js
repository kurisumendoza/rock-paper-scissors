const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';

function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

console.log(getComputerChoice());