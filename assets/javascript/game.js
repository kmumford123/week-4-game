// // Generate a random number
// var randomNumber = Math.floor(Math.random() *100) +58;
// // console.log(randomNumber);
// var buttonNumber = Math.floor(Math.random () *5);
// var currentScore = 0;
// // var addifier = Math.floor(Math.random() *5) +1;
// var addifier = [Math.floor(Math.random() *4) +1, Math.floor(Math.random() *3) +1, Math.floor(Math.random() *8) +1,Math.floor(Math.random() *6) +1,];
// // var crystals = [Ruby, Diamond, Sapphire, Emerald];
// var wins = 0;
// var losses = 0;

// Create Crystal buttons
$(document).ready (function () {
            // Generate a random number
            var randomNumber = Math.floor(Math.random() *100) +58;
            // console.log(randomNumber);
            var buttonNumber = Math.floor(Math.random () *5);
            var currentScore = 0;
            // var addifier = Math.floor(Math.random() *5) +1;
            var addifier = [Math.floor(Math.random() *4) +1, Math.floor(Math.random() *3) +1, Math.floor(Math.random() *8) +1,Math.floor(Math.random() *6) +1,];
            // var crystals = [Ruby, Diamond, Sapphire, Emerald];
            var wins = 0;
            var losses = 0;
            var crystals = ["Ruby", "Diamond", "Sapphire", "Emerald"];
                for (var i = 0; i < crystals.length; i ++) {
                    var cbuttons = $(`<button id=${crystals[i]}>`);       
                    cbuttons.addClass("btn btn-primary");
                    cbuttons.attr("data-button", crystals[i]);
                    //  cbuttons.attr("value", addifier[i]);
                    cbuttons.text(crystals[i]);
                    var myadder = addifier.indexOf(crystals[i]);
                    console.log(myadder + " is the answer");
                    $("#ButtonItUp").append(cbuttons);
                        }  

var winCheck = function () {
    
    if (currentScore == randomNumber) {
        alert(`Nice Job you equaled ${randomNumber}.  You win!!!`);
        wins = wins+1;
        $("#wins").text(`Wins: ${wins}`);
        gameReset();
        
    }
    else if (currentScore > randomNumber) {
        alert(`Sorry.  You went over ${randomNumber}.  You Lose :-(`);
        losses = losses+1;
        $("#losses").text(`Losses: ${losses}`);
        gameReset();
        console.log("you went over");
    }
}

gameReset();
function gameReset() {
    var randomNumber = Math.floor(Math.random() *100) +58;
    var buttonNumber = Math.floor(Math.random () *5);
    var currentScore = 0;
    // var addifier = Math.floor(Math.random() *5) +1;
    var addifier = [Math.floor(Math.random() *4) +1, Math.floor(Math.random() *3) +1, Math.floor(Math.random() *8) +1,Math.floor(Math.random() *6) +1,];
    $("#goal-number").text(`Number Goal = ${randomNumber}`);
    $("#current-number").text(`Your Current Score is ${currentScore}`)
  }
// var randomNumber = Math.floor(Math.random() *50) +25;
//  Set up four crystals that generate random values
$("#ButtonItUp").on("click", function () {
    var clickNumber = buttonNumber + 2;
    currentScore = currentScore + clickNumber;
    console.log(clickNumber);
    $("#current-number").text(`Your Current Score is ${currentScore}`);
    winCheck();
});
//These are possible ways to access the buttons by id
                        // $("#diamond").on("click", function () {
                        //     var clickNumber = buttonNumber + addifier[1];
                        //     console.log(clickNumber);
                        //     currentScore = currentScore + clickNumber;
                        //     $("#current-number").text(`Your Current Score is ${currentScore}`);
                        //     winCheck();
                        // });

                        // $("#sapphire").on("click", function () {
                        //     var clickNumber = buttonNumber + addifier[0];
                        //     console.log(clickNumber);
                        //     currentScore = currentScore + clickNumber;
                        //     $("#current-number").text(`Your Current Score is ${currentScore}`);
                        //     winCheck();
                        // });

                        // $("#emerald").on("click", function () {
                        //     var clickNumber = buttonNumber + addifier[3];
                        //     console.log(clickNumber);
                        //     currentScore = currentScore + clickNumber;
                        //     $("#current-number").text(`Your Current Score is ${currentScore}`);
                        //     winCheck();
                        // });
if (currentScore == randomNumber) {
    alert(`Nice Job you equaled ${randomNumber}.  You win!!!`);
    wins = wins+1;
    $("#wins").text(`Wins: ${wins}`);
    gameReset();
    
}
else if (currentScore > randomNumber) {
    alert(`Sorry.  You went over ${randomNumber}.  You Lose :-(`);
    losses = losses+1;
    $("#losses").text(`Losses: ${losses}`);
    gameReset();
    console.log("you went over");
}
});


//Set up Wins and Losses
