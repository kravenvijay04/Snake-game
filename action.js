const gameboard = document.getElementById('gameboard');
const context = gameboard.getContext('2d');
let scoreboard=document.getElementById("scoreval")

let WIDTH=gameboard.width;
let HEIGHT=gameboard.height;
let UNIT=25;
let Xfood;
let Yfood;
let Xvel=25;
let Yvel=0;
let score =0;
let active=true;
let started=false;

let snake=[
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
]
startgame();

window.addEventListener('keydown',Keypress);

function startgame(){
    context.fillStyle='#212121';
    context.fillRect(0,0,WIDTH,HEIGHT)
    createfood();
    displayfood();
    drawsnake();
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

function Timemovement(){
if(active){
    setTimeout(()=>{
    clearboard();
    displayfood();
    movesnake();
    drawsnake();
    checkgameover();
    Timemovement();
    },100)
}
else{
    clearboard();
    context.font="bold 50px serif"
    context.fillStyle="white"
    context.textAlign="center"
    context.fillText("Game Over!!",WIDTH/2,HEIGHT/2)
}

}
function checkgameover(){
switch(true){
    case(snake[0].x<0):
    case(snake[0].x>WIDTH):
    case(snake[0].y<0):
    case(snake[0].y>HEIGHT):
        active=false;
        break;
}
}

function movesnake(){
    let head={
        x:snake[0].x+Xvel,
        y:snake[0].y+Yvel
    }
    snake.unshift(head);
    if (snake[0].x==Xfood && snake[0].y==Yfood){
        createfood();
        score+=1;
        scoreboard.textContent=score;
    }
    else{
        snake.pop();
    }
    
}
function clearboard(){
    context.fillStyle='#212121';
    context.fillRect(0,0,WIDTH,HEIGHT)
}

function Keypress(event){

if (!started){
    started=true;
    Timemovement();
}
    const LEFT =37;
    const UP =38;
    const RIGHT =39;
    const DOWN = 40;

    switch(true){
        case(event.keyCode==LEFT && Xvel!=UNIT):
            Xvel=-UNIT;
            Yvel=0;
            break;
        case(event.keyCode==RIGHT && Xvel!=-UNIT):
            Xvel=UNIT;
            Yvel=0;
            break;
        case(event.keyCode==UP && Yvel!=UNIT):
            Xvel=0;
            Yvel=-UNIT;
            break;
        case(event.keyCode==DOWN && Yvel!=-UNIT):
            Xvel=0;
            Yvel=UNIT;
            break;
    }
}