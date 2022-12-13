let content = document.getElementById("content");
const MUSHROOM_ARRAY = [
    ['Trüffel', 0, '', 'img/trueffel.jpg'],
    ['Champignons', 0, '', 'img/champignons.jpg'],
    ['Fliegenpilz', 0, '', 'img/fliegenpilz.jpg'],
    ['name', 12, '', 'img/test.jpg'],
    ['name', 17, 'lalala', 'img/test.jpg']
]
for(let i = 0; i < MUSHROOM_ARRAY.length; i++){
    newCard(MUSHROOM_ARRAY[i][0], MUSHROOM_ARRAY[i][1], MUSHROOM_ARRAY[i][2], MUSHROOM_ARRAY[i][3]);
}
function newCard(name, price, text, imgSrc){
    content.innerHTML += '' +
        '<div class="card">' +
        '  <div><img src="'+ imgSrc +'"></div>' +
        '  <h1>'+ name +'</h1>' +
        '  <p>'+ text +'</p>' +
        '</div>';
}