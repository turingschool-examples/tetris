import { EventEmitter } from 'events';
import Block from './block';

class Board extends EventEmitter {
  constructor(columns = 10, rows = 20) {
    super();
    this.rows = rows;
    this.columns = columns;
    this.blocks = [];
  }

  addBlock(x, y) {
    let block = new Block(this, x, y);
    this.blocks.push(block);
    return block;
  }

  findBlockAtCoordinates(x, y) {
    for (let block of this.blocks) {
      if (block.x === x && block.y === y) { return block; }
    }
  }

  moveBlocksDown() {
    for (let block of this.blocks) {
      block.moveDown();
    }
    return this;
  }

  draw(context) {
    for (let block of this.blocks) {
      block.draw(context);
    }
    return this;
  }
}

export default Board;
