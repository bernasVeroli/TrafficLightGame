const stop = document.getElementById('stop');
const atention = document.getElementById('atention');
const go = document.getElementById('go');
const gameOver = document.getElementById('gameOver');
const restart = document.getElementById('restart');

var noMove = false;

restart.style.display = 'none';

var time = 0;
setInterval(function () {
    time ++;

    if (time == 1){
        stop.src = './sOff.png';
        go.src =  './sGo.png';
        noMove = false;
    }
    if (time == 2){
        go.src = './sOff.png';
        atention.src = './sAtention.png';
    }
    if (time == 3){
        atention.src = './sOff.png';
        stop.src = './sStop.png';
        noMove = true;

    }

    if (time == 3) {
        time = 0
    }

}, 2000);

/// PLAYER
const player = document.getElementById("player");
const fruit = document.getElementById("point");
const score = document.getElementById("score");

function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const pointRect = point.getBoundingClientRect();
  
    if (playerRect.left < pointRect.right &&
        playerRect.right > pointRect.left &&
        playerRect.top < pointRect.bottom &&
        playerRect.bottom > pointRect.top) {
      point.style.display = "none";
      setTimeout(function() {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        
        if (x < 30) {
            x = 30;
          }
          
          if (x > window.innerWidth - 30 - point.offsetWidth) {
            x = window.innerWidth - 30 - point.offsetWidth;
          }
          
          if (y < 30) {
            y = 30;
          }
          
          if (y > window.innerHeight - 30 - point.offsetHeight) {
            y = window.innerHeight - 30 - point.offsetHeight;
          }

        point.style.left = x + "px";
        point.style.top = y + "px";
        point.style.display = "block";

        score.textContent ++;
      }, 400);
    }
  }
var spd = 30;
console.log("Set your velocity with");
console.log("spd = value");

document.addEventListener("keydown", function(event) {
    if (noMove == false){
    if (event.code === "KeyD") {
      if (player.offsetLeft + spd + player.offsetWidth <= window.innerWidth) {
        player.style.left = (player.offsetLeft + spd) + "px";
      }
    }
    if (event.code === "KeyA") {
      if (player.offsetLeft - spd >= 0) {
        player.style.left = (player.offsetLeft - spd) + "px";
      }
    }
    if (event.code === "KeyW") {
      if (player.offsetTop - spd >= 0) {
        player.style.top = (player.offsetTop - spd) + "px";
      }
    }
    if (event.code === "KeyS") {
      if (player.offsetTop + spd + player.offsetHeight <= window.innerHeight) {
        player.style.top = (player.offsetTop + spd) + "px";
      }
    }
} else { 
    player.style.display = "none"; 
    gameOver.textContent = 'GAME OVER';
    restart.style.display = 'inline';

}
    checkCollision();
  });

  restart.addEventListener('click', function(){
    console.log('restart');
    player.style.display = "block"; 
    gameOver.textContent = '';
    restart.style.display = 'none';
    score.textContent = 0;
  });
