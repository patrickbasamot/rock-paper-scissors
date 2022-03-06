
const choice = ['Rock','Paper','Scissors'];
let computerPlay =(choice) => { 
    
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];

} 

computerPlay(choice);

let playerSelection = prompt('What is your Weapon \'Rock\',\'Paper\',\'Scissors\'?');
let computerSelection = computerPlay(choice);
function playRound (playerSelection,computerSelection)  {
    playerSelection === computerSelection ?  console.log('Draw'):
    playerSelection === 'Scissors' && computerSelection[choice] === 'Paper'? console.log('You win'):
    playerSelection === 'Paper' && computerSelection[choice] === 'Rock'? console.log('You win'):
    playerSelection === 'Rock' && computerSelection[choice] === 'Scissors'? console.log('You win'):

    playerSelection === 'Paper' && computerSelection[choice] === 'Scissor'? console.log('The Computer Won'):
    playerSelection === 'Rock' && computerSelection[choice] === 'Paper'? console.log('The Computer Won'):
    playerSelection === 'Scissors' && computerSelection[choice] === 'Rock'? console.log('The Computer Won'):
    

    console.log('Failed');


}



console.log(`The player chose ${playerSelection}`);
console.log(`The computer chose ${computerPlay(choice)}`);

console.log(playRound(playerSelection, computerSelection));

