let jokes = document.getElementById("jokes");

for (let i = 0; i < 5; i++) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let currentJoke = JSON.parse(this.responseText);

            console.log(currentJoke);
            jokes.innerHTML += '<p id="joke' + i + '">' + currentJoke.value + '</p>';
        }

    }

    xhttp.open("GET", "https://api.chucknorris.io/jokes/random", true);
    xhttp.send();
}