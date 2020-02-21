const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const square = document.querySelectorAll('.square');

const numberedSquares =[];
let player1Score = [];
let player2Score =[];


for (let i = 0; i < square.length; i++) {numberedSquares.push(square[i]);};

const reset = () =>{
    player.textContent = 'PLAY AGAIN?';
    player.addEventListener('click', () =>{
        square.textContent ='';
        player.textContent = 'PLAYER ONE';
    });
};


player.addEventListener('click', () => { player.textContent = 'PLAYER ONE' });
// push whatever is clicked into the player;s score array

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click',() => {
        if (player.textContent === 'PLAYER ONE'){
            square[i].textContent = 'X';
            player1Score.push(square[i]);
            console.log(player1Score);
            //alert('PLAYER TWO\'S TURN');
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
                player.textContent = 'PLAYER ONE'
                square[i].textContent = 'O'; 

        };
    });
};

// possible winning arrays; multiple possibilities = multiple if this happen = switch statement
/*
the index positions for winning combinations
0,1,2
3,4,5
6,7,8

0,3,6
1,4,7
2,5,8

0,4,8
2,4,6
*/
//pretty sure i can do a loop for this just gotta fix the player1 and player 2 variables 
switch(player1Score){
    case [numberedSquares[0],numberedSquares[1],numberedSquares[2]]:
        console.log('it works');
    break;
    case [numberedSquares[3],numberedSquares[4],numberedSquares[5]]:

    break;
    case [numberedSquares[6],numberedSquares[7],numberedSquares[8]]:

    break;
    case [numberedSquares[0],numberedSquares[3],numberedSquares[6]]:

    break;
    case [numberedSquares[1],numberedSquares[4],numberedSquares[7]]:

    break;
    case [numberedSquares[2],numberedSquares[5],numberedSquares[8]]:

    break;
    case [numberedSquares[0],numberedSquares[4],numberedSquares[8]]:

    break;
    case [numberedSquares[2],numberedSquares[4],numberedSquares[6]]:

    break;
}
switch(player2Score){
    case [numberedSquares[0],numberedSquares[1],numberedSquares[2]]:

    break;
    case [numberedSquares[3],numberedSquares[4],numberedSquares[5]]:

    break;
    case [numberedSquares[6],numberedSquares[7],numberedSquares[8]]:

    break;
    case [numberedSquares[0],numberedSquares[3],numberedSquares[6]]:

    break;
    case [numberedSquares[1],numberedSquares[4],numberedSquares[7]]:

    break;
    case [numberedSquares[2],numberedSquares[5],numberedSquares[8]]:

    break;
    case [numberedSquares[0],numberedSquares[4],numberedSquares[8]]:

    break;
    case [numberedSquares[2],numberedSquares[4],numberedSquares[6]]:

    break;
}
// need to determine who the winner is. 
    //create a for loop to push the clicked square into the respective playerscore.





