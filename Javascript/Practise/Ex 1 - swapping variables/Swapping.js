console.log("1- Swapping Variables");

let Variables1 = "one";
let Variables2 = "two";

// original  Variables
console.log("Original", "Variables1:", Variables1);
console.log("Original", "Variables2:", Variables2);

// Swap
let temp = Variables1;
Variables1 = Variables2;
Variables2 = temp;

console.log("Swapped", Variables1);
console.log("Swapped", Variables2);

// out put
// Original Variables1: one
// Original Variables2: two
// Swapped two
// Swapped one