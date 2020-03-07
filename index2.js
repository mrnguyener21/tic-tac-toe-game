// THIS IS THE GENERAL IDEA

// MATIXES / TWO DIMENSIONAL ARRAYS 

// BOARD
// [0][0] [0][1] [0][2]
// [1][0] [1][1] [1][2]
// [2][0] [2][1] [2][2]

https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript

// const board = [];

// // creates rows
// for (let i = 0; i < 3; i++) {
//     // creates columns
//     for (let j = 0; j < 3; j++) {

//     } 
// }

// const winningCombination = [ 
//     [ 0, 1, 2 ], 
//     [ 3, 4, 5 ], 
//     [ 6, 7, 8 ], 
//     [ 0, 3, 6 ], 
//     [ 1, 4, 7 ], 
//     [ 2, 5, 8 ], 
//     [ 0, 4, 8 ],
//     [ 2, 4, 6 ] 
// ];

// BUG WHERE IT DRAWS if all fields are filled

// IIFE(immediately invoked function expression) - a self calling function
// default parameters

// tricky concepts
// scope - where do you have access to variables
// hoisting
// closure

//get winner example
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner;
    };
// the winner with draw example

    function getWinner() {
        let winner = null;
        winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
        winner = board[combo[0]];
        }
        });
        // new code below// this apparently what makes it draw
        return winner ? winner : board.includes('') ? null : 'T';
        };


// primitive values: strings, numbers, booleans
// COPYING BY VALUE
let number = 2;

let newNumber = number;

number = 3;

console.log(number); // 3
console.log(newNumber); // 2

// complex values: objects, arrays
// COPYING BY REFERENCE

const person = {
    name: 'Victor',
    girlfriend: {
        name: 'Betty'
    }
} 

// COPYING BY REFERENCE
    const newPerson = person;

    person.name = 'TEST';

    console.log(person); // 'TEST'
    console.log(newPerson); // 'TEST'

// SHALLOW CLONE (GOES ONE LEVEL DEEP)
    const person = {
        name: 'Victor',
        girlfriend: {
            name: 'Betty'
        }
    } 

    const newPerson = { ...person, girlfriend: { ...person.girlfriend } };

    person.girlfriend.name = 'TEST';

    console.log(person.girlfriend.name); // 'TEST'
    console.log(newPerson.girlfriend.name); // 'TEST'

// DEEP CLONE (GOES DEEP)
    const newPerson = JSON.parse(JSON.stringify(person));

    person.girlfriend.name = 'TEST';

    console.log(person.girlfriend.name); // 'TEST'
    console.log(newPerson.girlfriend.name); // 'Betty'