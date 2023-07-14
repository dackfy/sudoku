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
  console.table(arrSudoku);
  return arrSudoku;
  // findEmpty(solve);
}
let funct = solve(boardStringArr[0]);
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
console.log(findEmpty(funct));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const size = 4;
  const boxSize = 2;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
