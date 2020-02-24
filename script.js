const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const numberedSquares =[];
///probably a better way to go about this then hardcoding everything
// 0,1,2 
const winningCombination = [[numberedSquares[0],numberedSquares[1],numberedSquares[2]],[numberedSquares[3],numberedSquares[4],numberedSquares[5]],[numberedSquares[6],numberedSquares[7],numberedSquares[8]],[numberedSquares[0],numberedSquares[3],numberedSquares[6]], [numberedSquares[1],numberedSquares[4],numberedSquares[7]], [numberedSquares[2],numberedSquares[5],numberedSquares[8]], [numberedSquares[0],numberedSquares[4],numberedSquares[8]], [numberedSquares[2],numberedSquares[4],numberedSquares[6]]];
;

let player1Score = [];// i have to be able to match what is inside here to numberedSquares' indexes. right now displays [div.square], needs to display [numberedSquares[1]] as an example
let player2Score = [];// i have to be able to match what is inside here to numberedSquares' indexes

for (let i = 0; i < squares.length; i++){
    numberedSquares.push(squares[i]);
} 
    
//create a function to check everytime we click
// const checkWinner = () => {
//     squares.addEventListener('click', () => {
//         // for (let i = 0; i < winningCombination.length; i++) {
//         //     if(player1Score.some( () => [...winningCombination[i]] )){
//         //         console.log('this if else statement works');
//         //     };
//         //     console.log("hello");
//         //     console.log(winningCombination[i]);
//         //     console.log(i);
//         // };
//         console.log('square click works');
//     }
// )};
// checkWinner();

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
            console.log(numberedSquares[0]);
            if(winningCombination[i].textContent === 'X','X','X'){
                console.log( 'this works');
            }
            // player1Score.push(numberedSquares.indexOf(squares[i]));// ex result player1Score=[1,2,3] IT SENDS THE NUMBER I CAN MATCH BY NUMBER
            //if winning i . every ( 
            // for (let i = 0; i < winningCombination.length; i++) {
            //     // const found = arr1.some(r=> arr2.includes(r)) solution of how to use some and include method from stackOverflow
            //     // const found = arr1.some(r=> arr2.indexOf(r) >= 0) ES6 version
            //     // arr1.every(elem => arr2.indexOf(elem) > -1);
            //     // i need to get every array from winningCombination that contains the elements in the player'score
            //     if(winningCombination[i].every(() => player1Score.some())){
            //         console.log(player1Score);
            //         console.log(winningCombination);
            //         // console.log('it loops');
            //     };// why is it running everytime
                
            // }
            

      
            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
            player.textContent = 'PLAYER ONE'
            squares[i].textContent = 'O'; 
        };
        // if(player1Score.some( () => [...winningCombination[i]] )){
        //     console.log('this if else statement works');
        // }
    });
};
// maybe i can create a function for now to check if the text content for each of the arrays match instead. so if text content of winningCombinations[i]='X' player 1 wins else if winningCombination[i] = 'O' then player 2 wins
// for (let i = 0; i < winningCombination.length; i++) {
//     if(winningCombination.textContent === 'X','X','X'){
//         console.log('it works');
//         console.log(winningCombination);
//     }
    
// }
//this needs to continuously be checking this test doesn't work because it runs before i click on a square which inserts the 'X'

//CREATING THE FUNCTION TO COMPARE THE PLAYERS SCORE TO THE WINNING COMBINATION
//the player scores will most like reflect [1,4,2,6,3]. here it contains the number [1,2,3] and that is one of the combinations that can win however i have to find a way to where it can still match the winning arrays dispite the order in the players array
//probably create a for loop to loop through the winning arrays. from there match what is contained wthin the players score array to winningCombinations[i], but use a spread operator? that way we can look at each individual elements of the array to see if they contain any of it





// player1Score = [0,1,2];
// function hello(){
//     return true;
// }
// console.log(player1Score.some(() => winningCombination[0]));
// console.log(player1Score);
// console.log(winningCombination[0])


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
