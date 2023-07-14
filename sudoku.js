const { log } = require("console");
const readAndSolve = require("./readAndSolve");
const fs = require("fs");



const boardString1 = fs.readFileSync("./puzzles.txt", "utf-8");

const boardStringArr = boardString1.split("\n");
//console.log(boardStringArr);

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const arrSudoku = [];
  for (let i = 0; i <= boardString.length - 1; i += 9) {
    const arr = boardString.slice(i, i + 9).split("");
    arrSudoku.push(arr);
  }
  // console.table(arrSudoku);
  return arrSudoku;
  // findEmpty(solve);
}
let funct = solve(boardStringArr[process.argv[2]-1]);
// console.log(funct);
function findEmpty(funct) {
  for (let i = 0; i < funct.length; i++) {
    for (let j = 0; j < funct[i].length; j++) {
      if (funct[i][j] === "-") {
        return [i, j];
      }
    }
  }
  return null;
}
// console.log(findEmpty(funct));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
*/
let empty1 = findEmpty(funct)
let [i, j] = empty1
// console.log(empty);
// function isSolved(num, empty1, funct) {
//   if(empty1 === null) {
//     return true
//   } 
//   for(let k = 1; k < empty1.length; k += 1) {
//     if(funct[k][j] === num && k !== i) {
//       return false
//     }
//   } 
//   for(let k = 1; k < empty1.length; k += 1) {
//     if(funct[i][k] === num && k !== j) {
//       return false
//     }
//   } 
// }
let board = funct
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "-") {
        return false; // If any cell is empty, the puzzle is not solved
      }
    }
  }
  return true; // All cells are filled, the puzzle is solved
}
console.log(isSolved(boardStringArr))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "-") {
        board[i][j] = " "; // Replace empty cells with spaces for better formatting
      }
    }
  }
  console.table(board)
}
console.table(funct)

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
