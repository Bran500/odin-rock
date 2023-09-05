console.log("hello")

function computerSelction () {
    const min = 1;
    const max = 3;
    let random = Math.floor(Math.random() * (max - min +1)) + min;
    if (random == 1) {
        return "Rock";
    } else if (random == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const playerSelection = prompt("Enter either Rock,Paper,or Scissors.").toLowerCase();

function playRound ( playerSelection, computerSelction) { 
    if (playerSelection == computerSelction) {
        return prompt("You tied! with" + playerSelection + "and" + computerSelction)
        
    }
}