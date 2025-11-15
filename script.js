const userinput = document.getElementById("input-field");
const submitBtn = document.getElementById("submit-btn");
const resultline = document.querySelector(".result");
const chancesDisplay = document.querySelector(".chances-left");
const repeatBtn = document.getElementById("repeat-btn");

let random_num = Math.floor(Math.random() * 100) + 1;
let chances = 5;

submitBtn.addEventListener('click', function () {
    let guess = Number(userinput.value);

    if (!guess || guess < 1 || guess > 100) {
        resultline.textContent = "Please enter a valid number between 1 to 100!!";
        return;
    }

    if (guess === random_num) {
        resultline.textContent = "Congratulations! You guessed it right.";
        resultline.style.color = "green";
        submitBtn.disabled = true;
        userinput.disabled = true;
        repeatBtn.style.display = "block";
    } else if (guess < random_num) {
        chances--;
        resultline.textContent = "Your guess is smaller than the actual number.";
        
    } else if (guess > random_num) {
        chances--;
        resultline.textContent = "Your guess is larger than the actual number.";
        
    }

    chancesDisplay.textContent =` Number of Remaining Chances : ${chances}`;

    if (chances === 0) {
        resultline.textContent = `Game Over! The number was ${random_num}`;
        resultline.style.color = "red";
        submitBtn.disabled = true;
        userinput.disabled = true;
        repeatBtn.style.display = "block";
    }

    userinput.value = "";
});

repeatBtn.addEventListener('click', function () {
    random_num = Math.floor(Math.random() * 100) + 1;
    chances = 5;
    resultline.textContent = "";
    resultline.style.color = "black";
    chancesDisplay.textContent = chances;
    userinput.value = "";
    submitBtn.disabled = false;
    userinput.disabled = false;
    repeatBtn.style.display = "none";
});


userinput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        submitBtn.click();
    }
});