// 1. Declaring Arrays
let array = [1, 2, 3, 4, 5]


// 2. Accessing Elements

let fruits = ["apple", "banana","Mango"];
console.log(fruits[1]); // Output: banana
console.log(fruits.length);  // out put:- 3

// 3. Array Methods

// 1.push():- Add into last
let fruits1 = ["apple", "banana","Mango"];
fruits1.push("Orang");
console.log(fruits1); 
// out put:- ["apple", "banana","Mango","Orang"];

// 2.pop():- Remove into last
let fruits2 = ["apple", "banana","Mango","Grap"];
fruits2.pop();
console.log(fruits2); // out put:- ["apple", "banana","Mango"];

// 3. Unshift():- Add into First 
let fruits3 = ["apple", "banana","Mango","Grep"];
fruits3.unshift("Kiwi");
console.log(fruits3); // out put:- ['Kiwi', 'apple', 'banana', 'Mango', 'Grep']

// 4. shift():- Remove into First
let fruits4 = ["apple", "banana","Mango","Grep"];
fruits3.shift();
console.log(fruits4); // out put:- ['apple', 'banana', 'Mango', 'Grep']

// 5.splice():- add remove and replace 
// remove Element
let fruits5 = ["apple", "banana","Mango","Grep"];
fruits5.splice(1,2);
console.log(fruits5); // out put:- ['apple', 'Grep']

// add Element
let fruits6 = ["apple", "banana","Mango","Grep"];
fruits6.splice(1,0,'kiwi',);
console.log(fruits6); // out put:- ['apple', 'kiwi', 'banana', 'Mango', 'Grep']

// Replace 
let fruits7 = ["apple", "banana","Mango","Grep"];
fruits7.splice(1,1,'Grep',);
console.log(fruits7); // out put:- ['apple', 'Grep', 'Mango', 'Grep']

// 6.Slice():-  Array mathi values copy into index (starIndex , endIndex)
let arr = [10, 20, 30, 40];
 let res = arr.slice(1,3);
console.log(res); //  out put:-  [20, 30]
// console.log(arr.slice(1, 3)); // [20, 30]

// 7.concat():- arrays ne Merge karava mate
let a= [1,2], b=[3,4]
let merge =  a.concat(b);
console.log(merge); // out put:- [1,2,3,4]

// 8.Join():-  Array ne string ma convert karva mate
let fruits8 = ["Apple", "Banana" , "Mango"];
console.log(fruits8.join("-"));  // out put:- Apple-Banana-Mango

// 9.Array.isArray():- check krava mate thya che Array che ke nay and return true false
let fruits9 = ["Apple", "Banana" , "Mango"];
console.log(Array.isArray(fruits9)); // out put:- true

// 10.Array.from():-  Array-like objects ne Array ma convert karva mate
let str = "Hello";
let arr1 = Array.from(str);
console.log(arr1); // out put:- ['H', 'e', 'l', 'l', 'o']

// 11.forEach():-  Array na elements par function apply karva mate
let fruits10 = ["Apple", "Banana" , "Mango"];
fruits10.forEach(fruits => console.log(fruits)); // out put:- apple banana mango

// 12.Array.of():-  Array na elements ne create karva mate and arguments ne handle karva mate
// ES6 method hai che te ake naya array banave che and je values argument ma aapse te
let arr2 = Array.of(1, 2, 3);
console.log(arr2); // out put:- [1, 2, 3]

// 13.Map():-  Array na elements par function apply karva mate and navi array banava mate
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared); // out put:- [1, 4, 9, 16]

// 14.Sort():-  Array na elements ne sort karva mate  
let numbers1 = [4, 2, 3, 1];
numbers1.sort();
console.log(numbers1); // out put:- [1, 2, 3, 4]

// 15.toSorted():-  Array ne sorted order ma convert karva mate 
let numbers4 = [4, 2, 3, 1];
let sorted = numbers4.toSorted();
console.log(sorted); // out put:- [1, 2, 3, 4]

// 16.reverse():-  Array na elements ne reverse karva mate
let numbers2 = [1, 2, 3, 4];
numbers2.reverse();
console.log(numbers2); // out put:- [4, 3, 2, 1]

// 17.toReversed():-  Array ne reverse order ma convert karva mate
let numbers5 = [1, 2, 3, 4];
let reversed = numbers5.toReversed();
console.log(reversed); // out put:- [4, 3, 2, 1]

// 18.toString():-  Array ne string ma convert karva mate
let numbers3 = [1, 2, 3, 4];
console.log(numbers3.toString()); // out put:- "1,2,3,4"

// 19.indexOf():-  Array ma element ni index find karva mate
let numbers6 = [1, 2, 3, 4];
console.log(numbers6.indexOf(3)); // out put:- 2
console.log(numbers6.indexOf(5)); // out put:- -1

// 20.lastIndexOf():-  Array ma element ni last index find karva mate
let numbers7 = [1, 2, 3, 4, 3];
console.log(numbers7.lastIndexOf(3)); // out put:- 4

// 21.includes():-  Array ma element ni existence check karva mate
let numbers8 = [1, 2, 3, 4];
console.log(numbers8.includes(3)); // out put:- true
console.log(numbers8.includes(5)); // out put:- false

// 22.find():-  Array ma element ne find karva mate
let numbers9 = [1, 2, 3, 4];
let found = numbers9.find(num => num > 2);
console.log(found); // out put:- 3

