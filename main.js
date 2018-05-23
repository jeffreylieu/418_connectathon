
$(document).ready(connectFourStuff);
var boardArray = [
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0']
  ];

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
function change( switch_button )
{
    if ( switch_button.value === "Player One" )
        switch_button.value = "Player Two";
    else
        switch_button.value = "Player One";
}


function checkWin (boardArray) {
    // check horizontal - Jeff
    // check veritcal - Jeff
    // check diagonal right up - Daniel
    // check diagonal left up - Daniel
}





// //////////////////////////////////////////////////////////////// //
var currentDrop = boardArray[currentRow,currentCol];

function fourMatchChecker (currentDrop,check1,check2,check3) {
    return (currentDrop != '0') && (currentDrop == check3) && (currentDrop == check2) && (currentDrop == check3);
 }

function diagonalForwardSlash (currentRow, currentCol) {
    if (row < boardArray.length - 4 && col < boardArray.length - 3 &&
        fourMatchChecker(currentDrop, boardArray[row+1][col+1], boardArray[row+2][col+2], boardArray[row+3][col+3])) {
        return currentDrop;
    }
}

function diagonalBackSlash (currentRow, currentCol) {
    if (row < boardArray.length - 4 && col > 2 && 
        fourTogether(currentDrop, boardArray[row+1][col-1], boardArray[row+2][col-2], boardArray[row+3][col-3])) {
      return currentDrop;
    }
}

