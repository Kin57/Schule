var xhttp = new XMLHttpRequest();

let pokemon = document.getElementById("pokemon");

for(let i = 1; i<=151;i++){
    loadPokemon();
}

function loadPokemon(){
    xhttp.onreadystatechange=function() {
        if(this.readyState == 4 && this.status == 200){
            let pokemon = JSON.parse(this.responseText);
            console.log = pokemon;
        }   
    }
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+i, true);
    xhttp.send();
}