// 1.spread operator
let arr = [1,2,3,4,5,];
let newArr = [...arr, 6,7,8,9,10];
console.log(newArr);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2.rest operator
let fruits = ["Apple","Banana","Mango"];
let [first, ...rest] = fruits;
console.log(first); // Output: Apple
console.log(rest);  // Output: ["Banana", "Mango"]

// 3.Arrow Functions
const add = (a, b) => a + b;
console.log(add(5, 10)); // Output: 15

// 4.Default Parameters
const multiply = (a, b = 1) =>{
    return a * b; 
}
console.log(multiply(5));    // Output: 5
console.log(multiply(5, 2)); // Output: 10

// 5.Template Literals
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// 6. Destructuring Arrays  And Objects
const numbers = [1, 2, 3, 4, 5];
const [firstNum, secondNum, ...restOfNumbers] = numbers;
console.log(firstNum);      // Output: 1
console.log(secondNum);     // Output: 2
console.log(restOfNumbers); // Output: [3, 4, 5]

const person = {
    nam: "Alice",
    age: 30,
    city: "New York"
};
const { nam, age, city } = person;
console.log(nam);      // Output: Alice
console.log(age);       // Output: 30
console.log(city);      // Output: New York


// 7. for...of Loop :- loop hai jo iterable objects ke values ke through iterate karta hai.
const iterable = [10, 20, 30];
for (const value of iterable) {
    console.log(value);
};
// output: 10 20 30

// 8.Map Object :- Map ek collection hai key-value pairs ka.
const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
map.set("city", "New York");

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// output: name: Alice age: 30 city: New York

// 9.Set Object :- Set ek collection hai unique values ka.
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Duplicate value, will be ignored

for (const value of set) {
    console.log(value);
}
// output: 1 2 3

// 10.classes :- Classes ES6 mein ek syntactical sugar hai constructor function ke liye.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.  

// 11. Promises :- Promises asynchronous operations ko handle karne ka ek tarika hai.vo 3 states mein hote hain: pending, fulfilled, aur rejected.
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John" };
            resolve(data);
        }, 2000);
    });
};

fetchData().then((data) => {
    console.log(data);
});

// 12. Symbols :- Symbols ek unique aur immutable primitive value hai jo primarily object properties ke liye use hota hai.
const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log(sym1 === sym2); // Output: false

// 13. Functions Rest Parameters :- Rest parameters function ke arguments ko ek single array ma collect karte che 
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // 326

// 14. String Includes :- String.includes() method check karta hai ki ek string dusre string ko contain karta hai ya nahi.
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word)); // Output: true

// 15. string startsWith() :- method check karta hai ki ek string specified string se start hota hai ya nahi.
console.log(sentence.startsWith("The quick")); // Output: true

// 16. String endsWith() :- method check karta hai ki ek string specified string se end hota hai ya nahi.
console.log(sentence.endsWith("lazy dog.")); // Output: true

// 17.Math.trunc() :- method decimal numbers ko truncate karke unhe integer mein convert karta hai.
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4

// 18.Math.sign() :- method check karta hai ki ek number positive, negative, ya zero hai.
console.log(Math.sign(5));   // Output: 1
console.log(Math.sign(-5));  // Output: -1
console.log(Math.sign(0));   // Output: 0
console.log(Math.sign("abc"));   // Output: NaN
console.log(Math.sign(null));   // Output: 0
console.log(Math.sign(undefined));   // Output: NaN
console.log(Math.sign("123"));   // Output: 1

// 19.Math.cbrt() :- number ka cube root return karta hai.
console.log(Math.cbrt(27));  // Output: 3
console.log(Math.cbrt(-8));   // Output: -2

// 20.Math.log2() :-number ne 2 logarithm return karta hai.
console.log(Math.log2(8));    // Output: 3
console.log(Math.log2(16));   // Output: 4
console.log(Math.log2(100));   // Output: 6.643856189774724

// 21.Math.log10() :- number ka base 10 logarithm return karta hai.
console.log(Math.log10(100));  // Output: 2
console.log(Math.log10(1000));  // Output: 3
console.log(Math.log10(10000));  // Output: 4

