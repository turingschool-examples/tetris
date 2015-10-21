import { assert } from 'chai';
import Board from '../lib/board';
import Block from '../lib/block';

describe('Board', function () {

  it('should have columns', function () {
    let board = new Board(20, 0);
    assert.equal(board.columns, 20);
  });

  it('should have rows', function () {
    let board = new Board(0, 20);
    assert.equal(board.rows, 20);
  });

  it('should default to 10 columns and 20 rows', function () {
    let board = new Board();
    assert.equal(board.columns, 10);
    assert.equal(board.rows, 20);
  });

  it('should have an array of blocks', function () {
    let board = new Board();
    assert.isArray(board.blocks);
  });

  describe('findBlockAtCoordinates', function () {

    it('should find a block at a given board coordinate', function () {
      let board = new Board();
      let block = new Block(board, 5, 5);
      assert.equal(board.findBlockAtCoordinates(5, 5), block);
    });

  });

});
