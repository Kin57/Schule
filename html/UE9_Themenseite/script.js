let content = document.getElementById("content");
cardArray = [
    ['name', 12, 'lalala', 'img/test.jpg'],
    ['name', 12, 'lalala', 'img/test.jpg'],
    ['name', 12, 'lalala', 'img/test.jpg'],
    ['name', 12, 'lalala', 'img/test.jpg'],
    ['name', 17, 'lalala', 'img/test.jpg']
]

for(let i = 0; i < cardArray.length; i++){
    newCard(cardArray[i][0],cardArray[i][1],cardArray[i][2],cardArray[i][3]);
}
function newCard(name, price, text, imgSrc){
    let cardExample = '' +
        '<div class="card">\n' +
        '  <img src="'+ imgSrc +'" style="width:100%">\n' +
        '  <h1>'+ name +'</h1>\n' +
        '  <p class="price">'+ price +'$</p>\n' +
        '  <p>'+ text +'</p>\n' +
        '  <p><button>Add to Cart</button></p>\n' +
        '</div>';
    content.innerHTML += cardExample;
}