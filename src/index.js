import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import coinCount from "./coinCount.js";

// User Interface Logic
$(document).ready(function () {
  // Add here
  $(".numQuarters").text(5);
  let quarters = 4;
  let dimes = 3;
  let nickels = 2;
  let pennies = 1;
  console.log(
    "Array storing count: " + coinCount(0, quarters, dimes, nickels, pennies)
  );
});
