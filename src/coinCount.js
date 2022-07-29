export default function coinCount(amount, denomValue, coinTally = []) {
  if (amount === 0) {
    return coinTally;
  } else {
    const remainder = amount % denomValue;
    const thisCoin = [...coinTally];

    let coinDenomination = "";
    if (denomValue === 25) {
      coinDenomination = "quarters";
    } else if (denomValue === 10) {
      coinDenomination = "dimes";
    } else if (denomValue === 5) {
      coinDenomination = "nickels";
    } else {
      coinDenomination = "pennies";
    }
    const numCoins = (amount - remainder) / denomValue;
    thisCoin.push(`${coinDenomination}: ${numCoins}`);

    if (remainder > 9 && remainder < 25) {
      return coinCount(remainder, 10, thisCoin);
    }
    if (remainder > 4 && remainder < 10) {
      return coinCount(remainder, 5, thisCoin);
    }
    if (remainder < 5) {
      return coinCount(remainder, 1, thisCoin);
    }
  }
}
