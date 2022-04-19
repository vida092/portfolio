let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}


/////
const compareGuesses = (human, computer, secret) => {
  if (Math.abs(computer-secret)< Math.abs(human-secret)){
    return false;
  }else{
    return true;
  }
}


////
const updateScore=(par)=>{
  if (par="human"){
    humanScore+=1;
  }else{
    computerScore+=1;
  }
}


const advanceRound = () => currentRoundNumber++;