// 23.findIndex():-  Array ma element ni index find karva mate
let numbers10 = [1, 2, 3, 4];
let foundIndex = numbers10.findIndex(num => num > 2);
console.log(foundIndex); // out put:- 2

// 24.findLast():-  Array ma element ni last occurrence find karva mate
let numbers11 = [1, 2, 3, 4];
let foundLast = numbers11.findLast(num => num > 2);
console.log(foundLast); // out put:- 4

// 25.findLastIndex():-  Array ma element ni last index find karva mate
let numbers12 = [1, 2, 3, 4, 3];
let foundLastIndex = numbers12.findLastIndex(num => num > 2);
console.log(foundLastIndex); // out put:- 4

// 26.filter():-  Array ma elements ne filter karva mate
let numbers13 = [1, 2, 3, 4];
let filtered = numbers13.filter(num => num > 2);
console.log(filtered); // out put:- [3, 4]

// 27.reduce():-  Array na elements ne reduce karva mate
let numbers14 = [1, 2, 3, 4];
let sum = numbers14.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // out put:- 10

// 28. flat():-  Array na elements ne flatten karva mate and nested arrays ne handle karva mate
let nestedArray = [1, 2, [3, 4]];
let flatArray = nestedArray.flat();
console.log(flatArray); // out put:- [1, 2, 3, 4]

// 29.keys():-  Array na keys return karva mate
let numbers15 = [1, 2, 3, 4];
let keys = Array.from(numbers15.keys());
console.log(keys); // out put:- [0, 1, 2, 3]

// 30.values():-  Array na values return karva mate
let numbers16 = [1, 2, 3, 4];
let values = Array.from(numbers16.values());
console.log(values); // out put:- [1, 2, 3, 4]

// 31.entries():-  Array na key-value pairs return karva mate
let numbers17 = [1, 2, 3, 4];
let entries = Array.from(numbers17.entries());
console.log(entries); // out put:- [[0, 1], [1, 2], [2, 3], [3, 4]]

// 32.every():-  Array na elements par condition check karva mate
let numbers18 = [1, 2, 3, 4];
let allPositive = numbers18.every(num => num > 0);
console.log(allPositive); // out put:- true

// 33.some():-  Array na elements par condition check karva mate
let numbers19 = [1, 2, 3, 4];
let someEven = numbers19.some(num => num % 2 === 0);
console.log(someEven); // out put:- true

// 34.includes():-  Array ma element ni existence check karva mate
let numbers20 = [1, 2, 3, 4];
console.log(numbers20.includes(3)); // out put:- true
console.log(numbers20.includes(5)); // out put:- false

// 35.from():-  Array-like objects and strings ne Array ma convert karva mate
let str1 = "Hello";
let charArray = Array.from(str1);
console.log(charArray); // out put:- ['H', 'e', 'l', 'l', 'o']

// 36.spread():-  Array ne expand karva mate
let numbers21 = [1, 2, 3];
let expanded = [...numbers21, 4, 5];
console.log(expanded); // out put:- [1, 2, 3, 4, 5]

// 37.copyWithin():-  Array na elements ne tej array ma copy karva mate
let numbers22 = [1, 2, 3, 4, 5];
numbers22.copyWithin(0, 3);
console.log(numbers22); // out put:- [4, 5, 3, 4, 5]

// 38.fill():-  Array na elements ne fill karva mate and replace karva mate
let numbers23 = [1, 2, 3, 4, 5];
numbers23.fill(0, 2, 4);
console.log(numbers23); // out put:- [1, 2, 0, 0, 5]

// 39.reduceRight():-  Array na elements ne right-to-left reduce karva mate
let numbers24 = [1, 2, 3, 4, 5];
let su = numbers24.reduceRight((acc, curr) => acc + curr, 0);
console.log(su); // out put:- 15

// 40.at():-  Array na elements ne specific index par access karva mate
let numbers25 = [1, 2, 3, 4, 5];
console.log(numbers25.at(0)); // out put:- 1
console.log(numbers25.at(-1)); // out put:- 5

// 41.flatMap():-  Array na elements ne flatten karva mate and transform karva mate
let nestedArray2 = [1, 2, [3, 4]];
let flatMapped = nestedArray2.flatMap(num => Array.isArray(num) ? num : [num]);
console.log(flatMapped); // out put:- [1, 2, 3, 4]

// 42.with():-  Array na specific index par element ne replace karva mate
let numbers26 = [1, 2, 3, 4, 5];
let newArray = numbers26.with(2, 99);
console.log(newArray); // out put:- [1, 2, 99, 4, 5]

// 43.of():-  Array na elements ne create karva mate
let numbers27 = Array.of(1, 2, 3, 4, 5);
console.log(numbers27); // out put:- [1, 2, 3, 4, 5]

// 44.prototype: Array na prototype ma navi method add karva mate and array ne extend karva mate
Array.prototype.customMethod = function() {
  return this.map(item => item * 2);
};
let numbers28 = [1, 2, 3, 4, 5];
console.log(numbers28.customMethod()); // out put:- [2, 4, 6, 8, 10]

// 45.valuesOf():-  Array na elements ni values return karva mate
let numbers29 = [1, 2, 3, 4, 5];
console.log(Array.from(numbers29.values())); // out put:- [1, 2, 3, 4, 5]

