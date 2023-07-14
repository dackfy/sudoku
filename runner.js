// Подключить модуль работы с файловой системой.
const fs = require('fs');
console.log('Привет игрок')
// Подключить функцию readAndSolve из соответствующего файла.
const readAndSolve = require('./readAndSolve');

// Все судоку для решения доступны в файле puzzles.txt.
// Прочесть файл puzzles.txt в кодировке 'utf-8' и передать его содержимое в функцию readAndSolve.
console.log('УПС! Что-то пошло не так');
fs.readFile(
  './puzzles.txt',
  'utf-8',
  readAndSolve,
);
