const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('check').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);

    if (guess === numberToGuess) {
        attempts++;
        document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('message').style.color = 'green';
        document.getElementById('check').disabled = true;
    } else if (guess < numberToGuess) {
        attempts++;
        document.getElementById('message').innerHTML = 'Try a higher number.';
        document.getElementById('message').style.color = 'red';
    } else {
        attempts++;
        document.getElementById('message').innerHTML = 'Try a lower number.';
        document.getElementById('message').style.color = 'red';
    }
});
