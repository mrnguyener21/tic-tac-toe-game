const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const numberedSquares =[];
const winningCombination = [[numberedSquares[0],numberedSquares[1],numberedSquares[2]],[numberedSquares[3],numberedSquares[4],numberedSquares[5]],[numberedSquares[6],numberedSquares[7],numberedSquares[8]],[numberedSquares[0],numberedSquares[3],numberedSquares[6]], [numberedSquares[1],numberedSquares[4],numberedSquares[7]], [numberedSquares[2],numberedSquares[5],numberedSquares[8]], [numberedSquares[0],numberedSquares[4],numberedSquares[8]], [numberedSquares[2],numberedSquares[4],numberedSquares[6]]];
let player1Score = [];
let player2Score = [];

for (let i = 0; i < squares.length; i++) {
    numberedSquares.push(squares[i]);
};

const reset = () => {
    player.textContent = 'PLAY AGAIN?';
    player.addEventListener('click', () => {
        squares.textContent = '';
        player.textContent = 'PLAYER ONE';
    });
};

player.addEventListener('click', () => player.textContent = 'PLAYER ONE');
// push whatever is clicked into the player;s score array

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',() => {
        if (player.textContent === 'PLAYER ONE'){
            squares[i].textContent = 'X';
            player1Score.push(squares[i]);
            console.log(player1Score);
            //alert('PLAYER TWO\'S TURN');
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
            player.textContent = 'PLAYER ONE'
            squares[i].textContent = 'O'; 
        };
    });
};



