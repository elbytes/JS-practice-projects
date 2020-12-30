var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPatterns = [];

function nextSequence(){
    return Math.floor(Math.random() *4);
}

var randomNumber = nextSequence();
var randomColor = buttonColors[randomNumber];
gamePattern.push(randomColor);
const buttonSound = new Audio("sounds/" + randomColor + ".mp3");

$("#"+ randomColor).fadeOut(10).fadeIn(10);
//buttonSound.play();

$(".btn").on("click", function(){
    var userChosenColor = this.id;
   console.log(userChosenColor) 
});






