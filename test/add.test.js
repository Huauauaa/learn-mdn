import * as assert from 'assert';
import { add } from './add';

describe('add', function () {
  it('assert', function () {
    assert.equal(add(1, 2), 3);
  });
});
