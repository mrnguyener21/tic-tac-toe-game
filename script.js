const ticTacToe = document.querySelector('.ticTactToe');
const heading = document.querySelector('#heading');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

const winningCombinations = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ],[ 2, 4, 6 ] ];

let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;

score.textContent = `${player1Score}:${player2Score}`;

const getWinner = () => {
    let winner = null;
    
    winningCombinations.forEach((winningCombination) => {
        if (squares[winningCombination[0]].textContent && squares[winningCombination[0]].textContent === squares[winningCombination[1]].textContent && squares[winningCombination[0]].textContent === squares[winningCombination[2]].textContent) {
            winner = squares[winningCombination[0]].textContent;
        };
    });

    if(winner === 'X') {
        player1Score++;
        reset();
    } else if(winner === 'O') {
        player2Score++;
        reset();
    } 

    // reset if there's a draw
    // have alert display correct winner
    // finish creating the counter function
}

const reset = () => {
    alert(`Player ${activePlayer} wins!`);

    for(let i = 0; i < 9; i++){
        squares[i].textContent = '';
    }
}; 

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1){
            squares[i].textContent = 'X';
            heading.textContent = 'PLAYER ONE';
            activePlayer = 2;
        } else if (activePlayer === 2){
            squares[i].textContent = 'O'; 
            heading.textContent = 'PLAYER TWO';
            activePlayer = 1;
        };     
    
        getWinner();
    });
};










