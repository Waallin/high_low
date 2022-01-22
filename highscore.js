const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


let name1 = document.getElementById("name1");
let date1 = document.getElementById("date1");
let points1 = document.getElementById("points1");

name1.innerHTML = highScores[0].name;
points1.innerHTML = highScores[0].score;
date1.innerHTML = highScores[0].date;

let name2 = document.getElementById("name2");
let date2 = document.getElementById("date2");
let points2 = document.getElementById("points2");

name2.innerHTML = highScores[1].name;
points2.innerHTML = highScores[1].score;
date2.innerHTML = highScores[1].date;

let name3 = document.getElementById("name3");
let date3 = document.getElementById("date3");
let points3 = document.getElementById("points3");

name3.innerHTML = highScores[2].name;
points3.innerHTML = highScores[2].score;
date3.innerHTML = highScores[2].date;

let name4 = document.getElementById("name4");
let date4 = document.getElementById("date4");
let points4 = document.getElementById("points4");

name4.innerHTML = highScores[3].name;
points4.innerHTML = highScores[3].score;
date4.innerHTML = highScores[3].date;

let name5 = document.getElementById("name5");
let dat5 = document.getElementById("date5");
let points5 = document.getElementById("points5");

name5.innerHTML = highScores[4].name;
points5.innerHTML = highScores[4].score;
date5.innerHTML = highScores[4].date;

