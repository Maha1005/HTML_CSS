let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    lose:0,
    ties:0
};
/* if(score===null){
score={
    wins:0,
    lose:0,
    ties:0
};
}*/
updateScore();
let isAutoPlaying=false;
let intervalId;
document.querySelector('.auto-play')
.addEventListener('click',()=>autoplay());
function autoplay(){
    if(!isAutoPlaying){
        document.querySelector('.auto-play').innerHTML="Stop Playing"
     intervalId=setInterval(()=> {
        const playerMove=pickComputerMove();
        playGame(playerMove);
     },1000);
    isAutoPlaying=true;
}
    else{
        document.querySelector('.auto-play').innerHTML="Auto Play"

        clearInterval(intervalId);
        isAutoPlaying=false;
     }
}
document.querySelector('.js-rock-button')
.addEventListener('click',()=>
    {playGame('rock')}
)
document.querySelector('.js-paper-button')
.addEventListener('click',()=>
    {playGame('paper')}
)
document.querySelector('.js-scissors-button')
.addEventListener('click',()=>
    {playGame('scissors')}
)
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        playGame('rock');
    }
    else if(event.key==='p'){
        playGame('paper')
    }
    else if(event.key==='s'){
        playGame('scissors')
    }
    else if(event.key==='a'){
       autoplay();
    }
    else if(event.key==='Backspace'){
        confirmation();
    } 
})
function confirmation(){
    document.querySelector('.js-reset-confirmation')
    .innerHTML=`Are you sure you want to reset the score ?
    <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
     <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>`

document.querySelector('.js-reset-confirm-yes')
.addEventListener('click',()=>{
    reset();
    hideconfirmation();
})
document.querySelector('.js-reset-confirm-no')
.addEventListener('click',()=>{
    hideconfirmation();
})
}
function hideconfirmation(){
    document.querySelector('.js-reset-confirmation')
    .innerHTML='';
}
function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'You lose.';
} else if (computerMove === 'paper') {
result = 'You win.';
} else if (computerMove === 'scissors') {
result = 'Tie.';
}

} else if (playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'You win.';
} else if (computerMove === 'paper') {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You lose.';
}

} else if (playerMove === 'rock') {
if (computerMove === 'rock') {
result = 'Tie.';
} else if (computerMove === 'paper') {
result = 'You lose.';
} else if (computerMove === 'scissors') {
result = 'You win.';
}
}
if(result==='You win.'){
score.wins+=1;
}
else if(result === 'You lose.'){
score.lose+=1;
}
else if(result==='Tie.'){
score.ties+=1;
}
localStorage.setItem('score',JSON.stringify(score));
updateScore();
document.querySelector('.js-result').
innerHTML=result;
document.querySelector('.js-moves')
.innerHTML=`You <img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = 'scissors';
}

return computerMove;
}
function reset(){

score.wins=0;
score.lose=0;
score.ties=0;
localStorage.removeItem('score')
updateScore();
}
document.querySelector('.reset').addEventListener('click',()=>confirmation())
function updateScore(){
document.querySelector('.js-score').innerHTML=`Wins:${score.wins}.Lose:${score.lose}.Ties:${score.ties}`;
}
/* function updateResult(){
document.querySelector('.js-result').
innerHTML=
}*/