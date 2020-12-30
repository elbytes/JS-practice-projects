var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPatterns = [];
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function(){
    var userChosenColor = this.id;
    playSounds(userChosenColor);
    userClickedPatterns.push(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPatterns.length-1);
 });


function nextSequence(){
    $("#level-title").text("Level " + level);
    var randomNumber =  Math.floor(Math.random() *4);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    $("#"+ randomColor).fadeOut(100).fadeIn(100);
    playSounds(randomColor);
    level++;
}

function playSounds(name){
    const buttonSound = new Audio("sounds/" + name + ".mp3");
    buttonSound.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(()=>{
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    console.log(gamePattern[currentLevel]);
    console.log(userClickedPatterns[currentLevel]);
    if(userClickedPatterns[currentLevel] == gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPatterns.length == gamePattern.length){
            console.log("success round");
            setTimeout(()=>{
                nextSequence();
            }, 1000);
            userClickedPatterns=[];
        }
    } else{console.log("fail");}
    
}







