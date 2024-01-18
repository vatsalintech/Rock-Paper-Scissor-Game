let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreDisplay = document.querySelector("#userScore");
const compScoreDisplay = document.querySelector("#compScore");
const resetBtn = document.querySelector("#resetBtn");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerHTML = "Draw, play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerHTML = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    }
    else{
        msg.innerHTML = `You loose. Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScoreDisplay.innerHTML = compScore;
    } 
}

const resetGame = () =>{
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerHTML = userScore;
    compScoreDisplay.innerHTML = compScore;
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

resetBtn.addEventListener("click", ()=>{
    resetGame();
})