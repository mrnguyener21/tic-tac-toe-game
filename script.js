const ticTacToe = document.querySelector('.ticTactToe');
const player = document.querySelector('#player');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');

const numberedSquares =[];
///probably a better way to go about this then hardcoding everything
// 0,1,2 
const winningCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let player1Score = [];
let player2Score = [];

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
        //for some reason the below code doesnt work in the global scope;
        if (numberedSquares[0].textContent  === 'X' && numberedSquares[1].textContent  === 'X' &&numberedSquares[2].textContent  === 'X'){
            console.log( 'it works');//why doesn't it work if i don't use textcontent???
            player.textContent = 'PLAY AGAIN?' //prevents from adding another x or o but the console log is still countin whenever we click
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
        
        }else if (numberedSquares[0].textContent  === 'O' && numberedSquares[1].textContent  === 'O' &&numberedSquares[2].textContent  === 'O'){
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
        }
        else if ((numberedSquares.every((numberedSquares) => numberedSquares.textContent === 'X'||numberedSquares.textContent === 'O' ))){
        console.log('draw');// why do i need a parameter
        };


        if(player.textContent === 'PLAY AGAIN?'){
            player.addEventListener('click', () => {
                numberedSquares.textContent = '';
                player.textContent = 'PLAYER ONE';
            });
        }
    });
};

//CREATE A FUNCTION SO THE GAME CAN'T CONTINUE IF A WINNER OR DRAW IS DETERMINED

//CREATE A FUNCTION SO IF THE SQUARE CONTAINS A TEXT THE OTHER PLAYER CAN'T OVERWRITE IT

//CREATE A FUNCTION SO WHEN ITS'S PLAYER 2 WE CAN'T CLICK ON THE BUTTON TO CHANGE TO PLAYER 1 CAUSE THAT'S HAPENING FOR SOME REASON







