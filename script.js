
function game(){
    
   const choice = ['Rock','Paper','Scissors'];
   
  
   let computerPlay =(choice) => { 
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];

} 

computerPlay(choice);
let playerSelection = prompt('What is your Weapon \'Rock\',\'Paper\',\'Scissors\'?');
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

//game();


const  click = () => {
    //Buttons
    const rockBtn = document.querySelector('.rock');
    const  paperBtn = document.querySelector('.paper');
    const  scissorBtn = document.querySelector('.scissor');

  //Score boards
    let playerScoreBoard = document.querySelector('.p-count');
    let playerScore = 0;
    let computerScoreBoard = document.querySelector('.c-count');
    let computerScore = 0;

    const playerChoice = [rockBtn,paperBtn,scissorBtn];
    const computerChoice = ['rock','paper','scissor'];
    const result = document.querySelector('.result');
    playerChoice.forEach(option => {
        option.addEventListener('click',function(){


            const choiceNumber = Math.floor(Math.random()* computerChoice.length);
            const computerOption = computerChoice[choiceNumber];

                if( option === rockBtn && computerChoice == 'rock'){
                    result.textContent = 'Draw';
                } 
                else if( option === paperBtn && computerChoice == 'paper'){
                    result.textContent = 'Draw';
                } 
                else if( option === scissorBtn && computerChoice == 'scissor'){
                    result.textContent = 'Draw';
                } 
                else if (option === scissorBtn &&  computerOption === 'paper'){
                    result.textContent = " You win";
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                 }
                else if(option === paperBtn && computerOption ==='rock'){
                    result.textContent = " You win";
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
                else if(option === rockBtn && computerOption === 'rock'){
                    result.textContent = " You win";
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
                else if( option === paperBtn && computerOption === 'scissor'){
                        result.textContent = "Computer Win";
                        computerScore++;
                        computerScoreBoard.textContent = computerScore;
                }
                else if( option === rockBtn && computerOption === 'paper'){
                    result.textContent = "Computer Win";
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }
                else if( option === scissorBtn && computerOption === 'rock'){
                    result.textContent = "Computer Win";
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }

                if(playerScore > 3  ){
                    alert('You win');
                    window.location.reload();
                }
                else if(computerScore > 3 ){
                    alert('Computer Win');
                    window.location.reload();
                }
            })
        })
    }



click();