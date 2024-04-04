var topPosition= 50;
var leftPosition= 0;

var ball = document.getElementById('ball')
ball.style.position = "absolute"

setInterval("ballMove()", 40)

function ballMove() {


ball.style.left = leftPosition + "px";
ball.style.top = topPosition + "px";

leftPosition +=15
topPosition +=5

if(leftPosition >= window.innerWidth - 90){
    topPosition = 50
    leftPosition = 0
}
}