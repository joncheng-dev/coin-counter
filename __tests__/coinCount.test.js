import coinCount from "../src/coinCount.js";

describe("coinCount function", () => {
  let amount = 0;

  test("should return amount of zero", () => {
    expect(coinCount(0)).toEqual(0);
  });
});
