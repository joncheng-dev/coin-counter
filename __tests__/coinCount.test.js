import coinCount from "../src/coinCount.js";

// Tests.
// Function should return an array, amount = 0.
describe("coinCount function", () => {
  let amount = 0;
  test("should return an array when amount = 0", () => {
    expect(coinCount(amount)).toBeInstanceOf(Array);
  });
});
// Function should return an array, amount != 0.
describe("coinCount function", () => {
  let amount = 120;
  test("should return an array when amount != 0", () => {
    expect(coinCount(amount)).toBeInstanceOf(Array);
  });
});
