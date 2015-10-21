import { assert } from 'chai';
import Board from '../lib/board';
import Block from '../lib/block';

describe('Block', function () {

  beforeEach(function () {
    this.board = new Board();
  });

  it('should have access to a board', function () {
    let block = new Block(this.board);
    assert.equal(block.board, this.board);
  });

  it('should have access to an X-coordinate', function () {
    let block = this.board.addBlock(10, 10);
    assert.equal(block.x, 10);
  });

  it('should have access to an Y-coordinate', function () {
    let block = this.board.addBlock(10, 10);
    assert.equal(block.y, 10);
  });

  it('should be a member of the board passed in', function () {
    let block = this.board.addBlock(5, 5);
    assert.include(this.board.blocks, block);
  });

  it('should have a piece property set to null by default', function () {
    let block = this.board.addBlock(5, 5);
    assert.isNull(block.piece);
  });

  it.skip('should know about a piece if provided', function () {

  });

  describe('canMoveDown', function () {

    it('should be false if at the bottom of the board', function () {
      let block = this.board.addBlock(0, 20);
      assert.equal(block.canMoveDown, false);
    });

    it('should be false if the block below cannot move down', function () {
      let fallingBlock = this.board.addBlock(0, 19);
      this.board.addBlock(0, 20);
      assert.equal(fallingBlock.canMoveDown, false);
    });

    it('should be true if the block below can move down', function () {
      let fallingBlock = this.board.addBlock(0, 18);
      this.board.addBlock(0, 19);
      assert.equal(fallingBlock.canMoveDown, true);
    });

    it('should otherwise be true', function () {
      let block = this.board.addBlock(0, 19);
      assert.equal(block.canMoveDown, true);
    });

  });

  describe('canMoveRight', function () {

    it('should be false if against the right wall', function () {
      let block = this.board.addBlock(10, 20);
      assert.equal(block.canMoveRight, false);
    });

    it('should be false if there\'s a block to the right that can\'t move', function () {
      let fallingBlock = this.board.addBlock(9, 20);
      this.board.addBlock(10, 20);
      assert.equal(fallingBlock.canMoveRight, false);
    });

    it('should be true if the block to the right can also move', function () {
      let fallingBlock = this.board.addBlock(8, 20);
      this.board.addBlock(9, 20);
      assert.equal(fallingBlock.canMoveRight, true);
    });

    it('should otherwise be true', function () {
      let block = this.board.addBlock(5, 19);
      assert.equal(block.canMoveRight, true);
    });

  });

  describe('canMoveLeft', function () {

    it('should be false if against the left wall', function () {
      let block = this.board.addBlock(0, 20);
      assert.equal(block.canMoveLeft, false);
    });

    it('should be false if there is any block to the left', function () {
      let fallingBlock = this.board.addBlock(1, 20);
      this.board.addBlock(0, 20);
      assert.equal(fallingBlock.canMoveLeft, false);
    });

    it('should be true if the block to the left can move too', function () {
      let fallingBlock = this.board.addBlock(2, 20);
      this.board.addBlock(1, 20);
      assert.equal(fallingBlock.canMoveLeft, true);
    });

    it('should otherwise be true', function () {
      let block = this.board.addBlock(5, 19);
      assert.equal(block.canMoveLeft, true);
    });

  });

  describe('moveDown', function () {

    it('should move down one spot', function () {
      let block = this.board.addBlock(5, 19);
      block.moveDown();
      assert.equal(block.y, 20);
    });

    it('should not move down one spot if it cannot', function () {
      let block = this.board.addBlock(5, 20);
      block.moveDown();
      assert.equal(block.y, 20);
    });

  });

  describe('moveRight', function () {

    it('should move right one spot', function () {
      let block = this.board.addBlock(5, 19);
      block.moveRight();
      assert.equal(block.x, 6);
    });

    it('should not move right one spot if it cannot', function () {
      let block = this.board.addBlock(10, 20);
      block.moveRight();
      assert.equal(block.x, 10);
    });

  });

  describe('moveLeft', function () {

    it('should move left one spot', function () {
      let block = this.board.addBlock(1, 19);
      block.moveLeft();
      assert.equal(block.x, 0);
    });

    it('should not move left one spot if it cannot', function () {
      let block = this.board.addBlock(0, 20);
      block.moveLeft();
      assert.equal(block.x, 0);
    });

  });

});
