let name = "Alice";      // string
const age = 25;          // number
var isStudent = true;    // boolean
let emptyValue = null;   // null
let notDefined;          // undefined

let x = 10, y = 3;
console.log(x + y);   // 13
console.log(x % y);   // 1
console.log(x > y);   // true
console.log(!(x < y)); // true
console.log(x === y); // false

let a = 5;
console.log(a++); // Outputs 5, then a becomes 6
console.log(++a); // a becomes 7, then outputs 7


let total = 10;
total += 5; // total is now 15 (10 + 5)
total *= 2; // total is now 30 (15 * 2)
console.log(total); // Outputs 30


// if else statement 

let score = 59;
if(score >= 90){
    console.log("Congratulations Your score is " + score);
}
else if (score >= 80) {
    console.log("Well done! Your score is " + score);
}else if (score >= 70){
    console.log("Good effort! Your score is " + score);
}else if (score >= 60){
    console.log("Keep trying! Your score is " + score);
}else if (score >= 50){
    console.log("You passed! Your score is " + score);
}else {
    console.log("Unfortunately, you did not pass. Your score is " + score);
}
  

// switch statement

switch (true) {
    case (score >= 90):
        console.log("Congratulations Your score is " + score);
        break;
    case (score >= 80):
        console.log("Well done! Your score is " + score);
        break;
    case (score >= 70):
        console.log("Good effort! Your score is " + score);
        break;
    case (score >= 60):
        console.log("Keep trying! Your score is " + score);
        break;
    case (score >= 50):
        console.log("You passed! Your score is " + score);
        break;
    default:
        console.log("Unfortunately, you did not pass. Your score is " + score);
}

// for loop 
for (let i = 1; i <= 5; i++){
    let pattern = "";
    for(let j= i; j <=5; j++){
        pattern += "*";
    }
    console.log(pattern);
}
// out put 
// *****
// ****
// ***
// **
// *


// odd pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
// output
// *
// **
// ***
// ****
// *****

// even pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= 5 - i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
// output
// *****
// ****
// ***
// **
// *



for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += (i + j) % 2 + " ";
    }
    console.log(pattern);
}
// output
// 0 
// 1 0 
// 0 1 0 
// 1 0 1 0 
// 0 1 0 1 0


for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = i; j <= 5; j++) {
        pattern += (i + j) % 2 + " ";
    }
    console.log(pattern);
}
// output
// 0 1 0 1 0
// 1 0 1 0
// 0 1 0
// 1 0
// 0



// function

function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = i; j <= n; j++) {
            pattern += j + " ";
        }
        console.log(pattern);
    }
}
// Call the function
printPattern(5);

// factorial
let factorial = 10;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(factorial);

// fibonacci series
let m=0, b=1,n=10;
console.log(m);
console.log(b);
for (let i=3; i<=n; i++) {
    let c=m+b;
    console.log(c);
    m=b;
    b=c;
}


// function Maximum(){
//     let a=Number(prompt('Enter the A Number:'));
//     let b=Number(prompt('Enter the B Number:'));
//     let c=Number(prompt('Enter the C Number:'));
//     if(a>b)
//         {
//             if(a>c)
//             {
//                 console.log("A is Maximum",a);
//             }
//             else
//             {
//                 console.log("C is Maximum",c);
//             }
//         }
//         else
//         {
//             if(b>c)
//             {
//                 console.log("B is Maximum",b);
//             }
//             else
//             {
//                 console.log("C is Maximum",c);
//             }
//         }
// }
// Maximum();


function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));



// Arrow function
const square = n => n * n;
console.log(square(5)); // 25


// object Methods
const user = {
    name: "Hardik",
    age : 25,
    city : "Surat"
}

for(let key in user){
    // console.log(key + ": " + user[key]);
    console.log(`${key}: ${user[key]}`);
    console.log(user.name);
}


const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
// output: apple banana cherry

let squaref = function(n){
    return n * n;
};

console.log(squaref(5));
// output: 25

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));  // Output: 8
console.log(add(10, 20)); // Output: 30



// 1. Nested Function
// function outerFunction(){
//     let outervar = 'i am outer variable';
//     function innerfunction(){
//         console.log(outervar);
//     }
//     innerfunction();
// }

// outerFunction();

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// 2. Closure Concepts
// A closure is created when an inner function "remembers" the variables from its outer function, even after the outer function has finished execution.
function outerFunction() {
  let count = 100;

  function innerFunction() {
    let innerCount = 50;
    console.log("Outer Count:", count);
    console.log("Inner Count:", innerCount);
    console.log("Sum of counts:", count + innerCount);
  }
  
  innerFunction();
  console.log("outerFunction is called");
}

outerFunction();


let fruit = ["Apple", "Banana", "Mango"];
console.log(fruit[1]);

fruit.push("Orange");
console.log(fruit);
// output: Apple, Banana, Mango, Orange
fruit.pop();
console.log(fruit);
// output: Apple, Banana, Mango
fruit.shift();
console.log(fruit);
// output: Banana, Mango
fruit.unshift("Pineapple");
console.log(fruit);
// output: Pineapple, Banana, Mango



// Slice
let A = ["apple", "banana", "mango", "orange", "grape"];
let result = A.slice(1, 4);
console.log(result);
// output: [ 'banana', 'mango', 'orange' ]

