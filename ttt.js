var turn = 0;
var gameOver = false;

function reset() {
    gameOver = false;
    var row1 = document.getElementsByClassName('row1');
    var row2 = document.getElementsByClassName('row2');
    var row3 = document.getElementsByClassName('row3');
    
    for (let i = 0; i < row1.length; i++) {
        row1[i].innerHTML = '';
    }

    for (let i = 0; i < row2.length; i++) {
        row2[i].innerHTML = '';
    }

    for (let i = 0; i < row3.length; i++) {
        row3[i].innerHTML = '';
    }
    
    document.getElementById("gameovertext").innerHTML = "";
    document.getElementById("winnertext").innerHTML = "";

}

function allEqual(arr) {
    var first = arr[0].innerHTML;

    if (first === '') {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML != first ) {
            return false;
        }
    }
    return true;
}

function gameOverCheck() { //TODO: check for diagonal
    var row1 = document.getElementsByClassName('row1');
    var row2 = document.getElementsByClassName('row2');
    var row3 = document.getElementsByClassName('row3');
    
    var col1 = document.getElementsByClassName('col1');
    var col2 = document.getElementsByClassName('col2');
    var col3 = document.getElementsByClassName('col3');

    if ( 
        allEqual(row1) ||
        allEqual(row2) ||
        allEqual(row3) ||
        allEqual(col1) ||
        allEqual(col2) ||
        allEqual(col3) 
        ) {
            gameOver = true;
        }


    console.log("row1 is all equal: " + allEqual(row1));
    console.log("row2 is all equal: " + allEqual(row2));
    console.log("row3 is all equal: " + allEqual(row3));
    console.log("col1 is all equal: " + allEqual(col1));
    console.log("col2 is all equal: " + allEqual(col2));
    console.log("col3 is all equal: " + allEqual(col3));

}

function myFunction(x) {
    console.log("myFunction is working");

    if (turn % 2 == 0 && x.innerHTML === '' && !gameOver) {
        x.innerHTML = "X";
        turn += 1;
    } else if (turn % 2 == 1 && x.innerHTML === '' && !gameOver ) {
        x.innerHTML = "O";
        turn += 1;
    }

    //check for win 
    gameOverCheck();

    if ( gameOver ) {
        if (turn % 2 == 0) {
            document.getElementById("gameovertext").innerHTML = "Game Over";
            document.getElementById("winnertext").innerHTML = "O Won!";
        } else if (turn % 2 == 1) {
            document.getElementById("gameovertext").innerHTML = "Game Over";
            document.getElementById("winnertext").innerHTML = "X Won!";
        }
    }
}