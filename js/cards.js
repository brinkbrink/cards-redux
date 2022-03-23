// tabs function
$( function() {
    $( "#tabs" ).tabs();
  } );

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

document.getElementById("card1").innerHTML = getRandomInt(1,10);

// function assignStatement(int) {
//     int = getRandomInt(0,20)
// }

let cards = ['Apple', 'ddd','dklj'];

let x = getRandomInt(0,2);
let y = cards[x];

document.getElementById("card2").innerHTML = y;