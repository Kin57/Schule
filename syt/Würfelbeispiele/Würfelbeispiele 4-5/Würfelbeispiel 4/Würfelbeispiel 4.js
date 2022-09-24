let output = document.getElementById("output");

let doubleDice = newDoubleDice();
console.log(doubleDice);

output.innerHTML = doubleDice;

function newDoubleDice(){
    let doubleDice = newDice();
    return doubleDice += newDice();
}

function newDice(){
    return Math.floor(Math.random() * 6) + 1;
}