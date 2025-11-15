<h1 align="center">🎯 Guess The Number Game</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Made%20With-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Style-CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Game-Logic%20Based-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

<p align="center">
  A fun and interactive <b>number guessing game</b> where you have only <b>5 chances</b> to guess a secret number between <b>1–100</b>.  
  The game gives hints like <b>"Too High"</b> or <b>"Too Low"</b> and lets you restart anytime with a single click.  
</p>

---

## 🌟 Features

✨ Random number generated automatically between **1–100**  
✨ Only **5 chances** to guess the correct number  
✨ Smart hints: tells you if your guess is **higher** or **lower**  
✨ Clean UI with responsive design  
✨ Enter key support for fast gameplay  
✨ “Play Again” button instantly resets the game  

---

## 🧠 Tech Stack

| Technology | Usage |
|-------------|--------|
| **HTML5** | Page structure |
| **CSS3** | Styling and layout |
| **JavaScript (Vanilla)** | Game logic, DOM manipulation |

---

## ⚙️ How It Works

1. A random number between **1–100** is generated when the page loads  
2. The user enters a guess in the input field  
3. The game checks:  
   - ✔ If guess = correct → **Win Message**  
   - ✔ If guess < correct → "Your guess is smaller"  
   - ✔ If guess > correct → "Your guess is larger"  
4. Each wrong guess reduces the **remaining chances**  
5. If chances reach 0 → **Game Over** message with the correct number  
6. Click **Play Again** to reset everything  

---

## 🧾 Core JavaScript Logic

```js
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
        submitBtn.disabled = true;
        userinput.disabled = true;
        repeatBtn.style.display = "block";
    } else {
        chances--;
        resultline.textContent = (guess < random_num)
            ? "Your guess is smaller than the actual number."
            : "Your guess is larger than the actual number.";
    }

    chancesDisplay.textContent = `Number of Remaining Chances : ${chances}`;

    if (chances === 0) {
        resultline.textContent = `Game Over! The number was ${random_num}`;
        submitBtn.disabled = true;
        userinput.disabled = true;
        repeatBtn.style.display = "block";
    }

    userinput.value = "";
});

```
⭐ Support
If you like this project, don’t forget to ⭐ the repository!
Your support motivates me to create more cool beginner-friendly projects 🔥

<p align="center">Built with ❤️ by <b>Harshit Varshney</b></p>