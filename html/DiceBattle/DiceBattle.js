let output = document.getElementById("output");
let button = document.getElementById("button");

let life1 = 100;
let attack1 = 10;
let life2 = 100;
let attack2 = 10;

function newFight() {
    life1 = 100;
    life2 = 100;
    button.innerHTML = '<button onclick="nextAttack();">Next Attack</button>';
    
    output.innerHTML = '<div id="battlefield"></div>';
    let battlefield = document.getElementById("battlefield");
    
    battlefield.innerHTML += '<div id="player1"></div>';
    let player1 = document.getElementById("player1");
    player1.innerHTML += '<div id="lifebar1"></div>';
    let lifebar1 = document.getElementById("lifebar1");
    lifebar1.innerHTML = '<p>Player 1: '+life1+'</p>';
    player1.innerHTML += '<div id="dice1"></div>';
    let dice1 = document.getElementById("dice1");

    battlefield.innerHTML += '<div id="player2"></div>';
    let player2 = document.getElementById("player2");
    player2.innerHTML += '<div id="lifebar2"></div>';
    let lifebar2 = document.getElementById("lifebar2");
    lifebar2.innerHTML = '<p>Player 2: '+life2+'</p>';
    player2.innerHTML += '<div id="dice2"></div>';
    let dice2 = document.getElementById("dice2");  

    output.innerHTML += '<div id="winner"></div>';
    let winner = document.getElementById("winner"); 
    nextAttack();
}

function nextAttack() {
    let roll1 = newDice();
    dice1.innerHTML = '<img src="img/PinClipart_cube_'+roll1+'.png">';
    let roll2 = newDice();
    dice2.innerHTML = '<img src="img/PinClipart_cube_'+roll2+'.png">';

    if(roll1 > roll2){
        winner.innerHTML = '<p>Player 1 wins</p>';
        life2=life2-attack1;
        lifebar2.innerHTML = '<p>Player 2: '+life2+'</p>';
    }else if(roll1 < roll2){
        winner.innerHTML = '<p>Player 2 wins</p>';
        life1=life1-attack2;
        lifebar1.innerHTML = '<p>Player 1: '+life1+'</p>';
    }else{
        winner.innerHTML = '<p>Draw</p>';
    }
    if(life1<=0 || life2<=0){
        button.innerHTML = '<button onclick="newFight();">New Game</button>';
        if(life1<=0){
            output.innerHTML = '<p id="endResult">Player 2 wins</p>';
        }else{
            output.innerHTML = '<p id="endResult">Player 1 wins</p>';
        }
    }
}

function newDice() {
    return Math.floor(Math.random() * 6) + 1;
}