let content = document.getElementById('content');

let counter = 1;
for (let i = 0; i < 5; i++) {
    content.innerHTML += `<div class="row" id="${i}"></div>`;
    for (let j = 0; j < 3; j++) {
        let img = document.getElementById(`${i}`);
        img.innerHTML += `<img class="column${j}" src="img/city${counter}.jpg">`;
        counter++;
    }
}

