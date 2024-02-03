function playgame(playermove){
  const computerMove =pickComputerMove();
  let result='';

  if(playermove === 'rock'){
    if(computerMove === 'paper'){
      result = 'You lose';
    }else if ( computerMove  === 'rock'){
      result = 'Its a tie';
    }else if ( computerMove === 'scissors'){
      result = ' You lost';
    }
  }else if (playermove === 'scissors'){
    if(computerMove === 'rock '){
      result = 'you lose';
    }else if ( computerMove === 'scissors'){
      result = 'Its a Tie';
    }else if ( computerMove === 'paper'){
      result = ' You Win';
    }
  }else if (playermove === 'paper'){
    if (computerMove === 'scissors'){
      result = 'You lose';
    } else if ( computerMove === 'paper'){
      result = 'Its a Tie';
    } else if ( computerMove === 'rock'){
      result = ' You Win';
    }

  }
  alert (` You picked ${playermove}. Computer picked ${computerMove}.${result}`);
}






function pickComputerMove() {
  let computerMove = "";

  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}