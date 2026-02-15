let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let userScoreNum = document.querySelector("#userScore");
let compScoreNum = document.querySelector("#compScore");
const options = ["Rock", "Paper", "Scissor"];

const drawWinner = () => {
    console.log("The game is Draw");
    msg.innerText = "Fuhh! It's draw";
    msg.style.backgroundColor = "grey"
}

let getCompChoice = () => {
    let randIdx = Math.floor(Math.random() * 3);
    // console.log(randIdx);
    return options[randIdx];
}

let showWinner = (userWin) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = ("Yay! you win");
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreNum.innerText = userScore;
    }
    else {
        console.log("you lose!");
        msg.innerText = ("Huh! you lose");
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreNum.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    user.innerText = `${userChoice}`;
    let compChoice = getCompChoice();
    console.log(`Comp choice = ${compChoice}`);
    comp.innerText = `${compChoice}`
    if (userChoice === compChoice) {
        drawWinner();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        playGame(userChoice);
    })
})