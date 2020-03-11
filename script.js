//DOM FOR TIC TAC TOE TABLE
const heading = document.querySelector('#heading');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

//DOM FOR POP UP MODAL
const winnerModal = document.querySelector('.winnerModal');
const popUpWindow = document.querySelector('.popUpWindow');
const trophy = document.querySelector('#trophy');
const winnerDisplay = document.querySelector('#winner');
const playAgain = document.querySelector('#playAgain');


// CODE FOR THE TIC TAC TOE BOARD

//CONSTANTS
const winningCombinations = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ],[ 2, 4, 6 ] ];
const board = [];
//CHANGING VARIABLES
let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;
let winner = null
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
    //DETERMINING IF WINNER IS PLAYER 1,2 OR DRAW
    winningCombinations.forEach((winningCombination) => {
        if (squares[winningCombination[0]].textContent && squares[winningCombination[0]].textContent === squares[winningCombination[1]].textContent &&squares[winningCombination[0]].textContent === squares[winningCombination[2]].textContent) {
            winner = squares[winningCombination[0]].textContent;
        }else if(board.length === 9 && winner === null){
            winner = 'D';
        }
    }); 
    if(winner === 'X' && heading.textContent !== "PLAY AGAIN?") {
        ++player1Score;
        winnerDisplay.textContent = 'PLAYER 1 WINS';
        heading.textContent = "PLAY AGAIN?";
        updatingTheScore();// why did i have to call it as a function for the counter to update despite the player score updating?
    } else if(winner === 'O' && heading.textContent !== "PLAY AGAIN?") {
        heading.textContent = "PLAY AGAIN?";
        ++player2Score;
        winnerDisplay.textContent ='PLAYER 2 WINS';
        updatingTheScore();
    } else if( winner === 'D' && heading.textContent !== 'PLAY AGAIN?'){ 
        winnerDisplay.textContent ='DRAW';
        heading.textContent = "PLAY AGAIN?";
    }
    console.log(winner)

};

//OBJECT WHAT HAPPENS WHEN YOU CLICK ON A SQUARE
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1 && heading.textContent !== "PLAY AGAIN?" && squares[i].textContent !== 'O' && squares[i].textContent !== 'X'){
            squares[i].textContent = 'X';   
            heading.textContent = 'PLAYER ONE';
            activePlayer = 2;
            board.push(squares[i]);  
        } else if (activePlayer === 2 && heading.textContent !== "PLAY AGAIN?" && squares[i].textContent !== 'X' && squares[i].textContent !== 'O'){
            squares[i].textContent = 'O';
            heading.textContent = 'PLAYER TWO';
            activePlayer = 1;
            board.push(squares[i]);
        };
        getWinner();
        winner === null? null:winnerModal.classList.add('winnerModal---Show')
    });
};

//OBJECT TO START NEW GAME AND DETERMINE WHO STARTS THAT GAME
playAgain.addEventListener('click', () => {

    winnerModal.classList.remove('winnerModal---Show');
    console.log(winnerModal.classlist);
    reset();
    console.log('button works')
    if( winner === 'X'){
        winner = null;
        activePlayer = 2;
        heading.textContent = 'START';
    } else if (winner === 'O'){
        winner = null;
        activePlayer = 1;
        heading.textContent = 'START';
    } else if (winner === 'D'){
        winner = null;
        heading.textContent = 'START';
    }
});



// POP UP MODAL Object
// 2)move the play again button features to the pop up MODAL
// 3)have winner be declared in the pop up
// 4)basically everythign in the current 'heading' be moved to the pop up modal


