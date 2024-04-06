const gameboard = document.getElementById('gameboard');
const context = gameboard.getContext('2d');

let WIDTH=gameboard.width;
let HEIGHT=gameboard.height;
let UNIT=25;
startgame();

function startgame(){
    context.fillStyle='#212121';
    context.fillRect(0,0,WIDTH,HEIGHT)
    createfood();
    displayfood();
}
function createfood(){
Xfood=Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
Yfood=Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;
}

function displayfood(){
    context.fillStyle='red';
    context.fillRect(Xfood,Yfood,UNIT,UNIT);
}