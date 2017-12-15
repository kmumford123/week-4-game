// Create Crystal buttons
$(document).ready(function() {
    // Generate a random number
    var randomNumber = Math.floor(Math.random() * 100) + 58;
    // console.log(randomNumber);
    var buttonNumber = Math.floor(Math.random() * 5);
    var currentScore = 0;
    // var addifier = Math.floor(Math.random() *5) +1;
    var addifier = [Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 6) + 1, ];
    // var crystals = [Ruby, Diamond, Sapphire, Emerald];
    var wins = 0;
    var losses = 0;
    $("#goal-number").text(`Number Goal = ${randomNumber}`);
    //create buttons
    var crystals = ["Ruby", "Diamond", "Sapphire", "Emerald"];
    for (var i = 0; i < crystals.length; i++) {
        var cbuttons = $(`<a id=${crystals[i]}>`);
        cbuttons.addClass("btn-get-started");
        // cbuttons.attr("data-button", crystals[i]);
        //  cbuttons.attr("value", addifier[i]);
        cbuttons.text(crystals[i]);
        $("#ButtonItUp").append(cbuttons);
    }

    // access the buttons by id

    $("#Diamond").on("click", function() {
        var clickNumber = buttonNumber + addifier[1];
        console.log(clickNumber);
        currentScore = currentScore + clickNumber;
        $("#current-number").text(`Your Current Score is ${currentScore}`);
        winCheck();
    });

    $("#Ruby").on("click", function() {
        var clickNumber = buttonNumber + addifier[1];
        console.log(clickNumber);
        currentScore = currentScore + clickNumber;
        $("#current-number").text(`Your Current Score is ${currentScore}`);
        winCheck();
    });

    $("#Sapphire").on("click", function() {
        var clickNumber = buttonNumber + addifier[0];
        console.log(clickNumber);
        currentScore = currentScore + clickNumber;
        $("#current-number").text(`Your Current Score is ${currentScore}`);
        winCheck();
    });

    $("#Emerald").on("click", function() {
        var clickNumber = buttonNumber + addifier[3];
        console.log(clickNumber);
        currentScore = currentScore + clickNumber;
        $("#current-number").text(`Your Current Score is ${currentScore}`);
        winCheck();
    });
    var winCheck = function() {

        if (currentScore == randomNumber) {
            alert(`Nice Job you equaled ${randomNumber}.  You win!!!`);
            wins = wins + 1;
            $("#wins").text(`Wins: ${wins}`);
            gameReset();

        } else if (currentScore > randomNumber) {
            alert(`Sorry.  You went over ${randomNumber}.  You Lose :-(`);
            losses = losses + 1;
            $("#losses").text(`Losses: ${losses}`);
            gameReset();
            console.log("you went over");
        }
    }

    function gameReset() {
        randomNumber = Math.floor(Math.random() * 100) + 58;
        buttonNumber = Math.floor(Math.random() * 5);
        currentScore = 0;
        // var addifier = Math.floor(Math.random() *5) +1;
        var addifier = [Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 3) + 1, Math.floor(Math.random() * 8) + 1, Math.floor(Math.random() * 6) + 1, ];
        $("#goal-number").text(`Number Goal = ${randomNumber}`);
        $("#current-number").text(`Your Current Score is ${currentScore}`)
    }
});
//Set up Wins and Losses