let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    attempts = 0; // Resets the number of attempts
    document.getElementById("message").textContent = "Try to guess the number!";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessButton").disabled = false; // Enables the guess button
    document.getElementById("restartButton").style.display = "none"; // Hides the restart button
}

document.getElementById("guessButton").addEventListener("click", function() {
    const guess = parseInt(document.getElementById("guessInput").value);
    attempts++; // Increment the number of attempts

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("message").textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (guess === secretNumber) {
        document.getElementById("message").textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts!`;
        document.getElementById("guessButton").disabled = true; // Disables the guess button
        document.getElementById("restartButton").style.display = "block"; // Shows the restart button
    } else if (guess < secretNumber) {
        document.getElementById("message").textContent = "Your guess is too low. Try again!";
    } else {
        document.getElementById("message").textContent = "Your guess is too high. Try again!";
    }
});

document.getElementById("restartButton").addEventListener("click", startGame);

// Start the game for the first time
startGame();