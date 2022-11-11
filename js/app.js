const options = document.querySelectorAll('.options');
let playerScore = 0;
let computerScore = 0;


options.forEach((option) => {
    option.addEventListener('click', function () {
        const playerInput = this.textContent;
        const computerOptions = ['Rock', 'Paper', 'Scissors'];
        const computerInput = computerOptions[Math.floor(Math.random() * 3)];

        compareInputs(playerInput, computerInput);
        updateScore();
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});

function compareInputs(playerInput, computerInput) {
    const match = `${playerInput} vs ${computerInput}`;

    //tie check
    if (playerInput === computerInput) {
        alert(`${match} is a tie`);
        return;
    }

    //rock check
    if (playerInput === 'Rock') {
        if (computerInput === 'Scissors') {
            alert(`${match} You win`);
            playerScore++;
        } else {
            alert(`${match} You lost`);
            computerScore++;
        }
    }

    //paper check
    else if (playerInput === 'Paper') {
        if (computerInput === 'Rock') {
            alert(`${match} You win`);
            playerScore++;
        } else {
            alert(`${match} You lost`);
            computerScore++;
        }
    }

    //Scissors check
    else {
        if (computerInput === 'Paper') {
            alert(`${match} You win`);
            playerScore++;
        } else {
            alert(`${match} You lost`);
            computerScore++;
        }
    }
}

function updateScore() {
    document.getElementById("pscore").textContent = playerScore;
    document.getElementById("cscore").textContent = computerScore;
}


function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
            playerScore === 5
                ? "You win the game! Congratulations!"
                : "Game Over, you lost! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}