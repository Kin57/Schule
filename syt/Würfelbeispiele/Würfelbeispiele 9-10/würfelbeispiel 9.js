let score = document.getElementById("score");
let output = document.getElementById("output");
let score1 = 0;
let score2 = 0;

let username1;
document.getElementById("name1input").innerHTML=('<input id="name1" type="text" placeholder="Name">');

let username2;
document.getElementById("name2input").innerHTML=('<input id="name2" type="text" placeholder="Name">');


function newGame(){
    score.innerHTML = '';
    output.innerHTML = '';
    score1 = 0;
    score2 = 0;

    username1 = document.getElementById("name1").value;
    username2 = document.getElementById("name2").value;
    
    for(let i = 0; i < 15; i++){
        output.innerHTML += '<div class = "round"></div>';
        let round = document.getElementsByClassName("round");

        let dice1 = newDice();
        round[i].innerHTML += '<p>'+ username1+':</p>'; 
        round[i].innerHTML += '<img class="diceFace" src = "Würfelbeispiele_6-8_CubeClipArt/PinClipart_cube_' + dice1 + '.png">';
    
        let dice2 = newDice();
        round[i].innerHTML += '<p>'+ username2+':</p>'; 
        round[i].innerHTML += '<img class="diceFace" src = "Würfelbeispiele_6-8_CubeClipArt/PinClipart_cube_' + dice2 + '.png">';
        
        if(dice1 > dice2){
            round[i].innerHTML += '<p>'+ username1+' gewinnt</p>';
            score1++;
        }else if(dice1 < dice2){
            round[i].innerHTML += '<p>'+ username2+' gewinnt</p>';
            score2++;
        }else{
            round[i].innerHTML += '<p>Unentschieden</p>';
        }
    }

    score.innerHTML += '<p>Score '+ username1+': ' + score1 + '</p>';
    score.innerHTML += '<p>Score '+ username2+': ' + score2 + '</p>';
    if(score1 > score2){
        score.innerHTML += '<p>'+ username1+' gewinnt</p>';
    }else if(score1 < score2){
        score.innerHTML += '<p>'+ username2+' gewinnt</p>';
    }else{
        score.innerHTML += '<p>Unentschieden</p>';
    }
}

function newDice(){
    return Math.floor(Math.random() * 6) + 1;
}