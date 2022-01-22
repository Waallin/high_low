const recentScore = localStorage.getItem('recentScore');
const playerPoints = document.getElementById("playerPoints");
const button = document.getElementById("btn");
const input = document.getElementById("input")

playerPoints.innerHTML = recentScore;


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores)

button.addEventListener("click", function(e) {

    let date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let  highScoreTime = day + "/" + month + "/" + year;

    const score = {
        score: recentScore,
        name: input.value,
        date: highScoreTime
    }
    highScores.push(score)
    highScores.sort((a, b) => a.score - b.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
 
    input.remove()
    button.remove()

}) 