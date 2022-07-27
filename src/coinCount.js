export default function coinCount(amount, denomValue, coinTally = []) {
  console.log("Coin Tally array: ", coinTally);
  if (amount === 0) {
    return coinTally;
  } else {
    // Let's say my amount initially passed in was 103.
    const remainder = amount % denomValue; // Here, remainder will be 3 -- 103 % 25.
    // The number pushed will be 4, since 100 / 25 will be four quarters.
    const thisCoin = [...coinTally];
    thisCoin.push((amount - remainder) / denomValue);
    // Here I'll handle reiterations of the recursive function.
    if (remainder > 9 && remainder < 24) {
      const updatedArray = coinCount(remainder, 10, thisCoin);
      console.log("Array after dimes: ", updatedArray);
      return updatedArray;
    }
    if (remainder > 4 && remainder < 10) {
      const updatedArray = coinCount(remainder, 5, thisCoin);
      console.log("Array after nickels: ", updatedArray);
      return updatedArray;
    }
    if (remainder < 5) {
      const updatedArray = coinCount(remainder, 1, thisCoin);
      console.log("Array after pennies: ", updatedArray);
      return updatedArray;
    }
    // // Once else statement completes, exit.
    // console.log("This coin: ", thisCoin);
    // return thisCoin;
  }
}

// // SAVE for later
// export default function coinCount(amount, denomValue, coinTally = []) {
//   if (amount === 0) {
//     console.log("Coin Tally array: ", coinTally);
//     return coinTally;
//   } else {
//     // Let's say my amount initially passed in was 103.
//     console.log("coinCount amount: " + amount);
//     console.log("denomValue amount: " + denomValue);
//     const remainder = amount % denomValue; // Here, remainder will be 3 -- 103 % 25.
//     console.log("remaining amount: " + remainder);
//     // The number pushed will be 4, since 100 / 25 will be four quarters.
//     const thisCoin = [...coinTally];
//     thisCoin.push((amount - remainder) / denomValue);
//     console.log("thisCoin array: ", thisCoin);
//     // Here I'll handle a reiteration of the recursive function.
//     if (remainder > 0 && remainder < 5) {
//       coinCount(remainder, 1, thisCoin);
//     }
//   }
// }
