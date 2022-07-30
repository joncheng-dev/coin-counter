// Outer function here
export default function closureCoinCount(initialValue) {
  // Put inner function here:
  // Returns number of remaining cents -- after removing quarters.
  return function (denomValue) {
    return `Quarters: ${initialValue % denomValue}`;
  };
}

// // coinCount -- Recursive function
// export default function coinCount(
//   amount,
//   denomValue,
//   coinDenomination,
//   coinTally = []
// ) {
//   if (amount === 0) {
//     return coinTally;
//   } else {
//     const remainder = amount % denomValue;
//     const thisCoin = [...coinTally];

//     const numCoins = (amount - remainder) / denomValue;
//     if (numCoins != 0) {
//       thisCoin.push(`${coinDenomination}: ${numCoins}`);
//     }

//     if (remainder > 9 && remainder < 25) {
//       return coinCount(remainder, 10, "dimes", thisCoin);
//     }
//     if (remainder > 4 && remainder < 10) {
//       return coinCount(remainder, 5, "nickels", thisCoin);
//     }
//     if (remainder < 5) {
//       return coinCount(remainder, 1, "pennies", thisCoin);
//     }
//   }
// }
