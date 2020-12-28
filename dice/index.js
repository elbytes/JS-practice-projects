
function roll(){
    var n = Math.random();
    var n2 = Math.random();
    var randomNumber1 = Math.floor(n *6 + 1 );
    var randomNumber2 = Math.floor(n2*6 + 1);
    
    var randomImg1Source = "images/" + "dice" + randomNumber1 + ".png"; 
    var randomImg2Source = "images/" + "dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomImg1Source);
    document.querySelectorAll("img")[1].setAttribute("src", randomImg2Source);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML ="Player 1 Wins!";
    } else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else{
        document.querySelector("h1").innerHTML="It's a draw!";
    }
}