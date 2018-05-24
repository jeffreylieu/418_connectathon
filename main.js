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

    function change(switch_button) {
        if (switch_button.value === "Player One")
            switch_button.value = "Player Two";
        else
            switch_button.value = "Player One";
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

    function vertical(){
        var x = coordinate[0];
        var y = coordinate[0];
        var counter = 0;
        for( var vertical = 0; vertical < boardArray.length; vertical++){
            if(boardArray[x][y + vertical] === '1'){
                counter++;
            } else {
                counter = 0;
            }
            if(counter === 4){
                console.log('winner');
            }
        }
    }

//once piece is drop then find coordinate
//if cell is clicked or filled then set color
//else check next cell
// if have something that matches next keep going
// if no match stop



// ******************************************************************************
//                Sharry's Code Below
// ******************************************************************************

// Sharry's function for click handling
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
    } else {
        alert('no space');
        //showInvalidMove();
    }
}//end handleClick()

function fillCell(rowtoFill, coltoFill) {
    rowtoFill++;
    playerSwitch = 1-playerSwitch;
    if(playerSwitch == 1) {
      $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'red');
    }
    else {
      $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]").css('background-color', 'black');
    }
    // currentPlayer = $("div[row=" + rowtoFill + "] > div[col=" + coltoFill + "]");
    // currentPlayer.css('background-color', 'red');
   
    //currentPlayer = "black";
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


// call at the end of the click function when coin is dropped
//function that puts piece on dom

//once piece is drop then find coordinate
//if cell is clicked or filled then set color
//else check next cell
// if have something that matches next keep going
// if no match stop

