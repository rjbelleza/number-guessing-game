const startButton = document.getElementById('start-btn');
const clue = document.getElementById('clue');
let number = document.getElementById('number');
const guess = document.getElementById('input-guess');
const submitGuess = document.getElementById('guess-form');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');
const arrowClue = document.getElementById('arrow-clue');
const turns = document.getElementById('turns');

const handleClose = (element) => {
    element.style = "display: none";
}

const handleOpen = (element) => {
    element.style = "display:block"; 
}

handleClose(guess);
handleClose(submit);
handleClose(arrowClue);

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

const checkTurns = (turns) => {
    if (turns == 0) {
        handleClose(guess);
        handleClose(submitBtn);
        handleClose(arrowClue);
        clue.textContent = "You Failed. Better luck next time!";
        result.textContent = number;
    }
}

startButton.addEventListener('click', () => {
    handleOpen(guess);
    handleOpen(submitBtn);
    handleClose(startButton);

    number = getRandom(1, 100);
    let numberOfTurns = 5;

    turns.textContent = `Turns left: ${numberOfTurns}`;

    submitGuess.addEventListener('submit', (e) => {
        e.preventDefault();
        handleOpen(arrowClue);

        console.log(number);
        if (guess.value > number) {
            clue.textContent = "Try Lower!";
            arrowClue.src = "arrow-down.png";
            numberOfTurns--;
            turns.textContent = `Turns left: ${numberOfTurns}`;
            checkTurns(numberOfTurns);
        } 
        else if (guess.value < number) {
            clue.textContent = "Try Higher!"
            arrowClue.src = "arrow-up.png";
            numberOfTurns--;
            turns.textContent = `Turns left: ${numberOfTurns}`;
            checkTurns(numberOfTurns);
        }
        else {
            handleClose(guess);
            handleClose(submitBtn);
            handleClose(arrowClue);
            clue.textContent = "Congrats! You guessed the number.";
            result.textContent = number;
        }
    });
})
