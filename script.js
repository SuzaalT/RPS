
const gameState = {
  gamesPlayed: 0,
  gamesWon: 0,
  gamesDrew: 0,
  gamesLost: 0,
};

const messageAreaElement = document.getElementById("message-area");

const playerMovesButtonElements = document.querySelectorAll(".player-btn");

const resetButtonElement = document.getElementById("reset");

resetButtonElement.addEventListener("click",() => { 
    
    gameState.gamesPlayed = 0;
    gameState.gamesWon = 0;
    gameState.gamesDrew = 0;
    gameState.gamesLost = 0;
    
    messageAreaElement.innerHTML = "";
    updateMessageAreaElement();
});





playerMovesButtonElements.forEach(moveButton => {
  const playerMove = moveButton.getAttribute("id");
  moveButton.addEventListener("click", () => playgame(playerMove))
})



function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function playgame(playerMove) {
  gameState.gamesPlayed = gameState.gamesPlayed + 1;

 
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === computerMove) {
    result = "It's a tie!";
    gameState.gamesDrew = gameState.gamesDrew + 1;

  } else if(playerMove === "rock" && computerMove === "paper") {
    result = "You Lose!";
    gameState.gamesLost = gameState.gamesLost+ 1;
  } else if(playerMove === "rock" && computerMove === "scissors") {
    result = "You Win!";
    gameState.gamesWon = gameState.gamesWon + 1;
  } else if(playerMove === "paper" && computerMove === "rock") {
    result = "You Win!";
    gameState.gamesWon = gameState.gamesWon + 1;
  } else if(playerMove === "scissors" && computerMove === "rock") {
    result = "You Lose!";
    gameState.gamesLost = gameState.gamesLost+ 1;
  } else if (playerMove === "paper" && computerMove === "scissors"){
    result = "You Lose!";
    gameState.gamesLost = gameState.gamesLost+ 1;
  } else if (playerMove === "scissors" && computerMove === "paper"){
    result = "You Win!";
    gameState.gamesWon = gameState.gamesWon + 1;
   
  }

    messageAreaElement.innerText =  `You picked ${playerMove}, Computer picked ${computerMove} - ${result}\n`;
    updateMessageAreaElement();
  // gameState.gamesWon = gameState.gamesWon + 1;
  
  // alert (`You picked ${playerMove}, Computer picked ${computerMove} - ${result}`);
  
}


const updateMessageAreaElement = () => {
  
  messageAreaElement.innerText +=  `Games Played: ${gameState.gamesPlayed}\n`;
  
  messageAreaElement.innerText +=  `Games Won: ${gameState.gamesWon}\n`;

  messageAreaElement.innerText +=  `Games Drew: ${gameState.gamesDrew}\n`;

  messageAreaElement.innerText +=  `Games Lost: ${gameState.gamesLost}\n`;
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

