
$(document).ready(connectFourStuff);

function connectFourStuff() {

  
  gameBoardCreate(7);
  eventListeners();


}
var cell;


  var rows = 8;
  var cols = 7;
  var boardArray = [['o']];


function eventListeners() {

}

// dynamic board creator - enter the size you want for NxN
// by Daniel
function gameBoardCreate(size) {
  for (var row = 0; row < size; row++) {
    var rowHolder = $("<div>", {
      row: row,
      'class': 'row',
    })
    for (var col = 0; col < size; col++) {
      var column = $("<div>", {
        "class": 'col',
        col: col,
      })
      rowHolder.append(column);
      column.click(handleClick);

    }
    $("#gameBoard").append(rowHolder);
  }
}



// function to change players between player one and player two
// by Jeff
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
      console.log(cellCheck.css('background-color'))
      
      if (cellCheck.css('background-color') === "rgb(255, 255, 0)") {
        $("div[row=" + row + "] > div[col=" + currentCol + "]").css('background-color', 'red');

        return
      }


    }
  }

}

