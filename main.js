$(document).ready(connectFourStuff);

var currentPlayer = null;
var coordinate = [0,0]; //dummy data

function connectFourStuff() {

  
  gameBoardCreate(7);
  addEventListeners();


}

function addEventListeners(){
    horizontal();
}



  var cell;
  var rows = 8;
  var cols = 7;
  var boardArray = [['o']];


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

    function change(switch_button) {
        if (switch_button.value === "Player One")
            switch_button.value = "Player Two";
        else
            switch_button.value = "Player One";
    }


    function handleClick() {
        var currentRow = $(this).parent().attr('row');
        var currentCol = $(this).attr('col');
        boardArray[currentRow][currentCol] = 'x';

        console.log('boardArray', boardArray);

        console.log('currentRow', currentRow);
        console.log(`row: ${currentRow}, col: ${currentCol}`);

        // cellEmpty = false;
        //debugger;
        if (currentCol == 6) {
            for (var row = 6; row > 0; row--) {
                var cellCheck = $("div[row=" + row + "] > div[col=" + currentCol + "]");
                console.log(cellCheck.css('background-color'));

                if (cellCheck.css('background-color') === "rgb(255, 255, 0)") {
                    $("div[row=" + row + "] > div[col=" + currentCol + "]").css('background-color', 'red');

                    return;
                }


            }
        }

    }
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
var boardArray = [
    ['1', '1', '1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['1', '1', '1', '1', '0', '0', '0']
];

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
//once piece is drop then find coordinate
//if cell is clicked or filled then set color
//else check next cell
// if have something that matches next keep going
// if no match stop

