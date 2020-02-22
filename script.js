const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const numberedSquares =[];
///probably a better way to go about this then hardcoding everything
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
//figure out a way to prevent the player from overwriting a square that already has text in it

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

//creating a function that signals the winner
    //possibilities: player 1 wins, player 2 draws, draw
    //if player 1 = winningCombinations[i] then player 1 wins
    //else if player 2 = winningCombination[i] then player 2 wins
    //if all the squares have text in them then that's a draw
    //figure out a function to end the game if any of the above three statements are executed
    //create a function for a pop up screen to appear


