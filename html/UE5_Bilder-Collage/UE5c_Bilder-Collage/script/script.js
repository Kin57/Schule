
    let xhttp = new XMLHttpRequest();
document.getElementById('content').innerHTML += '<div id="contentdiv"></div>'
let content = document.getElementById('contentdiv');
let counter = 1;
content.innerHTML += '<div id="button"></div>';
let i = 0;

showMore()

function showMore() {
    xhttp.onreadystatechange=function() {
        if(this.readyState === 4 && this.status === 200){
            let image = JSON.parse(this.responseText);
            console.log(image)
            if (counter > 15) {
                document.getElementById("button").innerHTML = '<p id="sry">Das war leider alles</p>';//wenn ich die variable nutze gehts nicht, drum hab ichs so
            } else {
                console.log(counter)
                document.getElementById("button").innerHTML = '<button id="showMeMore" onclick="showMore()">mehr Bilder</button>';//wenn ich die variable nutze gehts nicht, drum hab ichs so
                content.innerHTML += `<div class="row" id="${i}"></div>`;
                for (let j = 0; j < 3; j++) {
                    let img = document.getElementById(`${i}`);
                    img.innerHTML += image;
                    counter++;
                }
                i++
            }
       }
    }
    xhttp.open("GET", "https://picsum.photos/500?random="+counter, true);
    xhttp.send();
}