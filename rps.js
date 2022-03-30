//a function that randomly chooses between RPS
//make a rps eaual 1-3 
//choose a random number between 1-3
//if statement is tht number then that what it is
//return it

function computerPlay() {
  let ans;
    let randNum = Math.floor(Math.random()*3);
    if (randNum == 0) {
        ans = "rock";
        } else if (randNum == 1) {
            ans = "paper";
        } else {
            ans = "scissors"; 
        }
       
        return ans;
    }
     //let computerSelection = computerPlay();
     
    //USERS input of RPS
    //same as comptuers excepts it takes a inputs
    //take use input 
    //convert it to lower or uppercase
    //return it 

    function userSelect(){
        let userInput = prompt("Please choose rock, paper, or scissors.", "check spelling");
        userInput = userInput.toLowerCase();
        return userInput;
         
    } 

     
    //let playerSelection =  userSelect(); 
    
    //make a function that plays rps
    //it takes to parameters
    //declares a winner a
    //is case-insensitive
    //compare the results
    //decide who is th winner
    function playround(computerSelection, playerSelection) {
     
        if (computerSelection == "rock" && playerSelection == "rock") {
            return "It's a tie, rock and rock";
        } else if ( computerSelection == "rock" && playerSelection == "scissors") {
            return  "You lost, rock beat scissors";
        } else if (computerSelection == "rock" && playerSelection == "paper") {
            return "You won, paper beats rock";
        } else if (computerSelection == "paper" && playerSelection == "rock") {
            return "You lost, paper beats rock";
        } else if (computerSelection == "paper" && playerSelection == "paper") {
            return "It's a tie, paper and paper";
        } else if (computerSelection == "paper" && playerSelection == "scissors") {
            return "You won, scissors beats paper";
        } else if (computerSelection == "scissors" && playerSelection == "rock") {
            return "You won, rock beats scissors";
        } else if (computerSelection == "scissors" && playerSelection == "paper") {
            return "You lost, scissors beats paper";
        } else if (computerSelection == "scissors" && playerSelection == "scissors") {
            return "It's a tie, scissors and scissors";
        } else {   
            return "error";
            
        }      
    }

    console.log(playround(computerSelection, playerSelection));
    


    //make a functtion call game
    //it needs to loop 5 times
    //each time it has to ask the user for input so playerSelection
    //it has to print out who one each round
    //something has to keep track of each round
    //whoever gets to 5 first wins and prints out on the screen
    function game() {
       // userScore;
       // pcScore;
        for (let i= 0; i < 5; i++) {
                console.log(playround(computerPlay(), userSelect()));

               

    }
} 
