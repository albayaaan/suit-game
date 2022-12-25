const opt = ['Rock', 'Paper', 'Scissors'];

function capitalizeString(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function getComputerChoice() {
    let ind = Math.floor(Math.random() * opt.length);
    return opt[ind];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeString(playerSelection) ;
    if (opt.includes(playerSelection)) {
        if (playerSelection == computerSelection) {
            return `Draw! both of us pick ${playerSelection}`;
        } else {
            if (playerSelection == "Rock") {
                return computerSelection == "Paper" ?"You Lose! Paper beats Rock" :"You Win! Rock beats Scissors";
            }
            else if (playerSelection == "Paper") {
                return computerSelection == "Scissors" ?"You Lose! Scissors beats Paper" :"You Win! Paper beats Rock";
            }
            else if (playerSelection == "Scissors") {
                return computerSelection == "Rock" ?"You Lose! Rock beats Scissors" :"You Win! Scissors beats Paper";
            }
        }
    } else {
        return "Please input answer with correct spelling";
    }
}


function game() {
    let pointPlayer = 0;
    let pointComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, Scissors, Input yours :");
        const computerSelection = getComputerChoice();
        console.log("You == ",playerSelection);
        console.log("Computer == ",computerSelection);
        let text = playRound(playerSelection, computerSelection);
        if (text.search(/win/i) != -1) {
            pointPlayer++;
        }
        else if (text.search(/lose/i) != -1) {
            pointComputer++;
        }
        console.log(text);
    }
    console.log("Player : ",pointPlayer," Computer : ",pointComputer);
    if (pointPlayer != pointComputer) {
        if (pointPlayer > pointComputer) {
            alert("YOU WIN!");
        } else {
            alert("YOU LOSE!");            
        }
    } else {
        alert("DRAW");
    }
}

game()