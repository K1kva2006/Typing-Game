import words from "./words.js"

const word = document.getElementById("word");
const input = document.getElementById("input");
const timeText = document.getElementById("timeText");
const scoreText = document.getElementById("scoreText");
const highScoreText = document.getElementById("highScoreText")
const overScore = document.getElementById("overScore")
const tryAgain = document.getElementById("tryAgain")
const gameOver = document.getElementById("gameOver")

word.textContent = words[0];

let time = 60;
timeText.textContent = time;

let score = 0;
scoreText.textContent = score;

let highScore = localStorage.getItem("highScoreTY")
highScoreText.textContent = highScore

let interval = setInterval(() => {
    if(score == 0) {
        time = 60
    }

    if (score > 0 && score < 10) {
        time -= 1;
    } else if(score > 10 && score < 30) {
        time -= 2
        timeText.style.color = "orange"
    } else if(score > 30 && score < 60) {
        time -= 3
        timeText.style.color = "red"
    } else if(score > 60) {
        time -= 4
        timeText.style.color = "darkred"
    }
    if(time <= 0) {
        input.setAttribute("disabled", true)
        gameOver.style.display = "block"
        clearInterval(interval)
    }

    timeText.textContent = time;
}, 1000);

//Logics
function comparisonFun() {
    if (word.textContent === input.value) {
        input.value = "";
        word.textContent = words[Math.floor(Math.random() * words.length)];

        score += 1;
        scoreText.textContent = score;
        overScore.textContent = score          
        if(score >= highScore) {
            highScore = score
            localStorage.setItem("highScoreTY", highScore)
        }
        highScoreText.textContent = highScore

        time += 1
        timeText.textContent = time;
    }
}

input.addEventListener("input", (e) => {
    comparisonFun();
});


tryAgain.addEventListener("click", () => {
    window.location.reload()
    console.log(1);
})