$(document).ready(connectFourStuff);

function connectFourStuff() {
    gameBoardCreate(7);
  
    addEventListeners();
}

function addEventListeners() {
  $('#reset').on("click", reset);

}

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
var coordinate = [0, 0]; //dummy data
var availableRow;
var playerSwitch = 1;

// ******************************************************************************
//                Daniel's Code Below
// ******************************************************************************

// dynamic board creator - enter the size you want for NxN
// by Daniel
function gameBoardCreate(size) { // need parameter to function
    for (var row = 0; row < size + 1; row++) {
        var rowHolder = $("<div>", { // creating variable for new div
            row: row, // inside each div adding row = "row-index number"
            'class': 'row', // adding a class of row
        })
        for (var col = 0; col < size; col++) {
            var column = $("<div>", { // creating variable for each column block div
                col: col, // inside each tag adding col = "col index number"
                "class": 'col', // adding class of col for each column div
            })
            cell = column;
            console.log('cell is ', cell);
            rowHolder.append(column) // appending the column to the rowHolder div
            column.click(handleClick);
        } // close column creation for loop
        $("#gameBoard").append(rowHolder); // appending the rowHolder div to the gameBoard div
    } // close row creation for loop
} // close gameBoardCreate function


function checkFourMatch(firstCheck, secondCheck, thirdCheck, fourthCheck) {
    if ((firstCheck !== '0') && (firstCheck === secondCheck) && (firstCheck === thirdCheck) && (firstCheck === fourthCheck)) {
        return true;
    } // function to check four places 
} // close checkFourMatch function

function connectFour(gameArray) {
    var boardLength = gameArray.length;
    // loop through the whole board once not a bunch of times
    for (var row = 0; row < boardLength; row++) {
        for (var column = 0; column < boardLength; column++) {
            //  console.log(`row = ${row} and col = ${column}`)
            // checking horizontal for matches  --->
            if (column < boardLength - 3 &&
                checkFourMatch(gameArray[row][column], gameArray[row][column + 1], gameArray[row][column + 2], gameArray[row][column + 3])) {
                $(".col").off();
                showWinModal();
                return;
            }                              // |  
            // checking vertical for matches  |
            if (row < boardLength - 3 &&
                checkFourMatch(gameArray[row][column], gameArray[row + 1][column], gameArray[row + 2][column], gameArray[row + 3][column])) {
                $(".col").off();
                showWinModal();
                return;
            }
            // checking down then right  
            if (row < boardLength - 3 && column < boardLength - 3 &&
                checkFourMatch(gameArray[row][column], gameArray[row + 1][column + 1], gameArray[row + 2][column + 2], gameArray[row + 3][column + 3])) {
                $(".col").off();
                showWinModal();
                return;
            }
            // checking down then left
            if (row < boardLength - 3 && column > 2 &&
                checkFourMatch(gameArray[row][column], gameArray[row + 1][column - 1], gameArray[row + 2][column - 2], gameArray[row + 3][column - 3])) {
                $(".col").off();
                showWinModal();
                return;
            }
        }
    }
    return "no winner";
}//end connectFour(gameArray)



// ******************************************************************************
//                Jeff's Code Below
// ******************************************************************************

// function to change players between player one and player two
// by Jeff
function change(switch_button) {
    if (switch_button.value === "Player One") {
        switch_button.value = "Player Two";
        playerChange();
    } else {
        switch_button.value = "Player One";
        playerChange();
    }


    // function change(switch_button) {
    //     if (switch_button.value === "Player One")
    //         switch_button.value = "Player Two";
    //     else
    //         switch_button.value = "Player One";
    // }
}

// Jeff's playerChange function
function playerChange() {
    if (currentPlayer == 'red') {
    } else {
        currentPlayer = "black";
        currentPlayer = "red";
    }
}

// call at the end of the click function when coin is dropped
//function that puts piece on dom



// ******************************************************************************
//                Sharry's Code Below
// ******************************************************************************

// Sharry's function for click handling

function handleClick() {

    var currentRow = $(this).parent().attr('row');
    var currentCol = $(this).attr('col');

    console.log('currentRow currentCol', currentRow, currentCol);
    console.log(`row: ${currentRow}, col: ${currentCol}`);

    availableRow = findNextRow(currentCol);

    if (availableRow !== -1) {
        fillCell(availableRow, currentCol);
    } else {
        alert('no space');
        //showInvalidMove();
    }
}//end handleClick()

// function checkVertical(rowtoFill, coltoFill, arrayVal) {
//     var currVal = arrayVal;
//     var col = parseInt(coltoFill);
//     var preVal =boardArray;
//     var count = 0;
//     for(var i=6; i >= 0; i--) {
//       //for(var j=0; j<7; j++) {
//         //currVal = boardArray[i][j];
//         if(currVal == preVal[i][col] && currVal !== 0) {
//           count++;
//         } else {
//           count = 0;
//         } 

//         if(count == 4) {
//           alert('win');
//           return true;
//         }
//     }
//     return false;
// }

function fillCell(rowtoFill, coltoFill) {
    //since array is less 1 row than DOM, it need add one row fro DOM & minus 1 for array
    //current array row col: rowtoFill coltoFill

    console.log("current array row and col ", rowtoFill, coltoFill);
    rowtoFill++;
    playerSwitch = 1 - playerSwitch;
    if (playerSwitch == 1) {
        $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'red');
        //check if win
        connectFour(boardArray);
        //checkVertical(rowtoFill, coltoFill, boardArray[rowtoFill-1][coltoFill]);
    }
    else {
        boardArray[rowtoFill - 1][coltoFill] = "2";
        $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'black');
        //check if win
        connectFour(boardArray);
    }
}//end fillCell()

function findNextRow(col) {
    for (var row = 6; row >= 0; row--) {
        if (boardArray[row][col] === '0') {
            console.log('in findNextRow row col is', row, col);
            boardArray[row][col] = "1";
            return row;
        }
    }
}//end findNextRow()

function showWinModal() {
    $('#modelShadow').css('display', 'block');
    setTimeout(function () {
        $('#modelShadow').css('display', 'none');
    }, 4000);
}// end showWinModal()

function reset() {
  alert('hi reset hi?');
  boardArray = [
      ['0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0', '0', '0']
  ];
}//end reset()