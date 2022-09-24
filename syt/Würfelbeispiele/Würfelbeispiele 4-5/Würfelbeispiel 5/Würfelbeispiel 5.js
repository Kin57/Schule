let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let outputResult = document.getElementById("outputResult");

for(let i = 0; i < 3; i++){
    let doubleDice1 = newDoubleDice();
    output1.innerHTML = "Spieler 1:" + doubleDice1;
    
    let doubleDice2 = newDoubleDice();
    output2.innerHTML = "Spieler 2:" + doubleDice2;

    if(doubleDice1 > doubleDice2){
        outputResult.innerHTML = "Spieler 1 gewinnt";
    }else if(doubleDice1 < doubleDice2){
        outputResult.innerHTML = "Spieler 2 gewinnt";
    }else{
        outputResult.innerHTML = "Unentschieden";
    }
}




function newDoubleDice(){
    let doubleDice = newDice();
    return doubleDice += newDice();
}

function newDice(){
    return Math.floor(Math.random() * 6) + 1;
}