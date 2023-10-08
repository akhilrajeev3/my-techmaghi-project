let score=JSON.parse(localStorage.getItem('score'));



if(score === null){
  score = { wins: 0, losses: 0, tie: 0 };
}

updateScoreElement()

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose.';
  } else if (computerMove === 'paper') {
    result = 'You win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
}

if(result ==='You win.')
{
    score.wins = score.wins+1;
}else if(result === 'You lose.')
{
    score.losses = score.losses+1;
}else if(result === 'Tie.')
{
    score.tie = score.tie+1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement()



alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
wins: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`);
}


function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML=
  `wins: ${score.wins}, losses: ${score.losses}, tie: ${score.tie}`
}



function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}



