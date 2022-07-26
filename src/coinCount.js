export default function coinCount(amount, denomValue, coinTotal = []) {
  if (amount === 0) {
    return coinTotal;
  } else {
    coinTotal.push((amount - (amount % denomValue)) / denomValue);
    if (amount % denomValue > 0) {
      coinTotal.push(99);
    }
    return coinTotal;
  }
}
