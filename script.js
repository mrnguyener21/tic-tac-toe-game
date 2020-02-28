const ticTacToe = document.querySelector('.ticTactToe');
const heading = document.querySelector('#heading');
const theSquares = document.querySelector('.theSquares');
const squares = document.querySelectorAll('.square');
const score = document.querySelector('.score');

let activePlayer = 1;
let player1Score = 0;
let player2Score = 0;

const numberedSquares = [];



//TEMPORARY CODE UNTIL DETERMINING WINNER FUNCTION HAS BEEN COMPLETED. I put here befoe the score.textcontent so the score can update since javascript reads top down
// (if player1 === 'VICTORY'){
//     ++player1Score;
// }else if( player2 === 'VICTORY'){
//     ++player2Score;
// };

score.textContent = `${player1Score}:${player2Score}`;

// create a variable that represnets victories of player 1 DONE
// create a variable that represnets victories of player 2 DONE
// on victory, increment the proper variable DONE-ISH
// create two more h2 tags below the heading
// first one holds the value of victories of player 1 DONE?
// second one holds the value of victories of player 2 DONE?
    // I actually ended up making the score with javascriiiipt....
// it should look like this 'score : score' DONE


//push an empty array into i, so i can have 3 empty arrays
//push j into the i numbereSqaures[i] array, 3x's for each
//j should be the squares since they are numbered, probably use index of squares actually so we can push the number into the j array
//how to push and create arrays for the vertical and diagonals
for (let i = 0; i < 3; i++){
    // CREATE AN ACTUAL MATRIX
    let row = [];
    numberedSquares.push(row);

    for (let j = 0; j <3; j++){
    numberedSquares[i].push[squares[j]];
    };
} ;

console.log(numberedSquares)
// console.log(squares)
// console.log(numberedSquares[i][j]);
const reset = () => {
    alert(`Player ${activePlayer} wins!`);

    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
};

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
                //this nested loop will make the i array go through each iteration within the j array before moving onto the next iteration within the i array. 
                // so i = 0 will go through [0][0], [0][1] and [0][2] before going onto it's second iteration with this current nested loop
                // console.log('test');
                // console.log(numberedSquares[i][j]);
                // console.log(numberedSquares[i][j] === 'X');

                number++;
                // BOARD
                // [0][0]x [0][1]x [0][2]x
                // [1][0] [1][1] [1][2]
                // [2][0] [2][1] [2][2]

                if(numberedSquares[i][j] === 'X' && number == 2) {
                    // console.log('VICTORY');
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










