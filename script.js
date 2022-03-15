
function game(){
    
   const choice = ['Rock','Paper','Scissors'];
   
  
   let computerPlay =(choice) => { 
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];

} 

computerPlay(choice);
//let playerSelection = prompt('What is your Weapon \'Rock\',\'Paper\',\'Scissors\'?');
let computerSelection = computerPlay(choice);

let playerScore =0;
let computerScore =0;

function playRound (playerSelection,computerSelection)  {

    
    playerSelection === computerSelection ?  console.log('Draw'):
   
    playerSelection === 'Scissors' && computerSelection === 'Paper'? console.log('You win, The Scissor beats Paper'):
    playerSelection === 'Paper' && computerSelection === 'Rock'? console.log('You win, The Paper beats Rock') :
    playerSelection === 'Rock' && computerSelection === 'Scissors'? console.log('You win, The Rock beats Scissors'):

    playerSelection === 'Paper' && computerSelection === 'Scissors'? console.log('The Computer Win, The scissor beats Paper'):
    playerSelection === 'Rock' && computerSelection === 'Paper'? console.log('The Computer Win, The Paper beats Rock') :

    playerSelection === 'Scissors' && computerSelection === 'Rock'? console.log('The Computer Won, The Rock beats Paper'):
    console.log('Failed');


}



console.log(`You chose ${playerSelection},The computer chose ${computerSelection}`);



playRound(playerSelection, computerSelection);



    
    
}

game();