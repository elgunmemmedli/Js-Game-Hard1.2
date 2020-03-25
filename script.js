let ball = document.getElementById("top");
let bar = document.getElementById("seki");
let barX = 0;
let BallX = 0;
let BallY = 0;
let dx = 5;
let dy = 5;
let t = 0;

document.getElementById("xal").innerHTML = `Point:` + t;

let interval = setInterval(ballMove, 40);
document.onkeydown = Key;
function Key(e){
    e = e || window.event;

    if(e.keyCode =="37"){
        if(barX>0)
        barX -= 10;
    }
    if(e.keyCode == "39"){
        if(barX<500)
        barX+=10;
    }
    barMove();
}
function barMove(){
    bar.style.left = barX+"px";
}

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let  y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    ball.style.background = bgColor;
    bar.style.background = bgColor;
}

function random_bg_color2() {
    let x = Math.floor(Math.random() * 256);
    let  y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
    document.getElementById("umumi").style.borderColor= bgColor2;
}

function ballMove(){
    if(BallX < 0 || BallX >570){
        dx*= -1;
        random_bg_color() ;
        random_bg_color2();
    }
    if(BallY < 0){
        dy*= -1;
        random_bg_color() ;
        random_bg_color2();
    }
    else if((BallY > 470) &&(BallX >= barX - 25) && (BallX <= barX + 100)) {
        t++;
        document.getElementById("xal").innerHTML = `Point:` + t;
        document.getElementById("user").style.display = "none";
        dx += 1;
        dy += 1;
        dy *= -1;
    }
    else if(BallY > 470){
        document.body.style.backgroundColor = "darkred";
        document.getElementById("umumi").innerHTML = `<p>` + "Game Over" + `<br />` + `<br />` + `Total Points =` + t + `<br />` + `<br />` + `<a href="index.htm">Try Game</a>` + `</p>`;
    }
    BallX += dx;
    BallY +=dy;
    ball.style.left = BallX + "px";
    ball.style.top = BallY + "px";
}
