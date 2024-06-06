// helper functions

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(moves) {
    for (let combo of winningCombos) {
        if (combo.every(index => moves.includes(index))) {
            return true;
        }
    }
    return false;
}

// init var

let playerXMoves = [];
let playerOMoves = [];
let currentPlayer = 'X';

// engine 

function makeMove(button, index) {

    if (button.value === '') {
        button.value = currentPlayer;
        button.disabled = true;

        if (currentPlayer === 'X') {
            playerXMoves.push(index);
            if (checkWinner(playerXMoves)) {
                document.getElementById('print').innerHTML = "Player X wins!";
                highlightWinningCombo(playerXMoves);
                disableAllButtons();
                return;
            }
        } else {
            playerOMoves.push(index);
            if (checkWinner(playerOMoves)) {
                document.getElementById('print').innerHTML = "Player O wins!";
                highlightWinningCombo(playerOMoves);
                disableAllButtons();
                return;
            }
        }

        // Check for a tie
        if (playerXMoves.length + playerOMoves.length === 9) {
            document.getElementById('print').innerHTML = "Well you are evenly matched - Match Tie";
            return;
        }

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('print').innerHTML = `Player ${currentPlayer}'s turn`;
    }

}

function highlightWinningCombo(combo) {
    combo.forEach(index => document.getElementById('b' + (index + 1)).classList.add('highlight'));
}

function disableAllButtons() {
    for (let i = 2; i <= 9; i++) {
        document.getElementById('b' + i).disabled = true;
    }
}


function reset() {
    playerXMoves = [];
    playerOMoves = [];
    currentPlayer = 'X';
    for (let i = 1; i <= 9; i++) {
        const button = document.getElementById('b' + i);
        button.value = '';
        button.disabled = false;
        button.classList.remove('highlight');
    }
    document.getElementById('print').innerHTML = "Player X's turn";
}

