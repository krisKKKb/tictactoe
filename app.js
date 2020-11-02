let isgameOver = false
let gameboard = [
    ['_', '_', '_',],
    ['_', '_', '_',],
    ['_', '_', '_',]
]

const cellDivs = document.querySelectorAll('.cell');

cellDivs.forEach(element => {
    element.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameboard[selectedRow][selectedCol] == '_') {
            selectedCell.innerText = 'x'
            gameboard[selectedRow][selectedCol] = 'x'


            //ai Horizontal

            //if (gameboard[0][0] == 'x') {
            //    document.getElementById('10').innerText = 'o';
            //}
            //if (gameboard[0][1] == 'x') {
            //    document.getElementById('11').innerText = 'o';
            //}
            //if (gameboard[0][2] == 'x') {
            //    document.getElementById('12').innerText = 'o';
            //}
            //if (gameboard[1][0] == 'x') {
            //    document.getElementById('00').innerText = 'o';
            //}
            //if (gameboard[1][1] == 'x') {
            //    document.getElementById('01').innerText = 'o';
            //}
            //if (gameboard[1][2] == 'x') {
            //    document.getElementById('02').innerText = 'o'
            //}

            //ai vertigal

            //ai diagonal

            //Horizontal

            if (gameboard[0][0] == 'x' && gameboard[0][1] == 'x' && gameboard[0][2] == 'x') {

            } else {
                gameOver = true
            }
            if (gameboard[1][0] == 'x' && gameboard[1][1] == 'x' && gameboard[1][2] == 'x') {

            } else {
                gameOver = true
            }
            if (gameboard[2][0] == 'x' && gameboard[2][1] == 'x' && gameboard[2][2] == 'x') {

            } else {
                gameOver = true
            }

            //Vertigal

            if (gameboard[0][0] == 'x' && gameboard[1][0] == 'x' && gameboard[2][0] == 'x') {

            } else {
                gameOver = true
            }

            if (gameboard[0][1] == 'x' && gameboard[1][1] == 'x' && gameboard[2][1] == 'x') {

            } else {
                gameOver = true
            }

            if (gameboard[0][2] == 'x' && gameboard[1][2] == 'x' && gameboard[2][2] == 'x') {

            } else {
                gameOver = true
            }

            //Diagonal

            if (gameboard[0][0] == 'x' && gameboard[1][1] == 'x' && gameboard[2][2] == 'x') {

            } else {
                gameOver = true
            }
            if (gameboard[0][2] == 'x' && gameboard[1][1] == 'x' && gameboard[2][0] == 'x') {

            } else {
                gameOver = true
            }
            console.log(isGameOver())
        }
    })
});

function GetEmptyCell() {
    x = Math.floor(Math.random() * 3)
    y = Math.floor(Math.random() * 3)
    do {
        x = 0 - 2
        y = 0 - 2
    } while (gameboard[x][y]);
    return [x, y]

}

function isGameOver() {
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] == gameboard[i][1] && gameboard[i][1] == gameboard[i][2] && gameboard[i][0] != '_') {
            return true
        }
        if (gameboard[0][i] == gameboard[1][i] && gameboard[1][1] == gameboard[2][i] && gameboard[0][i] != '_') {
            return true
        }
    }
    if (gameboard[0][0] == gameboard[1][1] && gameboard[1][1] == gameboard[2][2] && gameboard[0][0] != '_') {
        return true
    }
    if (gameboard[0][2] == gameboard[1][1] && gameboard[1][1] == gameboard[2][0] && gameboard[2][0] != '_') {
        return true
    }
    return false
}
