let pictures = document.getElementById("pictures");
let number = 0;
let numberOfPictures = 5;

for (let i = 1; i <= numberOfPictures; i++) {
    pictures.innerHTML += '<div id="imgPosition' + i + '"></div>'
}
displayPictures();

function displayPictures() {
    for (let i = 1; i <= numberOfPictures; i++) {
        let currentImg = document.getElementById('imgPosition' + i);
        currentImg.innerHTML = '<img src="img' + (i + number) + '.jpg">';
    }
}

function left() {
    number--;
    displayPictures();
}

function right() {
    number++;
    displayPictures();
}