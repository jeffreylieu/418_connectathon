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
  var availableRow;
  var changedRow;
  var changedCol;

var currentPlayer = null;
var coordinate = [0,0]; //dummy data

function connectFourStuff() {
  gameBoardCreate(7);
 // eventListeners();

}

function addEventListeners(){
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
        column.click(handleClick);

      } // close column creation for loop
        $("#gameBoard").append(rowHolder); // appending the rowHolder div to the gameBoard div
    } // close row creation for loop
} // close gameBoardCreate function

// ******************************************************************************
//                Jeff's Code Below
// ******************************************************************************

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
  rowtoFill++;
  $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'red');
}

function findNextRow(col) {
  for (var row = 6; row >= 0; row--) {
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




function playerChange() {
    if (currentPlayer === 'red') {
        currentPlayer = "black";
    } else {
        currentPlayer = "red";
    }
}
// call at the end of the click function when coin is dropped
//function that puts piece on dom


function horizontal(){

    var x = coordinate[0];
    var y = coordinate[0];
    //remove above variables, and pass in x and y to horizontal function to make it dynamic
    var counter = 0;
    for( var horizontal = 0; horizontal < boardArray.length; horizontal++){
        if(boardArray[y][x + horizontal] === '1'){
            counter++;
        } else {
            counter = 0;
        }

        if(counter === 4){
            console.log('winner');
        }

        //if coordinate is at "this place" then check if 1 then +1 until 0; if 0 then -1 till 0 again
    }
}
//something that keeps track of what player it is.
//look at loop prototype with game 
