// Generate a random number
var randomNumber = Math.floor(Math.random()*50);

//  Set up four crystals that generate random values
var buttonNumber = Math.floor(Math.random () * 12);
$(".#symbol-buttons").on("click", function () {
    $("#button-value").html(`<p>${buttonNumber}<p>`);
});