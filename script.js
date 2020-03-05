const ticTacToe = document.querySelector('.ticTactToe');
const heading = document.querySelector('#heading');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

const winningCombinations = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ],[ 2, 4, 6 ] ];
const board = [];

for (let i = 0; i < squares.length; i++){
    board.push(squares[i]);
} ;
let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;
let winner = null;

updatingTheScore = () => score.textContent = `${player1Score}:${player2Score}`;
updatingTheScore();

const reset = () => {
    for(let i = 0; i < 9; i++){
        squares[i].textContent = '';
    }
}; 

const getWinner = () => {
    winningCombinations.forEach((winningCombination) => {
        if (squares[winningCombination[0]].textContent && squares[winningCombination[0]].textContent === squares[winningCombination[1]].textContent &&squares[winningCombination[0]].textContent === squares[winningCombination[2]].textContent) {
            winner = squares[winningCombination[0]].textContent;
   
            // squares[winningCombination[0]].textContent === "X" || squares[winningCombination[0]].textContent === 'O' && winner === null? winner ="D" && console.log('d works'): winner = null && console.log('null works');
        }
        // board.every((board) => board.textContent === "X" || board.textContent === "O") && winner !== "X" || 'O' ? null && console.log('null works') : winner = 'D' && console.log();
        // return winner ? winner : board.includes('') ? null : 'D';
        //conditions: winner doesn't eequal x or o; all squares have a x or o in them -> draw
        squares[winningCombination[0]].textContent === "X"||'O'&& winner !== 'X' || winner !== 'O' ? winner && console.log('winner works') : winner = "D"&& console.log('D works');
    });
     
        
    // if( board.every( (board) => (board.textContent === "X" || board.textContent === "O" & winner !== 'X' || winner !== 'O'))){
    //     console.log(board)

    //     console.log(winner);
    //     winner = 'D';
    // };

    if(winner === 'X' && heading.textContent !== "PLAY AGAIN?") {
        ++player1Score;
        alert('PLAYER 1 WINS');
        heading.textContent = "PLAY AGAIN?";
        updatingTheScore();// why did i have to call it as a function for the counter to update despite the player score updating?
    } else if(winner === 'O' && heading.textContent !== "PLAY AGAIN?") {
        heading.textContent = "PLAY AGAIN?";
        ++player2Score;
        alert('PLAYER 2 WINS');
        updatingTheScore();
    } else if( winner === 'D' && heading.textContent !== 'PLAY AGAIN?'){ 
        alert('DRAW');
        heading.textContent = "PLAY AGAIN?";
    }
};

heading.addEventListener('click', () => {
    if (heading.textContent === 'PLAY AGAIN?'){
        reset();
    };
    if( winner === 'X'){
        winner = null;
        activePlayer = 2;
        heading.textContent = 'MAKE A MOVE';
    } else if (winner === 'O'){

        winner = null;
        activePlayer = 1;
        heading.textContent = 'MAKE A MOVE';
    } else if (winner === 'D'){
        winner = null;
        heading.textContent = 'MAKE A MOVE';
    }
});

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1 && heading.textContent !== "PLAY AGAIN?"){

            if(squares[i].textContent !== 'O'){
                squares[i].textContent = 'X';   
            };

            heading.textContent = 'PLAYER ONE';
            activePlayer = 2;

        } else if (activePlayer === 2 && heading.textContent !== "PLAY AGAIN?"){

            if(squares[i].textContent !== 'X'){
                squares[i].textContent = 'O';
            };

            heading.textContent = 'PLAYER TWO';
            activePlayer = 1;
        };
        getWinner();
    });
};










