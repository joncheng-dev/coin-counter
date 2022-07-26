export default function coinCount(
  amount,
  quarters,
  dimes,
  nickels,
  pennies,
  coinTotal = []
) {
  if (amount === 0) {
    coinTotal.push(quarters);
    coinTotal.push(dimes);
    coinTotal.push(nickels);
    coinTotal.push(pennies);
    return coinTotal;
  } else {
    if (amount > 0.25) {
      quarters += 1;
      amount -= 0.25;
      coinCount(coinTotal, amount, quarters, dimes, nickels, pennies);
    }
    if (amount > 0.09 && amount < 0.25) {
      dimes += 1;
      amount -= 0.1;
      coinCount(coinTotal, amount, quarters, dimes, nickels, pennies);
    }
    if (amount > 0.04 && amount < 0.1) {
      nickels += 1;
      amount -= 0.05;
      coinCount(coinTotal, amount, quarters, dimes, nickels, pennies);
    }
    if (amount > 0 && amount < 0.05) {
      pennies;
    }
  }
}
