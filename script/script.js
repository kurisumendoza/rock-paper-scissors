const choices = ['rock', 'paper', 'scissors'];

let computerSelection = '';

let playerSelection = prompt('Choose one: Rock, Paper, or Scissors');
playerSelection = playerSelection.toLowerCase();

function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {

  getComputerChoice();
  
  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'Lose';
    } else if (computerSelection === 'scissors') {
      return 'Win';
    } else return 'Tie.';
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
  } else return 'Invalid';
}

function game() {
  let i = 1;
  let result = [];
  while (i <= 5) {
    gameResult = playRound(playerSelection, computerSelection);
    result.push(gameResult);
    i++;
  }

  const resultCount = {};
  
  countResults();

  function countResults() {
    result.forEach(count => {
      resultCount[count] = (resultCount[count] || 0) + 1;
    });
    return resultCount;
  }

  console.log(result);
  console.log(resultCount)
    
  if (resultCount.Invalid === 5) {
    return 'Invalid. Please pick a valid option.';
  } else if (resultCount.Win > resultCount.Lose || resultCount.Lose == undefined) {
    return 'Congratulations! You Win! Good job.';
  } else if (resultCount.Win < resultCount.Lose || resultCount.Win == undefined) {
    return 'Sorry. You Lose. Better luck next time.';
  } else if (resultCount.Win === resultCount.Lose || resultCount.Tie === 5) {
    return 'Tie. Try again.';
  } 
}

console.log(game());