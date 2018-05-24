$(document).ready(connectFourStuff);

var player1 = null;


function connectFourStuff() {
  gameBoardCreate(7);
 // eventListeners();


}
var cell;

var availableRow;
var changedRow;
var changedCol;
var boardArray = [
                  ['0', '0', '0', '0', '0', '0', '0'],
                  ['0', '0', '0', '0', '0', '0', '0'],
                  ['0', '0', '0', '0', '0', '0', '0'],
                  ['0', '0', '0', '0', '0', '0', '0'],
                  ['0', '0', '0', '0', '0', '0', '0'],
                  ['0', '0', '0', '0', '0', '0', '0'],
                  ['0', '0', '0', '0', '0', '0', '0']
                ];


// dynamic board creator - enter the size you want for NxN
// by Daniel
function gameBoardCreate(size) { // need parameter to function
    for (var row = 0; row < size; row++) {
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
        // column.click(handleClick);

      } // close column creation for loop
        $("#gameBoard").append(rowHolder); // appending the rowHolder div to the gameBoard div
    } // close row creation for loop
} // close gameBoardCreate function


// function to change players between player one and player two
// by Jeff

function change( switch_button ) {
    if (switch_button.value === "Player One") {

        switch_button.value = "Player Two";
        playerChange();

    } else {
        switch_button.value = "Player One";
        playerChange();
    }

function handleClick() {
  var currentRow = $(this).parent().attr('row');
  var currentCol = $(this).attr('col');
  
  console.log('currentRow currentCol', currentRow, currentCol);
  console.log(`row: ${currentRow}, col: ${currentCol}`);

  availableRow = findNextRow(currentCol);

  if(availableRow !== -1) {
    fillCell(availableRow, currentCol);
  } else {
    alert('no space');
    //showInvalidMove();
  }
}//end handleClick()

function fillCell(rowtoFill, coltoFill) {
  $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'red');
}

function findNextRow(col) {
  for (var row = 6; row >= 0; row--) {
    debugger;
    if(boardArray[row][col] === '0') {
      console.log('in findNextRow row col is', row, col);
      boardArray[row][col] = "1";
      return row;
    } 
  }
}//end findNextRow()




// JEFF CODE BELOW

    function change(switch_button) {
        if (switch_button.value === "Player One")
            switch_button.value = "Player Two";
        else
            switch_button.value = "Player One";
    }



    function playerChange(square) {
        if (player1 == 1) {
            document.getElementById(square).innerHTML = "red";
            player1 = 0;
        } else {
            document.getElementById(square).innerHTML = "black";
            player1 = 1;
        }
    }
}//something that keeps track of what player it is.
//look at loop prototype with game board
