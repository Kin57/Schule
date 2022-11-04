for(let i = 1; i<=151;i++){
    setTimeout(() => (loadPokemon(i)), 50*i);
}

function loadPokemon(i){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange=function() {

        if(this.readyState === 4 && this.status === 200){
            let pokemon = document.getElementById("pokemon");
            let currentPokemon = JSON.parse(this.responseText);
            console.log(currentPokemon);

            pokemon.innerHTML += '<img src="'+currentPokemon.sprites.front_default+'"><br>';
            pokemon.innerHTML += 'Order: '+i+'<br>';
            pokemon.innerHTML += 'Name: '+currentPokemon.name+'<br>';
            pokemon.innerHTML += 'Type: '+currentPokemon.type+'<br>';
            pokemon.innerHTML += '<br>';
        }
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+i, true);
    xhttp.send();
}