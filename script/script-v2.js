const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';

let playerSelection = '';

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
  playerSelection = 'rock';
  temporaryResult();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  temporaryResult();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  temporaryResult();
});

function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'Lose';
    } else if (computerSelection === 'scissors') {
      return 'Win';
    } else return 'Tie';
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'Win';
    } else if (computerSelection === 'scissors') {
      return 'Lose';
    } else return 'Tie';
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'Lose';
    } else if (computerSelection === 'paper') {
      return 'Win';
    } else return 'Tie';
  }
}

let winTotal = 0;
let lossTotal = 0;
let tieTotal = 0;

function recordScore(outcome) {
  let win = document.querySelector('.your-score span');
  let lose = document.querySelector('.comp-score span');
  let tie = document.querySelector('.ties span');

  if (outcome === 'Win') {
    ++winTotal;
    win.textContent = `${winTotal}`;
  } else if (outcome === 'Lose') {
    ++lossTotal;
    lose.textContent = `${lossTotal}`;
  } else if (outcome === 'Tie') {
    ++tieTotal;
    tie.textContent = `${tieTotal}`;
  }
}

function temporaryResult() {
  let yourPick = document.querySelector('.your-pick span');
  yourPick.textContent = playerSelection.toUpperCase();

  let compPick = document.querySelector('.comp-pick span');
  compPick.textContent = getComputerChoice().toUpperCase();
  
  recordScore(playRound(playerSelection, computerSelection));

  let finalResult = document.querySelector('.result')
  if (winTotal === 5) {
    finalResult.textContent = 'Congratulations! You win!';
  } else if (lossTotal === 5) {
    finalResult.textContent = 'You lose. Please try again.';
  }
}