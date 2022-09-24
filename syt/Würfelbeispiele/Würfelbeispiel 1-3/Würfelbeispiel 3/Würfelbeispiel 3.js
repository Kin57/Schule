let output = document.getElementById("output");
let ram;
let amountOfDices = 15;

output.innerHTML ="Dices: "
for(let i = 0; i < amountOfDices; i++){
        ram = Math.floor(Math.random() * 6) + 1;
        output.innerHTML += ram;
        if(i < amountOfDices - 1){
            output.innerHTML += ", ";
        }
}