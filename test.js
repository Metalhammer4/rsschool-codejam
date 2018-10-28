const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');

describe('SumOfOther', () => {
it('1', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
});

it('2', () => {
  assert.deepEqual(sumOfOther([2, 3, 5, 7, 11, 13, 19]), [58, 57, 55, 53, 49, 47, 41]);
});

it('3', () => {
  assert.deepEqual(sumOfOther([]), []);
});
});