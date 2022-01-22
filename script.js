let cards = ["1", "1", "1", "1", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8",
  "9", "9", "9", "9", "10", "10", "10", "10", "11", "11", "11", "11", "12", "12", "12", "12", "13", "13", "13", "13"]

let addedCards = [];


let btns = document.querySelectorAll(".col-2");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let add = document.getElementById("add");

pic1 = document.getElementById("pic1")
pic2 = document.getElementById("pic2")
pic3 = document.getElementById("pic3")
pic4 = document.getElementById("pic4")
pic5 = document.getElementById("pic5")
pic6 = document.getElementById("pic6")
pic7 = document.getElementById("pic7")
pic8 = document.getElementById("pic8")
pic9 = document.getElementById("pic9")
pic10 = document.getElementById("pic10")
pic11 = document.getElementById("pic11")
pic12 = document.getElementById("pic12")
pic13 = document.getElementById("pic13")

/*let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let eleven = document.getElementById("eleven");
let twelve = document.getElementById("twelve");
let thirteen = document.getElementById("thirteen");*/

let answer = document.getElementById("answer");

let playerPoint = document.getElementById("playerPoints")
playerPoint.innerHTML = "Poäng: "


let CountOne = 0;
let CountTwo = 0;
let CountThree = 0;
let CountFour = 0;
let CountFive = 0;
let CountSix = 0;
let CountSeven = 0;
let CountEight = 0;
let CountNine = 0;
let CountTen = 0;
let CountEleven = 0;
let CountTwelve = 0;
let CountThirteen = 0;



//Lägger sitt gissade kort och rätt kort i en array i storleksordning och subtraherar därifrån
let pointArray = [];

//Räknar så man kan gissa två gånger på kortet innan man gissar på andra kortet
count = 0;

playerPoints = 0;

//Tar bort randomkort ur kortleken
let remove = cards.splice(Math.floor(Math.random() * cards.length), 1);
let removedCard = parseInt(remove);


function showCards() {

    /*one.innerHTML = CountOne;
    two.innerHTML = CountTwo;
    three.innerHTML = CountThree;
    four.innerHTML = CountFour;
    five.innerHTML = CountFive;
    six.innerHTML = CountSix;
    seven.innerHTML = CountSeven;
    eight.innerHTML = CountEight;
    nine.innerHTML = CountNine;
    ten.innerHTML = CountTen;
    eleven.innerHTML = CountEleven;
    twelve.innerHTML = CountTwelve;
    thirteen.innerHTML = CountThirteen;*/



    if (removedCard === 1) {
        CountOne++;
    }
    if (removedCard === 2) {
        CountTwo++;

    }
    if (removedCard === 3) {
        CountThree++;
    }
    if (removedCard === 4) {
        CountFour++;
    }
    if (removedCard === 5) {
        CountFive++;
    }
    if (removedCard === 6) {
        CountSix++;
    }
    if (removedCard === 7) {
        CountSeven++;
    }
    if (removedCard === 8) {
        CountEight++;
    }
    if (removedCard === 9) {
        CountNine++;
    }
    if (removedCard === 10) {
        CountTen++;

    }
    if (removedCard === 11) {
        CountEleven++;

    }
    if (removedCard === 12) {
        CountTwelve++;
    }
    if (removedCard === 13) {
        CountThirteen++;
    }

    addedCards.push(remove);

}

