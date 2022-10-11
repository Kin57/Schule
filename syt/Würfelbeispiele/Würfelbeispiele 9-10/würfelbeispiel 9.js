let score = document.getElementById("score");
let output = document.getElementById("output");
let score1 = 0;
let score2 = 0;

newGame();
function newGame(){
    score.innerHTML = '';
    output.innerHTML = '';
    score1 = 0;
    score2 = 0;

    for(let i = 0; i < 15; i++){
        output.innerHTML += '<div class = "round"></div>';
        let round = document.getElementsByClassName("round");

        let dice1 = newDice();
        round[i].innerHTML += "<p>Spieler 1:</p>"; 
        round[i].innerHTML += '<img src = "../Würfelbeispiele_6-8_CubeClipArt/PinClipart_cube_' + dice1 + '.png">';
    
        let dice2 = newDice();
        round[i].innerHTML += "<p>Spieler 2:</p>"; 
        round[i].innerHTML += '<img src = "../Würfelbeispiele_6-8_CubeClipArt/PinClipart_cube_' + dice2 + '.png">';
        
        if(dice1 > dice2){
            round[i].innerHTML += "<p>Spieler 1 gewinnt</p>";
            score1++;
        }else if(dice1 < dice2){
            round[i].innerHTML += "<p>Spieler 2 gewinnt</p>";
            score2++;
        }else{
            round[i].innerHTML += "<p>Unentschieden</p>";
        }
    }

    score.innerHTML += '<p>Score Spieler 1: ' + score1 + '</p>';
    score.innerHTML += '<p>Score Spieler 2: ' + score2 + '</p>';
    if(score1 > score2){
        score.innerHTML += '<p>Spieler 1 gewinnt</p>';
    }else if(score1 < score2){
        score.innerHTML += '<p>Spieler 2 gewinnt</p>';
    }else{
        score.innerHTML += '<p>Unentschieden</p>';
    }
    console.log(score);
}

function newDice(){
    return Math.floor(Math.random() * 6) + 1;
}