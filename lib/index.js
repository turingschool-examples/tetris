const Board = require('./board');

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

let board = new Board(20, 10, context);
let block = board.addBlock(0, 0);

let now = Date.now();
let then = Date.now();
let interval = 500;

requestAnimationFrame(function gameLoop() {
  now = Date.now();

  let delta = now - then;

  if (delta > interval) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    board.draw(context).moveBlocksDown();
    then = now - (delta % interval);
  }

  requestAnimationFrame(gameLoop);
});
