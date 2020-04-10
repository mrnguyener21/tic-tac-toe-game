// DOM FOR START MODAL
const startModal = document.querySelector('.startModal');
const startButton = document.querySelector('#startButton');

//DOM FOR TIC TAC TOE TABLE//
const heading = document.querySelector('#heading');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

//DOM FOR POP UP MODAL
const winnerModal = document.querySelector('.winnerModal');
const winnerDisplay = document.querySelector('#winner');
const newGame = document.querySelector('#newGameButton');

//CONSTANTS
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

//CHANGING VARIABLES
let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;
let winner = null


startButton.addEventListener('click', () => startModal.classList.add('startModal---Hide'));


//SCORE BOARD OBJECT
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
    winningCombinations.forEach((winningCombination) => {
        if (squares[winningCombination[0]].textContent && 
            squares[winningCombination[0]].textContent === squares[winningCombination[1]].textContent &&
            squares[winningCombination[0]].textContent === squares[winningCombination[2]].textContent) {
            winner = squares[winningCombination[0]].textContent;
        }else if(board.length === 9 && winner === null){
            winner = 'D';
        }
    }); 
    if(winner === 'X') {
        ++player1Score;
        winnerDisplay.textContent = 'PLAYER 1 WINS';
        updatingTheScore();
    } else if(winner === 'O') {
        ++player2Score;
        winnerDisplay.textContent ='PLAYER 2 WINS';
        updatingTheScore();
    } else if( winner === 'D'){ 
        winnerDisplay.textContent ='DRAW';
    }

};

//OBJECT WHAT HAPPENS WHEN YOU CLICK ON A SQUARE
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1 && squares[i].textContent === ''){
            squares[i].textContent = 'X';   
            heading.textContent = 'PLAYER 2\'S TURN';
            activePlayer = 2;
            board.push(squares[i]);  
        } else if (activePlayer === 2 && squares[i].textContent === ''){
            squares[i].textContent = 'O';
            heading.textContent = 'PLAYER 1\'S TURN';
            activePlayer = 1;
            board.push(squares[i]);
        };
        getWinner();
        winner === null? null:winnerModal.classList.add('winnerModal---Show')
    });
};

//OBJECT TO START NEW GAME AND DETERMINE WHO STARTS THAT GAME
newGame.addEventListener('click', () => {

    winnerModal.classList.remove('winnerModal---Show');
    reset();
    console.log('button works') 
    if( winner === 'X'){
        winner = null;
        activePlayer = 2;
        heading.textContent = 'PLAYER 2\'S TURN';
    } else if (winner === 'O'){
        winner = null;
        activePlayer = 1;
        heading.textContent = 'PLAYER 1\'S TURN';
    } else if (winner === 'D'){
        winner = null;
        if(activePlayer === 1){
            heading.textContent = 'PLAYER 1\'S TURN'
        }else if(activePlayer === 2){
            heading.textContent === 'PLAYER 2\'S TURN'
        }
    }
});




