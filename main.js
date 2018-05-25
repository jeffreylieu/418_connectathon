$(document).ready(connectFourStuff);

function connectFourStuff() {
    gameBoardCreate(7);
    addEventListeners();
    audio = document.getElementById("myAudio");
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
var audio;
//audio should define outside document.ready
//1 to make it gloable
// = getElementById inside document.ready
// if not definition inside .ready. it will find audio before DOM load.

// dynamic board creator - enter the size you want for NxN
function gameBoardCreate(size) { // need parameter to function
    for (var row = 0; row < size + 1; row++) {
        var rowHolder = $("<div>", { // creating variable for new div
            row: row, // inside each div adding row = "row-index number"
            'class': 'row', // adding a class of row
        });
        for (var col = 0; col < size; col++) {
            var column = $("<div>", { // creating variable for each column block div
                col: col, // inside each tag adding col = "col index number"
                "class": 'col', // adding class of col for each column div
            });
            cell = column;
            // console.log('cell is ', cell);
            rowHolder.append(column) // appending the column to the rowHolder div
            column.click(handleClick);
        } // close column creation for loop
        $("#gameBoard").append(rowHolder); // appending the rowHolder div to the gameBoard div
    } // close row creation for loop
} // close gameBoardCreate function

// by Jeff and Daniel
function connectFour(gameArray) {
    var boardLength = gameArray.length;
    // loop through all checks via if statements once per increment
    for (var row = 0; row < boardLength; row++) { // row loop
        for (var column = 0; column < boardLength; column++) {  // column loop
            // checking horizontal for matches  --->
            if (column < boardLength - 3 &&  // 
                checkFourMatch(gameArray[row][column], gameArray[row][column + 1], gameArray[row][column + 2], gameArray[row][column + 3])) {
                $(".col").off();
                showWinModal();
                audio.play();
                return;
            } // end horizontal match check if statement
            // checking vertical for matches
            if (row < boardLength - 3 &&
                checkFourMatch(gameArray[row][column], gameArray[row + 1][column], gameArray[row + 2][column], gameArray[row + 3][column])) {
                $(".col").off();
                showWinModal();
                audio.play();
                return;
            } // end vertical match check if statement
            // checking down then right  
            if (row < boardLength - 3 && column < boardLength - 3 &&
                checkFourMatch(gameArray[row][column], gameArray[row + 1][column + 1], gameArray[row + 2][column + 2], gameArray[row + 3][column + 3])) {
                $(".col").off();
                showWinModal();
                return;
            } // end down right if statement
            // checking down then left
            if (row < boardLength - 3 && column > 2 &&
                checkFourMatch(gameArray[row][column], gameArray[row + 1][column - 1], gameArray[row + 2][column - 2], gameArray[row + 3][column - 3])) {
                $(".col").off();
                showWinModal();
                return;
            }  // end down left if statement
        } // end column for loop
    }  // end row for loop 
    return;  // kicking out of the function if nothing is matched
}//end connectFour(gameArray)

function checkFourMatch(firstCheck, secondCheck, thirdCheck, fourthCheck) {
    if ((firstCheck !== '0') && (firstCheck === secondCheck) && (firstCheck === thirdCheck) && (firstCheck === fourthCheck)) {
        return true;
    } // function to check four places 
} // close checkFourMatch function

// Sharry's function for click handling
function handleClick() {
    var currentRow = $(this).parent().attr('row');
    var currentCol = $(this).attr('col');
    availableRow = findNextRow(currentCol);
    if (availableRow !== -1) {
        fillCell(availableRow, currentCol);
    } else {
        alert('no space');
    }
}//end handleClick()


function fillCell(rowtoFill, coltoFill) {
    //since array is less 1 row than DOM, it need add one row fro DOM & minus 1 for array
    //current array row col: rowtoFill coltoFill
    //by Jeff and Sharry
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
            boardArray[row][col] = "1";
            return row;
        }
    }
    alert('no space!');
}//end findNextRow()

function showWinModal() {
    $('#modelShadow').css('display', 'block');
    setTimeout(function () {
        $('#modelShadow').css('display', 'none');
    }, 2000);
}// end showWinModal()

function reset() {
    $('.col').css('background-color', 'yellow');
    $('[row="0"]>div').css('background-color', 'black');
    boardArray = [
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0', '0']
    ];
    $('.col').on('click', handleClick);
}//end reset()