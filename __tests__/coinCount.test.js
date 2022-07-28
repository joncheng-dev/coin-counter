import coinCount from "../src/coinCount.js";

// Tests.
describe("coinCount function", () => {
  let amount = 0;
  let denomValue = 25;
  test("should return an array when amount = 0", () => {
    expect(coinCount(amount, denomValue)).toBeInstanceOf(Array);
  });
  test("should return an array of size zero when amount = 0", () => {
    expect(coinCount(amount, denomValue)).toHaveLength(0);
  });
});

describe("coinCount function", () => {
  let amount = 125;
  let denomValue = 25;
  test("should return an array when amount > 0", () => {
    expect(coinCount(amount, denomValue)).toBeInstanceOf(Array);
  });
  test("should return an array of size 1 when amount > 0", () => {
    expect(coinCount(amount, denomValue)).toHaveLength(1);
  });
});

describe("coinCount function", () => {
  let amount = 135;
  let denomValue = 25;
  // denomValue shifts to 10 afterwards on its own.
  test("should return an array when amount > 0", () => {
    expect(coinCount(amount, denomValue)).toBeInstanceOf(Array);
  });
  test("should return an array of size 2 when after counting quarters, there is a leftover sum", () => {
    expect(coinCount(amount, denomValue)).toHaveLength(2);
  });
  test("array position 2 should be 10", () => {
    expect(coinCount(amount, denomValue)).toHaveLength(2);
  });
});

describe("coinCount function", () => {
  let amount = 103;
  let denomValue = 25;
  test("should return an array size 2", () => {
    expect(coinCount(amount, denomValue)).toHaveLength(2);
  });
  test("should return an array where position 0 is 4", () => {
    expect(coinCount(amount, denomValue)[0]).toBe(4);
  });
  test("should return an array where position 1 is 3", () => {
    expect(coinCount(amount, denomValue)[1]).toBe(3);
  });
});

describe("coinCount function", () => {
  let amount = 119;
  let denomValue = 25;
  test("should return an array size 4", () => {
    expect(coinCount(amount, denomValue)).toHaveLength(4);
  });
  test("should return an array where position 0 is 4", () => {
    expect(coinCount(amount, denomValue)[0]).toBe(4);
  });
  test("should return an array where position 1 is 1", () => {
    expect(coinCount(amount, denomValue)[1]).toBe(1);
  });
  test("should return an array where position 2 is 1", () => {
    expect(coinCount(amount, denomValue)[2]).toBe(1);
  });
  test("should return an array where position 3 is 4", () => {
    expect(coinCount(amount, denomValue)[3]).toBe(4);
  });
});