//Lägger till klasser efter hur många kort som dragits. En gul ram och när alla kort är ute läggs de upp och ner
function changeCards() {

    if (CountOne > 0) {
        pic1.classList.add("oneCard");

    }
    if (CountOne > 1) {
        pic1.classList.add("twoCards");
    }
    if (CountOne > 2) {
        pic1.classList.add("threeCards");
    }
    if (CountOne > 3) {
        pic1.classList.add("fourCards");
        pic1.classList.remove("oneCard", "twoCards", "threeCards")

    }

    if (CountTwo > 0) {
        pic2.classList.add("oneCard");
    }
    if (CountTwo > 1) {
        pic2.classList.add("twoCards");
    }
    if (CountTwo > 2) {
        pic2.classList.add("threeCards");
    }
    if (CountTwo > 3) {
        pic2.classList.add("fourCards");
        pic2.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountThree > 0) {
        pic3.classList.add("oneCard");
    }
    if (CountThree > 1) {
        pic3.classList.add("twoCards");
    }
    if (CountThree > 2) {
        pic3.classList.add("threeCards");
    }
    if (CountThree > 3) {
        pic3.classList.add("fourCards");
        pic3.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountFour > 0) {
        pic4.classList.add("oneCard");
    }
    if (CountFour > 1) {
        pic4.classList.add("twoCards");
    }
    if (CountFour > 2) {
        pic4.classList.add("threeCards");
    }
    if (CountFour > 3) {
        pic4.classList.add("fourCards");
        pic4.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountFive > 0) {
        pic5.classList.add("oneCard");
    }
    if (CountFive > 1) {
        pic5.classList.add("twoCards");
    }
    if (CountFive > 2) {
        pic5.classList.add("threeCards");
    }
    if (CountFive > 3) {
        pic5.classList.add("fourCards");
        pic5.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountSix > 0) {
        pic6.classList.add("oneCard");
    }
    if (CountSix > 1) {
        pic6.classList.add("twoCards");
    }
    if (CountSix > 2) {
        pic6.classList.add("threeCards");
    }
    if (CountSix > 3) {
        pic6.classList.add("fourCards");
        pic6.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountSeven > 0) {
        pic7.classList.add("oneCard");
    }
    if (CountSeven > 1) {
        pic7.classList.add("twoCards");
    }
    if (CountSeven > 2) {
        pic7.classList.add("threeCards");
    }
    if (CountSeven > 3) {
        pic7.classList.add("fourCards");
        pic7.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountEight > 0) {
        pic8.classList.add("oneCard");
    }
    if (CountEight > 1) {
        pic8.classList.add("twoCards");
    }
    if (CountEight > 2) {
        pic8.classList.add("threeCards");
    }
    if (CountEight > 3) {
        pic8.classList.add("fourCards");
        pic8.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountNine > 0) {
        pic9.classList.add("oneCard");
    }
    if (CountNine > 1) {
        pic9.classList.add("twoCards");
    }
    if (CountNine > 2) {
        pic9.classList.add("threeCards");
    }
    if (CountNine > 3) {
        pic9.classList.add("fourCards");
        pic9.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountTen > 0) {
        pic10.classList.add("oneCard");
    }
    if (CountTen > 1) {
        pic10.classList.add("twoCards");
    }
    if (CountTen > 2) {
        pic10.classList.add("threeCards");
    }
    if (CountTen > 3) {
        pic10.classList.add("fourCards");
        pic10.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountEleven > 0) {
        pic11.classList.add("oneCard");
    }
    if (CountEleven > 1) {
        pic11.classList.add("twoCards");
    }
    if (CountEleven > 2) {
        pic11.classList.add("threeCards");
    }
    if (CountEleven > 3) {
        pic11.classList.add("fourCards");
        pic11.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountTwelve > 0) {
        pic12.classList.add("oneCard");
    }
    if (CountTwelve > 1) {
        pic12.classList.add("twoCards");
    }
    if (CountTwelve > 2) {
        pic12.classList.add("threeCards");
    }
    if (CountTwelve > 3) {
        pic12.classList.add("fourCards");
        pic12.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountThirteen > 0) {
        pic13.classList.add("oneCard");
    }
    if (CountThirteen > 1) {
        pic13.classList.add("twoCards");
    }
    if (CountThirteen > 2) {
        pic13.classList.add("threeCards");
    }
    if (CountThirteen > 3) {
        pic13.classList.add("fourCards");
        pic13.classList.remove("oneCard", "twoCards", "threeCards")
    }

    if (CountOne > 3 && CountTwo > 3 && CountThree > 3 && CountFour > 3 && CountFive > 3 && CountSix > 3 && CountSeven > 3 && CountEight > 3 && CountNine > 3 && CountTen > 3 
        && CountEleven > 3 && CountTwelve > 3 && CountThirteen > 3) {
            localSave();
        }
}

function countPoints() {

    pointArray = pointArray.sort((a, b) => b - a);

    points = pointArray[0] - pointArray[1];

    playerPoints += points;

    pointArray = [];

    playerPoint.innerHTML = "Dina poäng: " + playerPoints;


}

function localSave() {
    localStorage.setItem('recentScore', playerPoints);
    location.href = './end.html';
}

//Hämtar alla knappar med klass col-2 (se ovanför)
btns.forEach(button => {

    button.addEventListener("click", function () {




        let change = document.getElementById(removedCard);
        change.classList.remove("rightCard");
        let guessedCard = parseInt(button.id);
        





        if (removedCard == button.id) {


            remove = cards.splice(Math.floor(Math.random() * cards.length), 1);
            removedCard = parseInt(remove);
            changeCards();
            showCards();


            playerPoints -= 2;
            text.innerHTML = "Rätt!"
            playerPoint.innerHTML = "Dina poäng: " + playerPoints;


            count = 0;


        



        } else if (removedCard < button.id) {
            count++;
            text.innerHTML = "Lägre"



        } else if (removedCard > button.id) {
            count++;
            text.innerHTML = "Högre"

        }

        if (count == 2) {
            //Visar vilket kort som kom upp när du har fel
            //effekt som visar vilket kort som var rätt med en effekt

            change.classList.add("rightCard");

            changeCards()

            pointArray.push(removedCard);

            //ger ett nytt kort av de återstående i leken
            remove = cards.splice(Math.floor(Math.random() * cards.length), 1);
            removedCard = parseInt(remove);
            playerPoint.innerHTML = "Dina poäng: " + playerPoints;
            text.innerHTML = "Nytt kort"
            count = 0;
            pointArray.push(guessedCard);

            countPoints();
            showCards();


        }



    }

    )
})


showCards();

