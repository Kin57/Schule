function loadPokemon(){
    let xhttp = new XMLHttpRequest();
    let pokeName = document.getElementById("input").value;
    console.log(pokeName);

    xhttp.onreadystatechange=function() {
        if(this.readyState === 4 && this.status === 200){
            let pokemon = document.getElementById("pokemon");
            let currentPokemon = JSON.parse(this.responseText);
            console.log(currentPokemon);

            pokemon.innerHTML = '<img src="'+currentPokemon.sprites.front_default+'"><br>';
            pokemon.innerHTML += 'Name: '+currentPokemon.name+'<br>';
            pokemon.innerHTML += 'Type: '+currentPokemon.types[0].type.name+'<br>';
            pokemon.innerHTML += '<br>';
        }
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokeName, true);
    xhttp.send();
}