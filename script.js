const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('.player');
const theSquares = document.querySelector('.theSquares');
const square = document.querySelectorAll('.square');

const numberOfSquares = 9;
const player1Score = [];
const player2Score =[];

//click on start game show player one
player.addEventListener("click",() => { player.textContext = 'PLAYER ONE'});

for (let i = 0; i < square; index++) {
    square[i].addEventListener('click',() => {
        if (player.textContent === 'PLAYER ONE'){
            square[i].textContext = 'X';
            alert('PLAYER TWO\'S TURN');
            player.textContent = 'PLAYER TWO';
        } else {
            for (let i = 0; i < square; index++) {
                square[i].textContext = 'O';
                alert('PLAYER ONE\'S TURN');
                player.textContent = 'PLAYER ONE';
            };
        };
    })
};



/*
square.addEventListener('click', () => {

    if (player.textContent === 'PLAYER ONE'){
        for (let i = 0; i < square; index++) {
            square[i].textContext = 'X';
            alert('PLAYER TWO\'S TURN');
            player.textContent = 'PLAYER TWO';
        };
    } else {
        for (let i = 0; i < square; index++) {
            square[i].textContext = 'O';
            alert('PLAYER ONE\'S TURN');
            player.textContent = 'PLAYER ONE';
        };
    };

});
*/


/*
const togglePlayer = () => {
    //switch between player 1 and player 2. p.layer 1 = X and player 2 = 0. display which player is currently playing.
    if (player.textContent === 'PLAYER ONE'){
        for (let i = 0; i < square; index++) {
            square[i].addEventListener = ('click', () => {
                square.textContent = 'X';
                alert('PLAYER TWO\'S TURN');
                player.textContent = 'PLAYER TWO';
            });
        } 
    } else {
        for (let i = 0; i < square; index++) {
            square[i].addEventListener = ('click', () => {
                square.textContent = 'O';
                alert('PLAYER ONE\'S TURN');
                player.textContent = 'PLAYER ONE';
            });
        };
    };
        
};

togglePlayer();
*/
//for the squares if player 1 click textedit X if player 2 textedit O. if three squares match put a dash through them. will probably have to make three arrays signifying how the squares have to line up based on their number.

//base on which player got the winning array display that they won
