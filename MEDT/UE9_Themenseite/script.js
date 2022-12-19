let content = document.getElementById("content");
let output = '';
const MUSHROOM_ARRAY = [
    ['Trüffel', 0, '', 'img/trueffel.jpg'],
    ['Champignons', 0, '', 'img/champignons.jpg'],
    ['Fliegenpilz', 0, '', 'img/fliegenpilz.jpg'],
    ['name', 12, '', 'img/test.jpg'],
    ['name', 17, 'lalala', 'img/test.jpg']
]


for(let i = 0; i < MUSHROOM_ARRAY.length; i++){
    if(i % 3 === 0){
        console.log('newRow()')
        content += '<div class="row" id="row'+ i +'"></div>';
    }
    newCard(MUSHROOM_ARRAY[i][0], MUSHROOM_ARRAY[i][1], MUSHROOM_ARRAY[i][2], MUSHROOM_ARRAY[i][3], i);
}


function newCard(name, price, text, imgSrc, i){
    console.log('newCard()')
    document.getElementById('row'+i).innerHTML += '' +
        '<div class="card" id="img'+ i +'">' +
        '  <div><img src="'+ imgSrc +'"></div>' +
        '  <h1>'+ name +'</h1>' +
        '  <p>'+ text +'</p>' +
        '</div>';
}