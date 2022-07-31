// coinCount -- Using closure
export default function closureCoinCount(denomValue) {
  const relevantInfo = [];
  // Put inner function here:
  return function (initialValue) {
    const remaining = initialValue % denomValue;
    const numCoins = (initialValue - remaining) / denomValue;
    relevantInfo.push(numCoins);
    relevantInfo.push(remaining);
    return relevantInfo;
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
