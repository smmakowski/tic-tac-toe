var prompt = require('prompt');

function displayRows(rows) {
  console.log('')
  console.log('(0) (1) (2)');
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var rowStr = ''
    for (var j = 0; j < row.length; j++) {
      if (j < row.length - 1) {
        rowStr += row[j] + ' | '
      } else {
        rowStr += row[j] + ' (' + i + ')'
      }
    }

    if (i < rows.length - 1) {
      console.log(rowStr);
      console.log('__________')
    } else {
      console.log(rowStr);
    }
  }
}

// should be run after eachturn is taken
function isVictory(rows, letter) {
  var victory = false;

  // check horizontally
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var count = 0;
    for (var j = 0; j < row.length; j++) {
      if (row[j] === letter) {
        count += 1;
      }
      if (count === 3) {
        victory = true;
      }
    }
  }
  //check vertically
  var firstRow = rows[0];
  for (var k = 0; k < firstRow.length; k++) {
    var col = firstRow[k];
    if (rows[k][0] === letter && rows[k][1] === letter && rows[k][2] === letter) {
      victory = true;
    }
  }
  // check diag one
  if (rows[0][0] === letter && rows[1][1] === letter && rows[2][2] === letter) {
    victory = true;
  }

  // check diag 2
  if (rows[0][2] === letter && rows[1][1] === letter && rows[2][0] === letter) {
    victory = true;
  }

  return victory;
}

function takeTurn(player) {

}

function main() {
  var inGame = false;
  console.log('Welcome to tic tac toe!');
  console.log('Directions: when prompted select the row and column that you wish to place your X or O.');
  console.log('X will go first. Good Luck!');
  var player = 'X';


  var rows = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
  displayRows(rows);
  inGame = true;

  while (inGame) {
    console.log('Game in progress');

    inGame = false;

    // check for victory
    if (checkBoard) {
      console.log(player + ' has won the game!');
      inGame = false;
    } else {
      if (player === 'X') {
        player = 'O';
      } else  if (player === 'O') {
        player = 'X';
      }
    }
  }

  // prompt to start
  console.log('finished');



}

main();
