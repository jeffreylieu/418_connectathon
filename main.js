
$(document).ready(connectFourStuff);

function connectFourStuff() {
    gameBoardCreate(7);
    eventListeners();
  }

  function eventListeners() {

  }

  // dynamic board creator - enter the size you want for NxN
  // by Daniel
function gameBoardCreate(size) {
    for (var row = 0; row < size; row++) {
      var rowHolder = $("<div>",{
        row: row,
        'class': 'row',
      })
      for (var col = 0; col < size; col++) {
        var column = $("<div>",{
        "class": 'col',
        col: col,
      })
        rowHolder.append(column)
      }
      $("#gameBoard").append(rowHolder);
    }
  }



// function to change players between player one and player two
// by Jeff
function change( switch_button )
{
    if ( switch_button.value === "Player One" )
        switch_button.value = "Player Two";
    else
        switch_button.value = "Player One";
}

