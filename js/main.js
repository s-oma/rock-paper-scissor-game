
// Select the start game button + remove the starting screen
document.querySelector(".start-game-page span").onclick = function () {
    document.querySelector(".start-game-page").remove();
}
// Create the scores global variables
let userScore = 0;
let computerScore = 0;
// Create the UserSelection Function + Invoke computer selection function + Invoke Winner/Lose Function + Diaplay The Final Result Function
const userSelection = (hand) => {
    //console.log(hand);
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // Show the next page with the choosed hand
    let gameResult = document.querySelector(".game-result");
    gameResult.style.display = "flex";
    // Set the User Choise
    if(hand == "rock") {
        document.getElementById("user-image-choice").src = "imgs/rock.png"
    }
    if(hand == "paper") {
        document.getElementById("user-image-choice").src = "imgs/paper.png"
    }
    if(hand == "scissor") {
        document.getElementById("user-image-choice").src = "imgs/scissor.png"
    }
    // call the computer selection function
    let comRandomeChoice = computerSelection();

    // call the Winner/Lose Function
    theWinner (hand, comRandomeChoice);

    // Call the Final Result Function
    displayFinalResult();
}

// Create the computerSelection Function
const computerSelection = () => {
    let comSelection = ["rock", "paper", "scissor"];
    let comRandomeChoice = comSelection[Math.floor(Math.random() * 3)];

    // Set the Computer Choise
    if(comRandomeChoice == "rock") {
        document.getElementById("com-image-choice").src = "imgs/rock.png"
    }
    if(comRandomeChoice == "paper") {
        document.getElementById("com-image-choice").src = "imgs/paper.png"
    }
    if(comRandomeChoice == "scissor") {
        document.getElementById("com-image-choice").src = "imgs/scissor.png"
    }

    return comRandomeChoice;
}

// Create the Winner Determination function
const theWinner = (hand, comRandomeChoice) => {
    if(hand == "rock" && comRandomeChoice == "paper") {
        setResultStatement("You Lose!");
        setComScore(computerScore + 1);
    }
    if (hand == "paper" && comRandomeChoice == "scissor") {
        setResultStatement("You Lose!");
        setComScore(computerScore + 1);   
    }
    if (hand == "scissor" && comRandomeChoice == "rock") {
        setResultStatement("You Lose!");
        setComScore(computerScore + 1); 
    }
    if(hand == "paper" && comRandomeChoice == "rock") {
        setResultStatement("YOU WIN!");
        setUserScore(userScore + 1);
    }
    if(hand == "scissor" && comRandomeChoice == "paper") {
        setResultStatement("YOU WIN!");
        setUserScore(userScore + 1);
    }
    if(hand == "rock" && comRandomeChoice == "scissor") {
        setResultStatement("YOU WIN!");
        setUserScore(userScore + 1);
    }
    if(hand == "rock" && comRandomeChoice == "rock") {
        setResultStatement("It's a Tie!");
    }
    if(hand == "paper" && comRandomeChoice == "paper") {
        setResultStatement("It's a Tie!");
    }
    if(hand == "scissor" && comRandomeChoice == "scissor") {
        setResultStatement("It's a Tie!");
    }
}

// Create the Result function
const setResultStatement = (statement) => {
    //console.log(statement);
    document.querySelector(".statement h1").innerText = statement;
}
// Create the User Scores function
const setUserScore = (addUserScore) => {
    //console.log(addUserScore);
    userScore = addUserScore;
    document.querySelector(".your-scores h1").innerText = addUserScore;
}
// Create the Computer Scores function
const setComScore = (addComScore) => {
    //console.log(addComScore);
    computerScore = addComScore;
    document.querySelector(".computer-scores h1").innerText = addComScore;
}
// Create the Start Again Function
const startAgain = () => {
    // Reload The Orginal page
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    // Hide the choosed hand
    let gameResult = document.querySelector(".game-result");
    gameResult.style.display = "none";
}
// Create the Final Result Function
const displayFinalResult = () => {
    if(userScore === 5) {
        document.querySelector(".display-winner").style.display = "flex";
        document.querySelector(".display-winner span").onclick = function () {
            window.location.reload();
        };
        }
    
    if(computerScore === 5) {
        document.querySelector(".display-lost").style.display = "flex";
        document.querySelector(".display-lost span").onclick = function () {
            window.location.reload();
        };
    }
}