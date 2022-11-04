function loadPokemon() {
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("erg").innerHTML = this.responseText;
        }
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/", true);

    xhttp.send();
}

function main(){
    let name = document.getElementById('name').value;
    loadPokemon();    
}

function printPokemon(){
    pokemon.innerHTML=('<p>Name: '+pokemon.name+'</p>');
    pokemon.innerHTML=('<p>Name: '+pokemon.name+'</p>');
    pokemon.innerHTML=('<p>Name: '+pokemon.name+'</p>');
}
