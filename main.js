$(document).ready(connectFourStuff);

var player1 = null;


function connectFourStuff() {
    gameBoardCreate(7);
    eventListeners();
  }

  function eventListeners() {

  }

  // dynamic board creator - enter the size you want for NxN
  // by Daniel
function gameBoardCreate(size) { // need parameter to function
    for (var row = 0; row < size+1; row++) {
      var rowHolder = $("<div>",{ // creating variable for new div
        row: row, // inside each div adding row = "row-index number"
        'class': 'row', // adding a class of row
      })
      for (var col = 0; col < size; col++) {
        var column = $("<div>",{ // creating variable for each column block div
        col: col, // inside each tag adding col = "col index number"
        "class": 'col', // adding class of col for each column div
      })
          rowHolder.append(column) // appending the column to the rowHolder div
      } // close column creation for loop
        $("#gameBoard").append(rowHolder); // appending the rowHolder div to the gameBoard div
    } // close row creation for loop
} // close gameBoardCreate function


// function to change players between player one and player two
// by Jeff
function change( switch_button ) {
    if ( switch_button.value === "Player One" ){

        switch_button.value = "Player Two";
        playerChange();

    } else {
        switch_button.value = "Player One";
    playerChange();
    }
}

function playerChange(square){
    if(player1 == 1){
        document.getElementById(square).innterHTML = "red";
        player1 = 0;
    } else {
        document.getElementById(square).interHTML = "black";
        player1 = 1;
    }
}//something that keeps track of what player it is.
//look at loop prototype with game board