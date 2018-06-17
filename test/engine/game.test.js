import assert from 'assert';
import Game from '../../source/engine/game';

describe('engine/game', function () {

  it('Possuir scene, camera e renderer após o init()', function () {
    let game = new Game(document.body);
    assert.notEqual(game.scene, undefined);
  });


}); 