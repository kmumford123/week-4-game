// Generate a random number
var randomNumber = Math.floor(Math.random() *50+30);
console.log(randomNumber);
var buttonNumber = Math.floor(Math.random () *12+2);

//  Set up four crystals that generate random values
$("#thatbutton").on("click", function () {
    console.log(buttonNumber);
    var firstNumber = buttonNumber;
    var currentNumber = firstNumber + buttonNumber;
    console.log(firstNumber);
    console.log(currentNumber);
    $("#current-number").html(`${currentNumber}`);
});

//Set up Wins and Losses

if (currentNumber === randomNumber) {
    alert(`Nice Job you equaled ${randomNumber}.  You win!!!`);
    
}
else if (currentNumber > randomNumber) {
    alert(`Sorry.  You went over ${randomNmber}.  You Lose :-(`);
}

else {
    ????
}