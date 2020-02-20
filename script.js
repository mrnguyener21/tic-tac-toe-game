const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const square = document.querySelectorAll('.square');

const numberOfSquares = 9;
const player1Score = [];
const player2Score =[];

//click on start game show player one
player.addEventListener('click', () => { player.textContent = 'PLAYER ONE' });

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click',() => {
        if (player.textContent === 'PLAYER ONE'){
            square[i].textContent = 'X';
            //alert('PLAYER TWO\'S TURN');
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
                player.textContent = 'PLAYER ONE'
                square[i].textContent = 'O'; 

        };
    });
};

// need to determine who the winner is

//need to reset the game