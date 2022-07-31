import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import closureCoinCount from "./coinCount.js";

// User Interface Logic
$(document).ready(function () {
  // Add here
  const coinsArray = [];
  const originalCents = 119;
  const numQuarters = closureCoinCount(25);
  const numDimes = closureCoinCount(10);
  const numNickels = closureCoinCount(5);
  const numPennies = closureCoinCount(1);
  // This should show as an array of [4, 19]
  // 4 quarters
  // 19 remaining cents to go
  coinsArray.push(numQuarters(originalCents));
  // Display current
  console.log("Coins: ", coinsArray);
  console.log("coinsArray [[0][0]]", coinsArray[0][0]);
  console.log("coinsArray [[0][1]]", coinsArray[0][1]);
  // Taking remaining amount, and putting through next step: dimes
  coinsArray.push(numDimes(coinsArray[0][1]));
  // Display current
  console.log("Coins: ", coinsArray);
  // Take remaining amount, and put through next step: nickels
  coinsArray.push(numNickels(coinsArray[1][1]));
  // Display current
  console.log("Coins: ", coinsArray);
  // Take remaining amount, and put through next step: pennies
  coinsArray.push(numPennies(coinsArray[2][1]));
  // Display current
  console.log("Coins: ", coinsArray);
  // Display all total number of coins:
  console.log("Quarters: ", coinsArray[0][0]);
  console.log("Dimes: ", coinsArray[1][0]);
  console.log("Nickels: ", coinsArray[2][0]);
  console.log("Pennies: ", coinsArray[3][0]);
});
