let input = document.querySelector(".number");
let number = Math.floor(Math.random() * 100) + 1;
let output = document.querySelector(".output");
let incorrect = 0;

output.innerHTML = "<p>Game Started.</p>";


input.addEventListener("focus", function () {
    output.innerHTML = "";
});

function check() {
    let guess = parseInt(input.value);

    if (isNaN(guess) || guess<1 || guess >100) {
        output.innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }
    else if(guess<number)
    {
        incorrect++;
        output.innerHTML = `<p>Wrong Guess! Your are just below the number. Try Again.</p>`;
        input.value = "";
    }
    else if(guess>number)
    {
        incorrect++;
        output.innerHTML = `<p>Wrong Guess! Your are just above the number. Try Again.</p>`;
        input.value = "";
    }
    else {
        let accuracy = (1 / (incorrect + 1)).toFixed(2)*100;
        output.innerHTML =
            `<p>Correct Guess 😊</p><p>Your accuracy: ${accuracy} % </p><p>Game Over</p>`;
            input.disabled = true;
        document.querySelector("button").disabled = true;

    }
}


let playAgainBtn = document.querySelector(".play-again");

playAgainBtn.addEventListener("click", function () {
   
    number = Math.floor(Math.random() * 100) + 1;

    input.disabled = false;
    document.querySelector("button").disabled = false;
    input.value = "";
    output.innerHTML = "<p>New Game Started. Try your luck!</p>";
    incorrect = 0;
});