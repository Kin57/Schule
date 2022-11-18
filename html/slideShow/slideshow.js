let pictures = document.getElementById("pictures");
let counter = 0;
let NUMBER_OF_IMG = 5;

for (let i = 1; i <= NUMBER_OF_IMG; i++) {
    pictures.innerHTML += '<div id="imgPosition' + i + '"></div>'
}
displayPictures();

function displayPictures() {
    pictures.innerHTML = '';
    for (let i = 1; i <= NUMBER_OF_IMG; i++) {
        pictures.innerHTML += '<div id="imgPosition' + i + '"></div>';
    }

    for (let i = 1; i <= NUMBER_OF_IMG; i++) {
        let temp = i + counter;
        if (temp > NUMBER_OF_IMG) {
            temp -= NUMBER_OF_IMG;
        }
        document.getElementById('imgPosition' + temp).innerHTML = '<img src="img' + i + '.jpg" style="width: 100%;">';
    }
}

function left() {
    counter++;
    if (counter > NUMBER_OF_IMG) {
        counter = 0;
    }
    displayPictures();
}

function right() {
    counter--;
    if (counter < 0) {
        counter = NUMBER_OF_IMG;
    }
    displayPictures();
}