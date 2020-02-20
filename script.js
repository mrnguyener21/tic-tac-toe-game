const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const square = document.querySelectorAll('.square');

const numberOfSquares = 9;
let player1Score = [];
let player2Score =[];
// possible winning arrays;

const reset = () =>{
    player.textContent = 'PLAY AGAIN?';
    player.addEventListener('click', () =>{
        square.textContent ='';
        player.textContent = 'PLAYER ONE';
    });
};

//click on start game show player one
player.addEventListener('click', () => { player.textContent = 'PLAYER ONE' });

for (let i = 0; i < square; i++) {
    //i need to find a way to multiply the squares by the const numberOfSquares
    square[i](numberOfSquares);
    console.log('does this work');
};

for (let i = 0; i < square.length; i++) {
    console.log(square[i]);
    square[i].addEventListener('click',() => {
        if (player.textContent === 'PLAYER ONE'){
            square[i].textContent = 'X';
            console.log(square[i]);
            //alert('PLAYER TWO\'S TURN');
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
                player.textContent = 'PLAYER ONE'
                square[i].textContent = 'O'; 

        };
    });
};

// need to determine who the winner is. create a for loop to push the clicked square into the respective playerscore.