// Join
let B = ["apple", "banana", "mango", "orange", "grape"];
console.log(B.join(", "));
// output: apple, banana, mango, orange, grape

// Is Array
let C = ["apple", "banana", "mango"];
console.log(Array.isArray(C));
// output: true


// map 
let fru = ["apple", "banana", "mango"];
let res = fru.map((fruit) => fruit);
console.log(res);  
// ["apple", "banana", "mango"]


// sort
let sortfrutis = ['banana', 'mango', 'apple'];
sortfrutis.sort();
console.log(sortfrutis);
// output: ['apple', 'banana', 'mango']


// reverse
let revfrutis = ['grape', 'kiwi', 'dragonfruit'];
revfrutis.reverse();
console.log(revfrutis);
// output: ['dragonfruit', 'kiwi', 'grape']


// toSorted

let num = [10,50,60,78,3,2,9,1,85];
let sortednum = num.toSorted((a , b) => a - b);
console.log(sortednum);
// output: [1, 2, 3, 9, 10, 50, 60, 78, 85]

// toReversed
let numb = [12 , 15 , 14 , 78 , 98 , 36];
let reversednum = numb.toReversed();
console.log(reversednum);
// output: [36, 98, 78, 14, 15, 12]


// IndexOf
let fr = ["apple", "banana", "mango", "banana"];
console.log(fr.indexOf("banana"));   // 1  -> first occurrence
console.log(fr.indexOf("banana", 2)); // 3 -> search starts from index 2
console.log(fr.indexOf("orange"));    // -1 -> not found


// lastIndexOf
console.log(fr.lastIndexOf("banana"));   // 3  -> last occurrence
console.log(fr.lastIndexOf("banana", 2)); // 1 -> search starts from index 2
console.log(fr.lastIndexOf("orange"));    // -1 -> not found

// keys
let f = ["apple", "banana", "mango"];
let keys = f.keys();  // returns iterator

console.log(keys);          // Array Iterator {}
console.log([...keys]);     // [0, 1, 2]  -> spread karke array me convert kiya

// values
let fruits1 = ["apple", "banana", "mango"];
for (let value of fruits1.values()) {
    console.log(value);
}
// Output:
// apple
// banana
// mango

// entries
let fruits2 = ["apple", "banana", "mango"];
let entries = fruits2.entries(); // returns iterator

console.log(entries);           // Array Iterator {}
console.log([...entries]);      // [[0, "apple"], [1, "banana"], [2, "mango"]]

// every
let numbers = [1, 2, 3, 4, 5];
let resul = numbers.every(num => num > 0);

console.log(resul);  
// true  (sab numbers > 0 hain)

let nume = [6, 7, -5, 9, 10];
let resu = nume.every(num => num > 0);
console.log(resu);  // false

// some
let numbers1 = [2, 5, 8, 12];
let result1 = numbers1.some(num => num > 10);

console.log(result1);  
// true  (12 > 10 hai)

let numbers2 = [2, 5, 8, 12];
let result2 = numbers2.some(num => num > 10);

console.log(result2);  
// false (none of the numbers > 10)


// filter
let numbers3 = [2, 5, 8, 12];
let filtered = numbers3.filter(num => num > 10);

console.log(filtered);  
// [12]


let numbers4 = [2, 5, 8, 12];
let filtered1 = numbers4.filter((num) => num > 10);

console.log(filtered1);  
// 27

// find
let students = [
  { name: "John", marks: 45 },
  { name: "Jane", marks: 85 },
  { name: "Jim", marks: 72 },
  { name: "Ji", marks: 86 }
];

let topper = students.find(students => students.marks > 80);

console.log(topper);
// { name: "Jane", marks: 85 }

// prototype
let arr = [10, 20, 30];

console.log(Object.getOwnPropertyNames(Array.prototype));

// Custom method to remove all elements from an array
let months = ["January", "February", "March"];

Array.prototype.removeAll = function() {
    while (this.length != 0 ) {
        this.pop();
    }
}
console.log(months);
months.removeAll();
console.log(months);



let str = "   Hello  World!   ";
console.log(str.trimStart());

let str1 = "\u8014";
console.log(str1.isWellFormed()); // true

let bad = "\uD800"; // invalid surrogate
console.log(bad.toWellFormed()); // "�"

let numn = '5'
console.log(numn.padStart(3, "0")); // "05"

let str2 = "Hello World";
console.log(str2.search(/World/)); // 6


let str3 = "abc123";
console.log(str3.match(/\d+/)); // ["123"]

let str4 = "abc123abc456";
for (let match of str4.matchAll(/\d+/g)) {
  console.log(match[0]); 
}
// 123
// 456


const person = { name: "Alice", age: 25 };
const car = new Object();
car.brand = "Toyota";

console.log(person.name); // Alice
console.log(car.brand); // Toyota


const per = {
    name: 'hardik',
    age:'22',
    city:'surat'
}

console.log(per.name); // hardik
console.log(per['age']); // 22


// Looping through object properties && for in loop 
for (let key in per) {
    console.log(key + ": " + per[key]);
}

// for of
// for...of cannot be used directly on an object property like per.age (since it's a string, not an array).
// If you want to iterate over the characters of the age property (which is a string), you can do:

for (let value of per.age) {
    console.log(value);
}

// If you want to iterate over the values of the object, use Object.values:
for (let value of Object.values(per)) {
    console.log(value);
}

