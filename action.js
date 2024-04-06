const gameboard = document.getElementById('gameboard');
const context = gameboard.getContext('2d');

startgame();

function startgame(){
    context.fillStyle='black';
    context.fillRect(0,0,500,500)
}