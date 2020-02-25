const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const numberedSquares =[];
///probably a better way to go about this then hardcoding everything
// 0,1,2 
const winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let player1Score = [];// i have to be able to match what is inside here to numberedSquares' indexes. right now displays [div.square], needs to display [numberedSquares[1]] as an example
let player2Score = [];// i have to be able to match what is inside here to numberedSquares' indexes

for (let i = 0; i < squares.length; i++){
    numberedSquares.push(squares[i]);
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
            console.log(numberedSquares[0], numberedSquares[1], numberedSquares[2]);
            player1Score.push(numberedSquares.indexOf(squares[i]));


            player.textContent = 'PLAYER TWO';
        } else if (player.textContent === 'PLAYER TWO'){
            player.textContent = 'PLAYER ONE'
            squares[i].textContent = 'O'; 
        };
        // if(player1Score.some( () => [...winningCombination[i]] )){
        //     console.log('this if else statement works');
        // }

        //i can probably be more concise by using the same concept but looping through winning combinations and call the array within the array. so winningcombo[i][0] ===so winningcombo[i][1] &&winningcombo[i][1] === winningcombo[i][2]
        //WINNING COMBO FOR PLAYER 1 
        if (numberedSquares[0].textContent  === 'X' && numberedSquares[1].textContent  === 'X' &&numberedSquares[2].textContent  === 'X'){
            console.log( 'it works');//why doesn't it work if i don't use textcontent???
        } 
        else if(numberedSquares[3].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[5].textContent  === 'X'){
            console.log( 'it works')
        }
        else if(numberedSquares[6].textContent  === 'X' && numberedSquares[7].textContent  === 'X' &&numberedSquares[8].textContent  === 'X'){
            console.log( 'it works')
        }
        else if(numberedSquares[0].textContent  === 'X' && numberedSquares[3].textContent  === 'X' &&numberedSquares[6].textContent  === 'X'){
            console.log( 'it works')
        }
        else if(numberedSquares[1].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[7].textContent  === 'X'){
            console.log( 'it works')
        }
        else if(numberedSquares[2].textContent  === 'X' && numberedSquares[5].textContent  === 'X' &&numberedSquares[8].textContent  === 'X'){
            console.log( 'it works')
        }
        else if(numberedSquares[0].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[8].textContent  === 'X'){
            console.log( 'it works')
        }
        else if(numberedSquares[2].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[6].textContent  === 'X'){
            console.log( 'it works')
        };
        // WINNING COMBO FOR PLAYER 2
        if (numberedSquares[0].textContent  === 'O' && numberedSquares[1].textContent  === 'O' &&numberedSquares[2].textContent  === 'O'){
            console.log( 'it works');//why doesn't it work if i don't use textcontent???
        } 
        else if(numberedSquares[3].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[5].textContent  === 'O'){
            console.log( 'it works')
        }
        else if(numberedSquares[6].textContent  === 'O' && numberedSquares[7].textContent  === 'O' &&numberedSquares[8].textContent  === 'O'){
            console.log( 'it works')
        }
        else if(numberedSquares[0].textContent  === 'O' && numberedSquares[3].textContent  === 'O' &&numberedSquares[6].textContent  === 'O'){
            console.log( 'it works')
        }
        else if(numberedSquares[1].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[7].textContent  === 'O'){
            console.log( 'it works')
        }
        else if(numberedSquares[2].textContent  === 'O' && numberedSquares[5].textContent  === 'O' &&numberedSquares[8].textContent  === 'O'){
            console.log( 'it works')
        }
        else if(numberedSquares[0].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[8].textContent  === 'O'){
            console.log( 'it works')
        }
        else if(numberedSquares[2].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[6].textContent  === 'O'){
            console.log( 'it works')
        };

    });
};









