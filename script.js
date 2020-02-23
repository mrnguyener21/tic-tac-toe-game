const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const  =[];
///probably a better way to go about this then hardcoding everything
const winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6], [1,47], [2,5,8], [0,4,8], [2,4,]];

let player1Score = [];// i have to be able to match what is inside here to ' indexes. right now displays [div.square], needs to display [[1]] as an example
let player2Score = [];// i have to be able to match what is inside here to ' indexes

for (let i = 0; i < squares.length; i++){
    .push(squares[i]);
} 
//maybe i need to make a for loop to cycle through the numbered squares and from there i make it to push it to the player score whenever i click
//mentor said maybe using indexOf. If i use indexOf I have to find a way that when i push the 'square value' to the score array, I have to then convert it with indexOf so it can push the index instead of the element
// for (let i = 0; i< .length; i++) {
//     squares.addEventListener('click',() => console.log('click works'))
//   console.log([i]);
//     }
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
            player1Score.push(.indexOf(squares[i]));// ex result player1Score=[1,2,3] IT SENDS THE NUMBER I CAN MATCH BY NUMBER
            console.log(player1Score);
      
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
            player.textContent = 'PLAYER ONE'
            squares[i].textContent = 'O'; 
        };
    });
};

// //creating a function that signals the winner
// //possibly need to create a for loop to loop through  in order to have the scores see if they match to any of the combinations
//     //possibilities: player 1 wins, player 2 draws, draw
//     //if player 1 = winningCombinations[i] then player 1 wins
//     if(player1Score === [i]){
//         //pop up text content  = PLAYER 1 WINS
//         //when i click in the PLAY AGAIN BUTTON = reset();
//     } else if (player2Score === [i]){   //else if player 2 = winningCombination[i] then player 2 wins
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


