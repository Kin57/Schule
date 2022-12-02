let gameMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
let circleTurn = false;
let player1WinCounter = 0;
let player2WinCounter = 0;
let player1 = "Player 1";
let player2 = "Player 2";
let isOver = false;

function checkBox(x, y) {
    if (gameMatrix[x][y] !== 0 || isOver == true) {
        reset();
        checkBox(x, y);
        return;
    }

    if (circleTurn === true) {
        gameMatrix[x][y] = 1;
        circleTurn = false;
    } else {
        gameMatrix[x][y] = 2;
        circleTurn = true;
    }
    paintBox(x, y);
    setTimeout(function(){
        showWinner();
    }, 100)

}

function paintBox(x, y) {
    let currentBox = document.getElementById(x + ", " + y);
    console.log(currentBox)
    if (gameMatrix[x][y] === 2) {
        currentBox.innerHTML = '<p style="color:red">x</p>';
    } else if (gameMatrix[x][y] === 1) {
        currentBox.innerHTML = '<p style="color:blue">o</p>';
    } else {
        currentBox.innerHTML = '';
    }
}

function showWinner() {
    if (checkWinner() === 1) {
        alert(player2 + ' wins');
        player2WinCounter++;
        document.getElementById("player2Score").innerHTML = player2WinCounter;
        isOver = true;
    } else if (checkWinner() === 2) {
        alert(player1 + ' wins');
        player1WinCounter++;
        document.getElementById("player1Score").innerHTML = player1WinCounter;
        isOver = true;
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (gameMatrix[i][0] === gameMatrix[i][1] && gameMatrix[i][0] === gameMatrix[i][2]) {
            return gameMatrix[i][0];
        }
        if (gameMatrix[0][i] === gameMatrix[1][i] && gameMatrix[0][i] === gameMatrix[2][i]) {
            return gameMatrix[0][i];
        }
    }
    if (gameMatrix[0][0] === gameMatrix[1][1] && gameMatrix[0][0] === gameMatrix[2][2]) {
        return gameMatrix[0][0];
    }
    if (gameMatrix[2][0] === gameMatrix[1][1] && gameMatrix[2][0] === gameMatrix[0][2]) {
        return gameMatrix[2][0];
    }
    return 0;
}

function setPlayer1Name() {
    player1 = document.getElementById("player1Name").value;
}

function setPlayer2Name() {
    player2 = document.getElementById("player1Name").value;
}

function reset() {
    gameMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    circleTurn = false;
    isOver = false;
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            paintBox(x, y);
        }
    }
}