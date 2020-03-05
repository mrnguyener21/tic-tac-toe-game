/*----- constants -----*/
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

/*----- variable intialization -----*/
let board;
let turn = 'X';
let win;

/*----- html elements -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const boardElement = document.getElementById('board');
const resetButton = document.getElementById('reset-button')
const messages = document.querySelector('h2');

/*----- event listeners -----*/
boardElement.addEventListener('click', handleTurn);
resetButton.addEventListener('click', init);

/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    render();
};

const getWinner = () => {
    let winner = null;

    winningCombos.forEach((combo, index) => {
        if (board[combo[0]] &&
            board[combo[0]] === board[combo[1]] &&
            board[combo[0]] === board[combo[2]]) {
                winner = board[combo[0]];
            }
        });
        
        return null ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let index = squares.findIndex((square) => square === event.target);
    
    console.log(event.target);

    board[index] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function render() {
    board.forEach((mark, index) => {
        squares[index].textContent = mark;
    });

    messages.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
};

init();