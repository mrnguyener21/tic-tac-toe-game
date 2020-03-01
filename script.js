const ticTacToe = document.querySelector('.ticTactToe');
const heading = document.querySelector('#heading');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

const winningCombinations = [ 
[ 0, 1, 2 ], 
[ 3, 4, 5 ], 
[ 6, 7, 8 ], 
[ 0, 3, 6 ], 
[ 1, 4, 7 ], 
[ 2, 5, 8 ], 
[ 0, 4, 8 ],
[ 2, 4, 6 ] 
];
const board = [];

for (let i = 0; i < squares.length; i++){
    // CREATE AN ACTUAL MATRIX
    board.push(squares[i]);

} ;
let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;
let winner = null;

updatingTheScore = () => score.textContent = `${player1Score}:${player2Score}`;
updatingTheScore();

const reset = () => {
    // alert(`Player ${activePlayer} wins!`);
    for(let i = 0; i < 9; i++){
        squares[i].textContent = '';
    }
    winner = null;
}; 


const getWinner = () => {
   
    winningCombinations.forEach((winningCombination) => {
        if (
            squares[winningCombination[0]].textContent && 
            squares[winningCombination[0]].textContent === squares[winningCombination[1]].textContent &&
            squares[winningCombination[0]].textContent === squares[winningCombination[2]].textContent
            ) {
            winner = squares[winningCombination[0]].textContent;
        }
        else if( board.every( (board) => (board.textContent === "X" || board.textContent === "O"))){
            //how to bring back the logic of having a baord variable with an empty array and pushing square[i] into it, but why does it say squares is not a function when i tried using squares. when i compare them via console log the proto for board is array which is why the every method works since its an array method but squares is considered a node list, why?
            winner = 'T';
         
        };
    });

    //if a winner is determined or a draw is determined, change heading to 'PLAY AGAIN?
    //change active player to null
    // add an event listener to where if heading is play again then click to reset the board 
    // if player 1 won, make active player 2
    //if player 2 won, make active player 1
    //start researching how to do a pop upscreen?
    //maybe have the computer play with you?

    if(winner === 'X' && heading.textContent !== 'PLAY AGAIN?') {
        ++player1Score;
        alert('PLAYER 1 WINS');
        heading.textContent = "PLAY AGAIN?";
        winner = null;
        activePlayer = 0;
        updatingTheScore();// why did i have to call it as a function for the counter to update despite the player score updating?
     
    } else if(winner === 'O' && heading.textContent !== 'PLAY AGAIN?') {
        ++player2Score;
        heading.textContent = "PLAY AGAIN?";
        winner = null;
        activePlayer = 0;
        alert('PLAYER 2 WINS');
        updatingTheScore();
      
    } else if( winner === 'T' && heading.textContent !== 'PLAY AGAIN?'){ 
        alert('DRAW');
        heading.textContent = "PLAY AGAIN?";
        winner = null;
       
    }

}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1){
            if(squares[i].textContent !== 'O'){
                squares[i].textContent = 'X';
            };
            heading.textContent = 'PLAYER ONE';
            activePlayer = 2;
        } else if (activePlayer === 2){
            if(squares[i].textContent !== 'X'){
                squares[i].textContent = 'O';
            };
            heading.textContent = 'PLAYER TWO';
            activePlayer = 1;
        };
        getWinner();
    });
};









