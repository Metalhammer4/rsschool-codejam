const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
const make = require("./src/make");
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

describe("make:", () => {
  function sum(a, b) {
      return a + b;
  }
  function mult(a, b) {
      return a * b;
  }
  function mod(a, b) {
      return a % b;
  }
  it("Sum of numbers", () => {
      assert.equal(make(1)(1)(2)(100)(1)(sum), 105);
  });
  it("Sum of numbers and array", () => {
      assert.equal(make(1)(1)(2)([1, 2, 3, 1000])(1)(sum), 1011);
  });
  it("Sum of numbers and arrays", () => {
      assert.equal(make(1)(1)(2)([1, 2, 3, 1000, [1, 100, [33, 22, [1]]]])(1)(sum), 1168);
  }); 
  it("Multiply", () => {
      assert.equal(make(100)(5)(2)(3)(mult), 3000);
  });
  it("Mod", () => {
      assert.equal(make(19)(9)(mod), 1);
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
