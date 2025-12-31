console.log("2- Max Number");

function findMaxNumber(num1, num2) {
    // 1. Long Syntax
    // if (num1 > num2) {
    //     return num1;
    // } else {
    //     return num2;
    // }

    // 2. Short Syntax
    // if(num1 > num2) return num1; 
    // else return num2;

    // 3. Ternary Syntax
    return (num1 > num2) ? num1 : num2;
};

let check1 = findMaxNumber(5, 10);
console.log("Check Max Number:", check1);

let check2 = findMaxNumber(20, 50);
console.log("Check Max Number:", check2);

let check3 = findMaxNumber(100, 50);
console.log("Check Max Number:", check3);


// output
// Check Max Number: 10
// Check Max Number: 50
// Check Max Number: 100