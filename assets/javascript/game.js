// Generate a random number
// var randomNumber = Math.floor(Math.random() *50) +30;
// console.log(randomNumber);
var buttonNumber = Math.floor(Math.random () *9 + 6);
var currentScore = 0;
// var addifier = Math.floor(Math.random() *5) +1;
var addifier = [Math.floor(Math.random() *4) +1, Math.floor(Math.random() *3) +1, Math.floor(Math.random() *8) +1,Math.floor(Math.random() *6) +1,];
var randomNumber = Math.floor(Math.random() *50) +25;
var wins = 0;
var losses = 0;

var winCheck = function () {
    if (currentScore == randomNumber) {
        alert(`Nice Job you equaled ${randomNumber}.  You win!!!`);
        wins = wins+1;
        $("#wins").text(`Wins: ${wins}`);
        
    }
    else if (currentScore > randomNumber) {
        alert(`Sorry.  You went over ${randomNumber}.  You Lose :-(`);
        losses = losses+1;
        $("#losses").text(`Losses: ${losses}`);
        console.log("you went over");
    }
}

gameReset();
function gameReset() {
    var randomNumber = Math.floor(Math.random() *50) +25;
    var wins = 0;
    var losses = 0;
    console.log(randomNumber);
    $("#goal-number").text(`Number Goal = ${randomNumber}`);
  }
// var randomNumber = Math.floor(Math.random() *50) +25;
//  Set up four crystals that generate random values
$("#ruby").on("click", function () {
    var clickNumber = buttonNumber + addifier[2];
    currentScore = currentScore + clickNumber;
    $("#current-number").text(`Your Current Score is ${currentScore}`);
    winCheck();
});

$("#diamond").on("click", function () {
    var clickNumber = buttonNumber + addifier[1];
    console.log(clickNumber);
    currentScore = currentScore + clickNumber;
    $("#current-number").text(`Your Current Score is ${currentScore}`);
    winCheck();
});

$("#sapphire").on("click", function () {
    var clickNumber = buttonNumber + addifier[0];
    console.log(clickNumber);
    currentScore = currentScore + clickNumber;
    $("#current-number").text(`Your Current Score is ${currentScore}`);
    winCheck();
});

$("#emerald").on("click", function () {
    var clickNumber = buttonNumber + addifier[3];
    console.log(clickNumber);
    currentScore = currentScore + clickNumber;
    $("#current-number").text(`Your Current Score is ${currentScore}`);
    winCheck();
});

//Set up Wins and Losses
