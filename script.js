// FIX BUG WHERE PLAYER 1 AND 2 IS TOGGLED IF CLICKED ON A SPACE WITH A CHARACTER ALREADY
//DOM
const ticTacToe = document.querySelector('.ticTactToe');
const heading = document.querySelector('#heading');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

//CONSTANTS
const winningCombinations = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ],[ 2, 4, 6 ] ];
const board = [];

//CHANGING VARIABLES
let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;
let winner = null;

//SCORE BOARD 
updatingTheScore = () => score.textContent = `${player1Score}:${player2Score}`;
updatingTheScore();

//RESET OBJECT
const reset = () => {
    for(let i = 0; i < 9; i++){
        squares[i].textContent = '';
        board.length = 0;
    }
}; 

//OBJECT TO DETERMINE THE WINNER
const getWinner = () => {
    //DETERMINING IF WINNER IS PLAYER 1,2 
    winningCombinations.forEach((winningCombination) => {
        if (squares[winningCombination[0]].textContent && squares[winningCombination[0]].textContent === squares[winningCombination[1]].textContent &&squares[winningCombination[0]].textContent === squares[winningCombination[2]].textContent) {
            winner = squares[winningCombination[0]].textContent;
        
        //CONDITION TO DETERMINE IF IT IS A DRAW
        }else if(board.length === 9 && winner === null){
            winner = 'D';
        }
    });
     
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


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1 && heading.textContent !== "PLAY AGAIN?"){

            if(squares[i].textContent !== 'O' && squares[i].textContent !== 'X' ){
                squares[i].textContent = 'X';   
                heading.textContent = 'PLAYER ONE';
                activePlayer = 2;
                board.push(squares[i]);
            };
 

        } else if (activePlayer === 2 && heading.textContent !== "PLAY AGAIN?"){

            if(squares[i].textContent !== 'X' && squares[i].textContent !== 'O'){
                squares[i].textContent = 'O';
                heading.textContent = 'PLAYER TWO';
                activePlayer = 1;
                board.push(squares[i]);
            };

        };
        console.log(board);
        console.log(squares[i].textContent)
        getWinner();
    });
};
//LET YOU START A NEW GAME BY CLICKIG ON THE BUTTON AFTER A WINNER WAS DETERMINED
heading.addEventListener('click', () => {
    if (heading.textContent === 'PLAY AGAIN?'){
        reset();
    };
    //THE IF/ELSE STATEMENT ALLOWS THE LOSER TO GO FIRST ON NEW GAME OR IF IT WAS A DRAW THE PERSON WHO WAS SUPPOSE TO GO NEXT WILL GO FIRST IN THE NEW GAME
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

