import closureCoinCount from "../src/coinCount.js";

// Tests for Part 2 (Closure).
describe("closureCoinCount function", () => {
  let value = 103;
  test("should take a number -- number of cents -- return number of quarters in coins", () => {
    expect(closureCoinCount(value)(25)).toEqual(3);
  });
});

// // Tests for Part 1 (Recursive Function).
// describe("coinCount function", () => {
//   let amount = 0;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   test("should return an array when amount = 0", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toBeInstanceOf(
//       Array
//     );
//   });
//   test("should return an array of size zero when amount = 0", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(0);
//   });
// });

// describe("coinCount function", () => {
//   let amount = 125;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   test("should return an array when amount > 0", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toBeInstanceOf(
//       Array
//     );
//   });
//   test("should return an array of size 1 when amount > 0", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(1);
//   });
// });

// describe("coinCount function", () => {
//   let amount = 135;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   // denomValue shifts to 10 afterwards on its own.
//   test("should return an array when amount > 0", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toBeInstanceOf(
//       Array
//     );
//   });
//   test("should return an array of size 2 when after counting quarters, there is a leftover sum", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(2);
//   });
//   test("array should be: ['quarters: 5', 'dimes: 1']", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toEqual([
//       "quarters: 5",
//       "dimes: 1",
//     ]);
//   });
// });

// describe("coinCount function", () => {
//   let amount = 103;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   test("should return an array size 2", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(2);
//   });
//   test("array should be: ['quarters: 4', 'pennies: 3']", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toEqual([
//       "quarters: 4",
//       "pennies: 3",
//     ]);
//   });
// });

// describe("coinCount function", () => {
//   let amount = 119;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   test("should return an array size 4", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(4);
//   });
//   test("array should be: ['quarters: 4', 'dimes: 1', 'nickels: 1', 'pennies: 4']", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toEqual([
//       "quarters: 4",
//       "dimes: 1",
//       "nickels: 1",
//       "pennies: 4",
//     ]);
//   });
// });

// describe("coinCount function", () => {
//   let amount = 499;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   test("should return an array size 3", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(3);
//   });
//   test("array should be: ['quarters: 19', 'dimes: 2', 'pennies: 4']", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toEqual([
//       "quarters: 19",
//       "dimes: 2",
//       "pennies: 4",
//     ]);
//   });
// });

// describe("coinCount function", () => {
//   let amount = 8;
//   let denomValue = 25;
//   let coinDenomination = "quarters";
//   test("should return an array size 2", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toHaveLength(2);
//   });
//   test("array should be: ['nickels: 1', 'pennies: 3']", () => {
//     expect(coinCount(amount, denomValue, coinDenomination)).toEqual([
//       "nickels: 1",
//       "pennies: 3",
//     ]);
//   });
// });
