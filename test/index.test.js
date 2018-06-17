import assert from 'assert';
import Main from '../source/index';

describe('Main', function () {

  it('2 + 3 deve ser igual a 5', function () {
    this.main = new Main();
    assert.equal(5, this.main.sumEqualFive(2,3));
  });

}); 