function engine() {
    var values = [
        document.getElementById("b1").value,
        document.getElementById("b2").value,
        document.getElementById("b3").value,
        document.getElementById("b4").value,
        document.getElementById("b5").value,
        document.getElementById("b6").value,
        document.getElementById("b7").value,
        document.getElementById("b8").value,
        document.getElementById("b9").value
    ];

    var buttons = [
        document.getElementById("b1"),
        document.getElementById("b2"),
        document.getElementById("b3"),
        document.getElementById("b4"),
        document.getElementById("b5"),
        document.getElementById("b6"),
        document.getElementById("b7"),
        document.getElementById("b8"),
        document.getElementById("b9")
    ];

    var winner = checkWinner(values);

    if (winner) {
        if (winner === 'Tie') {
            document.getElementById('print').innerHTML = "Match Tie";
        } else {
            document.getElementById('print').innerHTML = `Player ${winner} won`;
            buttons.forEach(button => button.disabled = true);
            for (let i = 0; i < values.length; i++) {
                if (values[i] === winner) {
                    buttons[i].style.color = "lawngreen";
                }
            }
        }
    } else {
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X's Turn";
        } else {
            document.getElementById('print').innerHTML = "Player 0's Turn";
        }
    }
}

function checkWinner(values) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
            return values[a];
        }
    }

    return values.includes('') ? null : 'Match Tie';
}

function reset() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 

var flag = 1;

function changeTurn() {
    flag = flag === 1 ? 0 : 1;
}