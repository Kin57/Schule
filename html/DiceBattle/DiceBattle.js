let winner = document.getElementById("winner");
winner.innerHTML += "<p>test1</p>"
function newFight() {
    let life1 = 13;
    let life2 = 13;

    do{
        life1 = attack(life1);
        if (life1 > 0) {
            life2 = attack(life2);
        } else {
            winner.innerHTML = "<p>Player 2 Wins</p>";
        }
    }while(life2 > 0);
    winner.innerHTML = "<p>Player 1 Wins</p>";
}

function attack(life){
    winner.innerHTML += "<p>testattack</p>"
    return life-newDice();
}

function newDice() {
    return Math.floor(Math.random() * 6) + 1;
}