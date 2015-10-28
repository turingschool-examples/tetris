import { EventEmitter } from 'events';

class Block extends EventEmitter {
  constructor(board, x = 0, y = 0, piece = null) {
    super();
    this.board = board;
    this.x = x;
    this.y = y;
    this.piece = piece;
    this.active = true;
    this.board.blocks.push(this);
  }

  get inactive() {
    return !this.active;
  }

  get isAtBottom() {
    return this.y + 1 > this.board.rows;
  }

  get blockBelow() {
    return this.board.findBlockAtCoordinates(this.x, this.y + 1);
  }

  get blockToTheRight() {
    return this.board.findBlockAtCoordinates(this.x + 1, this.y);
  }

  get blockToTheLeft() {
    return this.board.findBlockAtCoordinates(this.x - 1, this.y);
  }

  get canMoveDown() {
    if (this.inactive) { return this.active; }
    if (this.isAtBottom) { return this.active = false; }
    return this.active = this.blockBelow ? this.blockBelow.canMoveDown : true;
  }

  get canMoveRight() {
    if (this.inactive) { return false; }
    if (this.x + 1 > this.board.columns) { return false; }
    return this.blockToTheRight ? this.blockToTheRight.canMoveRight : true;
  }

  get canMoveLeft() {
    if (this.inactive) { return false; }
    if (this.x - 1 < 0) { return false; }
    return this.blockToTheLeft ? this.blockToTheLeft.canMoveLeft : true;
  }

  moveDown() {
    if (this.canMoveDown) { this.y++; }
    return this;
  }

  moveRight() {
    if (this.canMoveRight) { this.x++; }
    return this;
  }

  moveLeft() {
    if (this.canMoveLeft) { this.x--; }
    return this;
  }

  draw(context) {
    context.fillRect(this.x * 30, this.y * 30, 30, 30);
    return this;
  }

}

export default Block;
