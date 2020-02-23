const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const numberedSquares =[];
///probably a better way to go about this then hardcoding everything
const winningCombination = [[numberedSquares[0],numberedSquares[1],numberedSquares[2]],[numberedSquares[3],numberedSquares[4],numberedSquares[5]],[numberedSquares[6],numberedSquares[7],numberedSquares[8]],[numberedSquares[0],numberedSquares[3],numberedSquares[6]], [numberedSquares[1],numberedSquares[4],numberedSquares[7]], [numberedSquares[2],numberedSquares[5],numberedSquares[8]], [numberedSquares[0],numberedSquares[4],numberedSquares[8]], [numberedSquares[2],numberedSquares[4],numberedSquares[6]]];

let player1Score = [];// i have to be able to match what is inside here to numberedSquares' indexes. right now displays [div.square], needs to display [numberedSquares[1]] as an example
let player2Score = [];// i have to be able to match what is inside here to numberedSquares' indexes

for (let i = 0; i < squares.length; i++){
    numberedSquares.push(squares[i]);
} 
//maybe i need to make a for loop to cycle through the numbered squares and from there i make it to push it to the player score whenever i click
//mentor said maybe using indexOf. If i use indexOf I have to find a way that when i push the 'square value' to the score array, I have to then convert it with indexOf so it can push the index instead of the element
for (let i = 0; i< numberedSquares.length; i++) {
    squares.addEventListener('click',() => console.log('click works'))
  console.log(numberedSquares[i]);
    }
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
      
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
            player.textContent = 'PLAYER ONE'
            squares[i].textContent = 'O'; 
        };
    });
};

// //creating a function that signals the winner
// //possibly need to create a for loop to loop through numberedSquares in order to have the scores see if they match to any of the combinations
//     //possibilities: player 1 wins, player 2 draws, draw
//     //if player 1 = winningCombinations[i] then player 1 wins
//     if(player1Score === numberedSquares[i]){
//         //pop up text content  = PLAYER 1 WINS
//         //when i click in the PLAY AGAIN BUTTON = reset();
//     } else if (player2Score === numberedSquares[i]){   //else if player 2 = winningCombination[i] then player 2 wins
//            //pop up text content  = PLAYER 2 WINS
//         //when i click in the PLAY AGAIN BUTTON = reset();
//     } 
//     //if all the squares have text in them then that's a draw. 
        //if (player.textContent = 'X || player.textContent = 'O'){
            //pop up text content = DRAW
            //when I click in the PLAY AGAIN BUTTON = reset()'
        //}
//     //figure out a function to end the game if any of the above three statements are executed
//     //create a function for a pop up screen to appear


