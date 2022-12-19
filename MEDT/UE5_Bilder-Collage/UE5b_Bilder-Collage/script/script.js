document.getElementById('content').innerHTML += '<div id="contentdiv"></div>'
let content = document.getElementById('contentdiv');
let counter = 1;
content.innerHTML += '<div id="button"></div>';
let i = 0;

showMore()

function showMore() {
    if (counter > 15) {
        document.getElementById("button").innerHTML = '<p id="sry">Das war leider alles</p>';//wenn ich die variable nutze gehts nicht, drum hab ichs so
    } else {
        console.log(counter)
        document.getElementById("button").innerHTML = '<button id="showMeMore" onclick="showMore()">mehr Bilder</button>';//wenn ich die variable nutze gehts nicht, drum hab ichs so
        content.innerHTML += `<div class="row" id="${i}"></div>`;
        for (let j = 0; j < 3; j++) {
            console.log(counter)
            let img = document.getElementById(`${i}`);
            img.innerHTML += `<img class="column${j}" src="img/city${counter}.jpg">`;
            counter++;
        }
        i++
    }
}