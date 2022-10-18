let output = document.getElementById("output");
let winner = document.getElementById("winner");
let lifebar1 = document.getElementById("lifebar1");
let lifebar2 = document.getElementById("lifebar2");

function newFight() {
    let life1 = 100;
    let life2 = 100;

    output.innerHTML = '';
/*
    do {
        life1 = attack(life1);
        lifebar1.innerHTML = '<div style="background: rgb(0,0,0); background: linear-gradient(90deg, rgba(0,0,0,1) '+ life1 +'%, rgba(151,0,0,1) 50%);"></div>';
        if (life1 > 0) {
            life2 = attack(life2);
            lifebar2.innerHTML = '<div style="background: rgb(151,0,0); background: linear-gradient(90deg, rgba(0,0,0,1) '+ 100-life2 +'%, rgba(0,0,0,1) 50%);"></div>';
        } else {
            winner.innerHTML += "<p>Player 2 Wins</p>";
        }
    } while (life2 > 0);
    winner.innerHTML += "<p>Player 1 Wins</p>";*/
}

function nextattack() {
    roll1 = newDice();
    player1.innerHTML += '<img src="">';
    
    roll2 = newDice();
    player1.innerHTML += '<img src="">';

    if(roll1 > roll2){
        life2 - attack2
    }else if(roll1 < roll2){
        life1 - attack2
    }else{

    }
}

function newDice() {
    return Math.floor(Math.random() * 6) + 1;
}