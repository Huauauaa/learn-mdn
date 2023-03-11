import * as assert from 'assert';

describe('prototype', function () {
  const foo = { id: 1, name: 'foo' };
  foo.__proto__.bar = 'bar';
  it('for in', function () {
    for (const key in foo) {
      console.log(key);
    }
    assert.strictEqual(foo.bar, 'bar');
  });
  it('keys', function () {
    Object.keys(foo).forEach((key) => console.log(key));
  });

  it('writable', function () {
    Object.defineProperty(foo, 'id', { writable: false });
    // TypeError: Cannot assign to read only property 'id' of object '#<Object>'
    // foo.id = 2;
    foo.name = 'foo1';
    assert.strictEqual(foo.id, 1);
    assert.strictEqual(foo.name, 'foo1');
  });
});
