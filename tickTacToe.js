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

function takeTurn() {

}

function main() {
  var rows = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
  displayRows(rows);

}

main();
