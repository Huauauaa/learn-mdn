import { strictEqual } from 'assert';
import { subtract } from './subtract';

describe('subtract', function () {
  it('assert', function () {
    strictEqual(subtract(1, 2), -1);
  });
});
