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
var boardArrayHor = [
  ['1', '1', '1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '1', '1', '0']
];
var boardArrayVer = [
  ['1', '0', '0', '0', '0', '0', '0'],
  ['1', '0', '0', '0', '0', '0', '0'],
  ['1', '0', '0', '0', '0', '0', '0'],
  ['1', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '1', '0', '0']
];
var boardArraybs = [
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '0', '0'],
  ['0', '0', '1', '0', '0', '0', '0'],
  ['0', '0', '0', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '1', '0', '0']
];
var boardArrayfs = [
  ['0', '0', '0', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0', '0', '0'],
  ['0', '1', '0', '0', '0', '0', '0'],
  ['1', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0']
];

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

function checkWin (boardArray) {
  // check horizontal - Jeff
  // check veritcal - Jeff
  // check diagonal right up - Daniel
  // check diagonal left up - Daniel
}

function diagonalForwardSlash(currentRow, currentCol){
  var counter = 0;
  for( var startRow = 3; startRow < boardArrayfs.length; startRow++){
    for( var startCol = 0; startCol < boardArrayfs.length; startCol++) {
      console.log(startRow,startCol)
      if(boardArrayfs[startRow+1][startCol+1] === '1'){
        if (startRow+1 > boardArray.length || startCol+1 > boardArray.length) {
          // bouncer?
        }
        counter++;  
        console.log(counter)
      }else {
        counter = 0;
        console.log(counter)
      }
    }
  if(counter === 4){
    console.log('winner');
    }
      //if coordinate is at "this place" then check if 1 then +1 until 0; if 0 then -1 till 0 again
  }
}

function diagonalBackSlash (currentRow, currentCol) {
  var counter = 0;
  for( var horizontal = 1; horizontal < boardArray.length; horizontal++){
      if(boardArraybs[currentRow + horizontal][currentCol - horizontal] === '1'){
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



function checkFourMatch(firstCheck,secondCheck,thirdCheck,fourthCheck) {
  if ((firstCheck !== '0') && (firstCheck === secondCheck) && (firstCheck === thirdCheck) && (firstCheck === fourthCheck)) {
    return true;
  }
}

function connectFour(gameArray) {
 var boardLength = gameArray.length;
 // loop through the whole board once not a bunch of times
 for (var row = 0; row < boardLength; row++) {
   for (var column = 0; column < boardLength; column++) {
     console.log(`row = ${row} and col = ${column}`)
     // checking horizontal for matches
     if (column < boardLength - 3 &&
      checkFourMatch(gameArray[row][column], gameArray[row][column+1], gameArray[row][column+2], gameArray[row][column+3])) {
     console.log("horizontal check yes")
     return;
      }
     // checking vertical for matches
     if (row < boardLength - 3 &&
      checkFourMatch(gameArray[row][column], gameArray[row+1][column], gameArray[row+2][column], gameArray[row+3][column])) {
        console.log("vertical check yes")
        return;     }
     // checking down then right
     if (row < boardLength - 3 && column < boardLength - 3 &&
      checkFourMatch(gameArray[row][column], gameArray[row+1][column+1], gameArray[row+2][column+2], gameArray[row+3][column+3])) {
        console.log("down right check yes")
        return;
     }
     // checking down then left
     if (row < boardLength - 3 && column > 2 && 
      checkFourMatch(gameArray[row][column], gameArray[row+1][column-1], gameArray[row+2][column-2], gameArray[row+3][column-3])) {
        console.log("down left check yes")
        return;
     }
   }      
 } 
 return "no winner";
}