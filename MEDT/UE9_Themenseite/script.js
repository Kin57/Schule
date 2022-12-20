let content = document.getElementById("content");
const MUSHROOM_ARRAY = [
    ['Trüffel', 'img/trueffel.jpg', false, 'idk never tried it', 'Trüffel-Gericht'],
    ['Trüffel', 'img/trueffel.jpg', false, 'idk never tried it', 'Trüffel-Gericht'],
    ['Trüffel', 'img/trueffel.jpg', false, 'idk never tried it', 'Trüffel-Gericht'],
    ['Trüffel', 'img/trueffel.jpg', false, 'idk never tried it', 'Trüffel-Gericht'],
    ['Trüffel', 'img/trueffel.jpg', false, 'idk never tried it', 'Trüffel-Gericht'],
]


for(let i = 0; i < MUSHROOM_ARRAY.length; i++){
    if(i % 3 === 0){
        console.log('newRow()')
        content.innerHTML += '<div class="row" id="row'+ i +'"></div>';
     }
    newCard(MUSHROOM_ARRAY[i][0], MUSHROOM_ARRAY[i][1], MUSHROOM_ARRAY[i][2], MUSHROOM_ARRAY[i][3], MUSHROOM_ARRAY[i][4], i);
}


function newCard(name, imgSrc, isPoisonous, taste, exampleDish, i){
    console.log('newCard()')
    let color = green
    if(isPoisonous){
        color = red
    }
    document.getElementById('row'+i).innerHTML += '' +
        '<div class="card" id="img'+ i +'">' +
        '  <div><img src="'+ imgSrc +'"></div>' +
        '  <h1>'+ name +'</h1>' +
        '  <p>'+ taste +'</p>' +
        '  <p>'+ exampleDish +'</p>' +
        '</div>';
}




//'  <div style="background: '+ color +'" id="dangerSign"></div>' +
