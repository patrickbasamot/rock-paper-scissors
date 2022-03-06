
const choice = ['Rock','Paper','Scissors'];
let computerPlay =(choice) => { 
    
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];

} 

computerPlay(choice);

let playerSelection = prompt('What is your Weapon \'Rock\',\'Paper\',\'Scissors\'?');
let computerSelection = computerPlay(choice);

console.log(computerSelection,playerSelection);

