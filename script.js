const ticTacToe = document.querySelector('.ticTactToe');
const heading = document.querySelector('#heading');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');
// const playerOneScore = document.querySelector('#playerOneScore');
// const playerTwoScore = document.querySelector('#playerTwoSCore')
const score = document.querySelector('.score');
const numberedSquares = [];
let activePlayer = 1;
let player1Score = 1;
let player2SCore = 0;
score.textContent = `${player1Score}:${player2SCore}`;

// create a variable that represnets victories of player 1
// create a variable that represnets victories of player 2
// on victory, increment the proper variable
// create two more h2 tags below the heading
// first one holds the value of victories of player 1
// second one holds the value of victories of player 2
// it should look like this 'score : score'

for (let i = 0; i < squares.length; i++){
    // CREATE AN ACTUAL MATRIX
    numberedSquares.push(squares[i]);
} 

const reset = () => {
    alert(`Player ${activePlayer} wins!`);

    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
};

//make a function to add 1 to the correct player's score. Let's just make it in the global scope and then call it to the appropriate  scope later

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        if (activePlayer === 1){
            squares[i].textContent = 'X';
            heading.textContent = 'PLAYER ONE';
            activePlayer = 2;
        } else if (activePlayer === 2){
            squares[i].textContent = 'O'; 
            heading.textContent = 'PLAYER TWO';
            activePlayer = 1;
        };     
    
        //get pen and paper and figure out when it's going to be true
        // IN HERE WE'RE CHECKING FOR ALL THE SOLUTIONS
        // LOGIC IS COMPLEX, WE REALLY NEED TO FIRST, FIGURE IT OUT AND THEN IMPLEMENT IT
        // PEN AND PAPER 
        // REFERENCE THE INDEX.JS FILE

        for (let i = 0; i < 3; i++) {
            let number = 0;

            for (let j = 0; j < 3; j++) {

                console.log('test');
                console.log(numberedSquares[i][j]);
                console.log(numberedSquares[i][j] === 'X');

                number++;
                // BOARD
                // [0][0]x [0][1]x [0][2]x
                // [1][0] [1][1] [1][2]
                // [2][0] [2][1] [2][2]

                if(numberedSquares[i][j] === 'X' && number == 2) {
                    console.log('VICTORY');
                }

                // i 0 j = 0
                // i 0 j = 1
                // i 0 j = 2

                // i 1 j = 0
                // i 1 j = 1
                // i 1 j = 2

                // i 2 j = 0
                // i 2 j = 1
                // i 2 j = 2
            }
        }

    
        // if (numberedSquares[0].textContent  === 'X' && numberedSquares[1].textContent  === 'X' && numberedSquares[2].textContent  === 'X' ){
        //     reset();
        // }  else if(numberedSquares[3].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[5].textContent  === 'X'){
        //     reset();
        // } else if(numberedSquares[6].textContent  === 'X' && numberedSquares[7].textContent  === 'X' &&numberedSquares[8].textContent  === 'X'){
        //     reset();
        // } else if(numberedSquares[0].textContent  === 'X' && numberedSquares[3].textContent  === 'X' &&numberedSquares[6].textContent  === 'X'){
        //     reset();
        // } else if(numberedSquares[1].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[7].textContent  === 'X'){
        //     reset();
        // } else if(numberedSquares[2].textContent  === 'X' && numberedSquares[5].textContent  === 'X' &&numberedSquares[8].textContent  === 'X'){
        //     reset();
        // } else if(numberedSquares[0].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[8].textContent  === 'X'){
        //     reset();
        // } else if(numberedSquares[2].textContent  === 'X' && numberedSquares[4].textContent  === 'X' &&numberedSquares[6].textContent  === 'X'){
        //     reset();
        // } else if (numberedSquares[0].textContent  === 'O' && numberedSquares[1].textContent  === 'O' &&numberedSquares[2].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[3].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[5].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[6].textContent  === 'O' && numberedSquares[7].textContent  === 'O' &&numberedSquares[8].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[0].textContent  === 'O' && numberedSquares[3].textContent  === 'O' &&numberedSquares[6].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[1].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[7].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[2].textContent  === 'O' && numberedSquares[5].textContent  === 'O' &&numberedSquares[8].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[0].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[8].textContent  === 'O'){
        //     reset();
        // } else if(numberedSquares[2].textContent  === 'O' && numberedSquares[4].textContent  === 'O' &&numberedSquares[6].textContent  === 'O'){
        //     reset();
        // } else if ((numberedSquares.every((numberedSquares) => numberedSquares.textContent === 'X'||numberedSquares.textContent === 'O' ))){
        //     console.log('DRAW');

        //     reset();
        // };
    });
};










