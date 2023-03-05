import assert from 'assert';
import { add } from './add';

describe('foo', function () {
  it('assert', function () {
    assert.equal(add(1, 2), 3);
  });
});
