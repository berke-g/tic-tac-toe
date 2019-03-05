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

function antiDiagonalEqual() {
    var row0 = document.getElementsByClassName('row1');
    var row1 = document.getElementsByClassName('row2');
    var row2 = document.getElementsByClassName('row3');

    var top_right = row0[2].innerHTML;
    var center = row1[1].innerHTML;
    var bottom_left = row2[0].innerHTML;

    if ( top_right === '' || center === '' || bottom_left === '') {
        return false;
    } else {
        return top_right === center && top_right === bottom_left && center == bottom_left;
    }
}

function mainDiagonalEqual() {
    var row0 = document.getElementsByClassName('row1');
    var row1 = document.getElementsByClassName('row2');
    var row2 = document.getElementsByClassName('row3');

    var top_left = row0[0].innerHTML;
    var center = row1[1].innerHTML;
    var bottom_right = row2[2].innerHTML;

    if ( top_left === '' || center === '' || bottom_right === '') {
        return false;
    } else {
        return top_left === center && top_left === bottom_right && center == bottom_right;
    } 
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

function gameOverCheck() {
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
        } else if (mainDiagonalEqual() || antiDiagonalEqual() ) {
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
        x.style.color = "darkred";
        turn += 1;
    } else if (turn % 2 == 1 && x.innerHTML === '' && !gameOver ) {
        x.innerHTML = "O";
        x.style.color = "darkblue";
        turn += 1;
    }

    //check for win 
    gameOverCheck();

    if ( gameOver ) {
        if (turn % 2 == 0) {
            document.getElementById("gameovertext").innerHTML = "Game Over";
            document.getElementById("winnertext").innerHTML = "O Won!";
            document.getElementById("winnertext").style.color = "darkblue";
        } else if (turn % 2 == 1) {
            document.getElementById("gameovertext").innerHTML = "Game Over";
            document.getElementById("winnertext").innerHTML = "X Won!";
            document.getElementById("winnertext").style.color = "darkred";
        }
    }
}