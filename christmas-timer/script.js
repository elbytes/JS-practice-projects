const christmas = '25 Dec 2020';


function countdown(){
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const secondsRemaining = Math.floor((christmasDate - currentDate) / 1000);
    const minutes = Math.floor(secondsRemaining / 60) %60;
    const hours = Math.floor(secondsRemaining / 60 / 60) %24;
    const days  = Math.floor(secondsRemaining / 3600 / 24);
    const seconds =  Math.floor(secondsRemaining) % 60;

    console.log(typeof(days));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}






countdown();

setInterval(countdown, 1000);