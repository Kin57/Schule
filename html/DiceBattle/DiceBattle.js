let output = document.getElementById("output");
let button = document.getElementById("button");

function newFight() {
    let life1 = 100;
    let life2 = 100;
    output.innerHTML = '<div id="player1"><div id="lifebar1"></div><div><div id="dice1"></div></div><div id="player2"><div id="lifebar2"></div><div id="dice2"></div></div><div id="winner"></div>';
    button.innerHTML = '<button onclick="nextAttack();">NEW GAME</button>';

    let winner = document.getElementById("winner");
    let lifebar1 = document.getElementById("lifebar1");
    let lifebar2 = document.getElementById("lifebar2");
    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");
}

function nextAttack() {
    let roll1 = newDice();
    dice1.innerHTML = '<img src="img/PinClipart_cube_'+roll1+'.png">';
    let roll2 = newDice();
    dice2.innerHTML = '<img src="img/PinClipart_cube_'+roll2+'.png">';

    if(roll1 > roll2){
        life2-attack1;
        lifebar2.innerHTML = '<div style="background: rgb(151,0,0); background: linear-gradient(90deg, rgba(0,0,0,1) '+ 100-life2 +'%, rgba(0,0,0,1) 50%);"></div>';
        winner.innerHTML = 'Player 1 wins';
    }else if(roll1 < roll2){
        life1-attack2;
        lifebar1.innerHTML = '<div style="background: rgb(0,0,0); background: linear-gradient(90deg, rgba(0,0,0,1) '+ life1 +'%, rgba(151,0,0,1) 50%);"></div>';
        winner.innerHTML = 'Player 2 wins';
    }else{
        winner.innerHTML = 'Draw';
    }
}

function newDice() {
    return Math.floor(Math.random() * 6) + 1;
}