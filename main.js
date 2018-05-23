$(document).ready(connectFourStuff);

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



