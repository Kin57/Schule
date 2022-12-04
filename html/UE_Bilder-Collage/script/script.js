let content = document.getElementById('content');

for (let i = 1; i <= 15; i++) {
    let row = Math.floor((i - 1) / 3 + 1);
    let column = (i - 1) % 3 + 1;
    content.innerHTML += `<img class="row${row} column${column}" src="../img/city${i}">`;
}
/*
const ROWS = 5;
const COLUMNS = 3;
let content = document.getElementById('content');

for (let i = 0; i < ROWS; i++) {
    content += `<div id="row${i}"></div>`;
    let currentRow = document.getElementById(`row${i}`);
    for (let j = 0; j < COLUMNS; j++) {
        console.log(`row${i}, column${j}`);
        currentRow += `<div class="imgBox row${i} collumn${j}"></div>`;
    }
}

for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
        let currentBox = document.getElementsByClassName(`imgBox row${i} column${j}`);
        currentBox = `<img src="city${(i - 1) * COLUMNS + j}">`;
    }
}
*/