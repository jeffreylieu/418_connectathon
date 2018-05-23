
$(document).ready(connectFourStuff);

var player1 = null;
var player2 = null;

function connectFourStuff() {
    gameBoardCreate(7);
    eventListeners();
  }

  function eventListeners() {

  }

  // dynamic board creator - enter the size you want for NxN
function gameBoardCreate(size) {
    var sideSize = size;
    debugger
    for (var row = 0; row < sideSize; row++) {
      var rowHolder = $("<div>",{
        row: row,
        'class': 'row',
      })
      for (var col = 0; col < sideSize; col++) {
        var col = $("<div>",{
        "class": 'col',
        col: col,
      })
        rowContainer.append(column)
        column.click(clickHandler)
      }
      $("#gameBoard").append(rowHolder);

    }
  }


  //button switching players
function change( switch_button ) {
    if (switch_button.value === "Player One") {
        switch_button.value = "Player Two";
        playerChange();

    } else {
        switch_button.value = "Player One";
        playerChange();
    }
}

function playerChange(){
    switch(playerColor){
        case player1:
            //clickhandler to make it red;
            break;
        case player2:
            //clickhandler to make it black;
            break;
    }
}//something that keeps track of what player it is.
//look at loop prototype with game board