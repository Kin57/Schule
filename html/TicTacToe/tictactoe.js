let gameMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
let circleTurn = false;

function checkBox(x, y) {
    if (gameMatrix[x[y] !== 0]) {
        return;
    }

    if (circleTurn === true) {
        gameMatrix[x[y]]--;
        circleTurn = false;
    } else {
        gameMatrix[x[y]]++;
        circleTurn = true;
    }
    paintBox(x, y);
    showWinner();
}

function paintBox(x, y) {
    let currentBox = document.getElementById(x + ", " + y);
    if (gameMatrix[x[y]] === -1) {
        currentBox.innerHTML = '<p style="color:red">x</p>';
        console.log('x:'+x+', '+y);
    } else {
        currentBox.innerHTML = '<p style="color:blue">o</p>';
        console.log('o:'+x+', '+y);
    }
}

function showWinner() {
    if (checkWinner() === 1) {
        alert('cross wins');
    } else if (checkWinner() === -1) {
        alert('circle wins');
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (gameMatrix[i[0]] === gameMatrix[i[1]] || gameMatrix[i[0]] === gameMatrix[i[2]]) {
            return gameMatrix[i[0]];
        }
        if (gameMatrix[0[i]] === gameMatrix[1[i]] || gameMatrix[0[i]] === gameMatrix[2[i]]) {
            return gameMatrix[0[i]];
        }
    }
    if (gameMatrix[0[0]] === gameMatrix[1[1]] || gameMatrix[0[0]] === gameMatrix[2[2]]) {
        return gameMatrix[0[0]];
    }
    if (gameMatrix[2[0]] === gameMatrix[1[1]] || gameMatrix[2[0]] === gameMatrix[0[2]]) {
        return gameMatrix[2[0]];
    }
    return 0;
}