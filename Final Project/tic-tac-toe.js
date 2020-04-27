
//Global variables
var EMPTY = "&nbsp;";
var boxes = [];
var turn = "X";
var score;
var moves;

//Initalizes game
function init() {
    
    //Create board 3x3
    var board = document.createElement('table');
    board.setAttribute("border", 1);
    board.setAttribute("cellspacing", 0);

    var cellNum = 1;
    for (var i = 0; i < 3; i++) {
        var row = document.createElement('tr');
        board.appendChild(row);
    
        for (var j = 0; j < 3; j++) {
            var cell = document.createElement('td');
            cell.setAttribute('height', 80);
            cell.setAttribute('width', 80);
            cell.classList.add('col' + j,'row' + i);
            
            if (i == j) {
                cell.classList.add('d0');
            }

            if (j == 3 - i - 1) {
                cell.classList.add('d1');
            } 
         
            cell.identifier = cellNum;

            //When click event occurs set X or O
            cell.addEventListener("click", set);

            //Every add cell column in each row
            row.appendChild(cell);
            boxes.push(cell);
            cellNum += cellNum;
        }
    }

    //Set board to div element in tic-tac-toe.html
    document.getElementById("tictactoe").appendChild(board);
    newGame();
}


//Starts new game
function newGame() {
    score = { "X": 0, "O": 0 };
    moves = 0;
    turn = "X";

    //A cell is in a box
    //Space to write the X or O in each box
    boxes.forEach( function (square) { square.innerHTML = EMPTY; } );
}

//Check for win
function win(clicked) {
    
    // Get all cell classes
    var memberOf = clicked.className.split(/\s+/);

    for (var i = 0; i < memberOf.length; i++) {
        var cellClass = '.' + memberOf[i];

        //X or O found in specified id
        var items = contains('#tictactoe ' + cellClass, turn);
        
        //Winning
        if (items.length == 3) {
            return true;
        }
    }
    return false;
}

function contains(selector, text) {
    var elements = document.querySelectorAll(selector);

    return [].filter.call(elements, function(element){ return RegExp(text).test(element.textContent); });
}

//Updates and sets X or O
function set() {

    //If cell block has a symbol then return
    if (this.innerHTML !== EMPTY) {
        return;
    }
    
    //turn = X
    this.innerHTML = turn;
    moves += 1;
    score[turn] += this.identifier;

    //Player win
    if (win(this)) {
        setTimeout(function () { alert('Winner: Player ' + turn); }, 50);
        setTimeout(function () { newGame(); }, 1000);        
    } 
    //Draw
    else if (moves === 3 * 3) {
        setTimeout(function () { alert("Draw"); }, 50);
        setTimeout(function () { newGame(); }, 1000);
    } 
    //Continue game
    else { 
        turn = turn === "X" ? "O" : "X";
        document.getElementById('turn').textContent = 'Player ' + turn;
    }
}

init();