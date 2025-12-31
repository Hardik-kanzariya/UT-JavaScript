// 1. Function Declaration
// Ye normal function hota hai jo function keyword se banta hai.
function add (a,b){
    return a + b;
};
console.log(add(5, 10)); // out put 15

// 2. Function ko ek variable me store kar liya.
const sub = function (a, b) {
    return a - b;
};
console.log(sub(5, 1)); // out put 4

//3. Arrow Function (ES6)
const multipay  = (a ,b) => a * b;
console.log(multipay(5,10)); // out put 50

// 4. Anonymous Function (Callback) Naam ke bina function.
setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000); // out put Hello after 1 second

// 5.Higher-Order Function 
// Ek function ko argument ke tor par accept kare ya Ek function return kare use Higher-Order Function kehte hain.
function operate(a, b, fn) {
  return fn(a, b);
}
console.log(operate(5, 3, (x, y) => x - y)); // out put 2

// 6.IIFE (Immediately Invoked Function Expression)
// Ye ek aisa function hota hai jo likhte hi turant execute (run) ho jata hai.
(function(){
    console.log("IIFE executed");
})(); // out put IIFE executed

// 7.Constructor Function 
// JavaScript me Constructor Function ek special type ka function hai jo object banane ke liye use hota hai.
// Iska naam hamesha capital letter se shuru hota hai.
// Ye ek blueprint ki tarah hota hai jisse aap multiple objects bana sakte ho.
function Person(name) {
  this.name = name;
}
const p1 = new Person("Amit");
console.log(p1.name); // out put Amit

// 8.Rest & Spread in Functions
// Rest operator (...) function ke arguments ko array me collect kar leta hai.
// Ye tab use hota hai jab aapko unknown ya multiple arguments ek function me lena ho.
function sum(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3));      // 6
console.log(sum(4, 5, 6, 7, 8)); // 30

// 9. Generator Function
// Jaise har normal function internally Function object hota hai, waise hi har generator function internally GeneratorFunction object hota hai.
function* count() {
  yield 1;
  yield 2;
  yield 3;
}
for (let num of count()) {
  console.log(num);
} // out put 1 2 3

// 10.Async Function (Advanced)
// JavaScript me async function ek special function hai jo hamesha ek Promise return karta hai.
// Agar aap function ke andar koi normal value return karte ho → wo Promise.resolve(value) ban jaata hai.
// Agar aap await use karte ho → wo promise ke resolve hone ka wait karega aur result return karega.
async function myFunc() {
  return "Hello";
}
myFunc().then(console.log); // Output: Hello
