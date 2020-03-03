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
// scope 
// hoisting
// closure

// coercion - change of type
console.log(2 + '2'); 
console.log(true + false) 
console.log(12 / "6")
"number" + 15 + 3
15 + 3 + "number"
[1] > null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[ëxí] == ëxí
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]