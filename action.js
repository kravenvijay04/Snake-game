const gameboard = document.getElementById('gameboard');
const context = gameboard.getContext('2d');

let WIDTH=gameboard.width;
let HEIGHT=gameboard.height;
let UNIT=25;
let Xfood;
let Yfood;
let Xvel=25;
let Yvel=0;

let snake=[
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
]
startgame();

function startgame(){
    context.fillStyle='#212121';
    context.fillRect(0,0,WIDTH,HEIGHT)
    createfood();
    displayfood();
    Timemovement();
}
function clearboard(){
    context.fillStyle='#212121';
    context.fillRect(0,0,WIDTH,HEIGHT)
}
function createfood(){
Xfood=Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
Yfood=Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;
}
function displayfood(){
    context.fillStyle='red';
    context.fillRect(Xfood,Yfood,UNIT,UNIT);
}
function drawsnake(){
    context.fillStyle="aqua"
    context.strokeStyle="black"
    snake.forEach((snakepart)=>{
        context.fillRect(snakepart.x,snakepart.y,UNIT,UNIT)
        context.strokeRect(snakepart.x,snakepart.y,UNIT,UNIT)
    })
}
function movesnake(){
    let head={
        x:snake[0].x+Xvel,
        y:snake[0].y+Yvel
    }
    snake.unshift(head);
    snake.pop();
}
function Timemovement(){
    setTimeout(()=>{
    clearboard();
    displayfood();
    movesnake();
    drawsnake();
    Timemovement();
    },100)
}