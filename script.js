const ticTacToe = document.querySelectorAll('.ticTactToe');
const player = document.querySelector('.player');
const theSquares = document.querySelectorAll('.theSquares');
const square = document.querySelectorAll('.square');

//click on start game show player one
player.addEventListener("click",()=>{ player.textContext = 'PLAYER ONE'});
//switch between player 1 and player 2. p.layer 1 = X and player 2 = 0. display which player is currently playing.

//for the squares if player 1 click textedit X if player 2 textedit O. if three squares match put a dash through them. will probably have to make three arrays signifying how the squares have to line up based on their number.

// base on which player got the winning array display that that player