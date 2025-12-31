// 1.for loop

let pattern = "";
for(let i = 1; i<= 5; i++){
     pattern += " ";
    for(let j=i ; j<=i; j++){
    pattern += "*";
    }
    console.log(pattern);
};
// out put  
// *
// * *
// * * *
// * * * *
// * * * * *

// 2.While loop
// Jab tak condition true hai tab tak chalega.
let i = 1;
while (i <= 5) {
  console.log("While: " + i);
  i++;
}
// out put 
// while: 1
// while: 2
// while: 3
// while: 4
// while: 5

// 3. do...while loop
// Pehle ek baar chalega, fir condition check hogi
let k = 1;
do {
  console.log("Do While: " + k);
  k++;
} while (k <= 5);
// out put 
// Do While: 1
// Do While: 2
// Do While: 3
// Do While: 4
// Do While: 5


// 4.for...in loop (object ke liye)
let student = { name: "Amit", age: 21, city: "Delhi" };

for (let key in student) {
  console.log(key + " : " + student[key]);
}

// out put 
// name : Amit
// age : 21
// city : Delhi

// 5. for...of loop (Arrays / Strings ke liye)
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}

// out put 
// Fruit: Apple
// Fruit: Banana
// Fruit: Mango


// 6.Advance – forEach (Array method)
// Higher-order function jo array ke liye use hota hai.
let num = [10, 20, 30];
num.forEach((n, index) => {
  console.log(`Index: ${index}, Value: ${n}`);
});
// out put 
// index: 0 ,value: 10;
// index: 1 ,value: 20;
// index: 2 ,value: 30;

// 7.map loop (new array banata hai)
let numbers = [1, 2, 3];
let squares = numbers.map(n => n * n);
console.log(squares);

// out put  [1, 4, 9]

