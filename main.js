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
var currentPlayer = null;
var coordinate = [0,0]; //dummy data
var availableRow;
var playerSwitch = 1;

function connectFourStuff() {
  gameBoardCreate(7);
  addEventListeners();
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


// ******************************************************************************
//                Daniel's Code Below
// ******************************************************************************

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

        rowHolder.append(column) // appending the column to the rowHolder div
        column.click(handleClick);

      } // close column creation for loop
        $("#gameBoard").append(rowHolder); // appending the rowHolder div to the gameBoard div
    } // close row creation for loop
} // close gameBoardCreate function


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
    // Jeff's playerChange function
function playerChange() {
  if (currentPlayer == 'red') {
      currentPlayer = "black";
  } else {
      currentPlayer = "red";
  }
}
// call at the end of the click function when coin is dropped
//function that puts piece on dom



// ******************************************************************************
//                Sharry's Code Below
// ******************************************************************************

// Sharry's function for click handling

//     function handleClick() {
//         var currentRow = $(this).parent().attr('row');
//         var currentCol = $(this).attr('col');
//         boardArray[currentRow][currentCol] = 'x';
//         console.log('boardArray', boardArray);
//         console.log('currentRow', currentRow);
//         console.log(`row: ${currentRow}, col: ${currentCol}`);
//         // cellEmpty = false;
//         //debugger;
//         if (currentCol == 6) {
//             for (var row = 6; row > 0; row--) {
//                 var cellCheck = $("div[row=" + row + "] > div[col=" + currentCol + "]");
//                 console.log(cellCheck.css('background-color'));
//
//                 if (cellCheck.css('background-color') === "rgb(255, 255, 0)") {
//                     $("div[row=" + row + "] > div[col=" + currentCol + "]").css('background-color', 'red');
//
//                     return;
//                 }
//             }
//         }
//
//     }



function handleClick() { 

    // function handleClick() {
    //     var currentRow = $(this).parent().attr('row');
    //     var currentCol = $(this).attr('col');
    //     boardArray[currentRow][currentCol] = 'x';
    //     console.log('boardArray', boardArray);
    //     console.log('currentRow', currentRow);
    //     console.log(`row: ${currentRow}, col: ${currentCol}`);
    //     // cellEmpty = false;
    //     //debugger;
    //     if (currentCol == 6) {
    //         for (var row = 6; row > 0; row--) {
    //             var cellCheck = $("div[row=" + row + "] > div[col=" + currentCol + "]");
    //             console.log(cellCheck.css('background-color'));

    //             if (cellCheck.css('background-color') === "rgb(255, 255, 0)") {
    //                 $("div[row=" + row + "] > div[col=" + currentCol + "]").css('background-color', 'red');

    //                 return;
    //             }
    //         }
    //     }

    // }
}


function handleClick() {

    var currentRow = $(this).parent().attr('row');
    var currentCol = $(this).attr('col');

    console.log('currentRow currentCol', currentRow, currentCol);
    console.log(`row: ${currentRow}, col: ${currentCol}`);

    availableRow = findNextRow(currentCol);

    if(availableRow !== -1) {
        fillCell(availableRow, currentCol);
        directionCheck();
    } else {
        alert('no space');
        //showInvalidMove();
    }
}//end handleClick()

function fillCell(rowtoFill, coltoFill) {
  //since array is less 1 row than DOM, it need add one row fro DOM and minus 1 for array
    rowtoFill++;
    playerSwitch = 1-playerSwitch;
    if(playerSwitch == 1) {
      $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'red');
      //check if win
    }
    else {
      
      boardArray[rowtoFill-1][coltoFill] = "2";
      $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'black');
      //check if win
    }
  }//end fillCell()

function findNextRow(col) {
    for (var row = 6; row >= 0; row--) {
        if(boardArray[row][col] === '0') {
            console.log('in findNextRow row col is', row, col);
            boardArray[row][col] = "1";
            return row;
        }
    }
}//end findNextRow()

function directionCheck(){
    horizontal();
    vertical();
}
//something that keeps track of what player it is.
//look at loop prototype with game 



