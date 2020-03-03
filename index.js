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

// IIFE - a self calling function
// default parameters

// tricky concepts
// scope 

// Global Scope

// CLOSURE

// Closure: Normally, when you exit a function, all its variables “disappear”.
// This is because nothing needs them anymore. But what if you declare a function inside a function?
// Then the inner function could still be called later, and read the variables of the outer function.
// In practice, this is very useful! But for this to work, the outer function’s variables need to “stick around” somewhere.
// So in this case, JavaScript takes care of “keeping the variables alive” instead of “forgetting” them as it would usually do.
// This is called a “closure”. While closures are often considered a misunderstood JavaScript aspect,
// you probably use them many times a day without realizing it!

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
  
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
  
    displayName();
}
  
init();