const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
const recursion = require("./src/recursion");

describe('SumOfOther:', () => {
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

describe("recursion:", () => {
  const treeLow = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
  const treeHigh = { value: 100, left: { value: 90, left: { value: 70, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 99 } }, right: { value: 120, left: { value: 110, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 130, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } }, right: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 1, left: { value: 2, right: { value: 100, left: { value: 90, left: { value: 70, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 99 } }, right: { value: 120, left: { value: 110, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } } }, right: { value: 130, left: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } }, right: { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 1, left: { value: 2 } } } } } } } } } } } } } } } };
  it("Root", () => {
    assert.equal(JSON.stringify(recursion({ value: 100 })), "[[100]]");
  });

  it("Low tree", () => {
      assert.equal(JSON.stringify(recursion(treeLow)), "[[100],[90,120],[70,99,110,130]]");
  });
  
  it("High tree", () => {
      assert.equal(JSON.stringify(recursion(treeHigh)), "[[100],[90,120],[70,99,110,130],[100,100,100,100],[90,120,90,120,90,120,90,120],[70,99,110,130,70,99,110,130,70,99,110,130,70,99,110,130],[1],[2],[100],[90,120],[70,99,110,130],[100,100,100,100],[90,120,90,120,90,120,90,120],[70,99,110,130,70,99,110,130,70,99,110,130,70,99,110,130],[1],[2]]");
  });
});
