//1. Find the smallest number in an array
function findSmallest(arr) {
  return Math.min(...arr);
}
console.log(findSmallest([30, 45, 60, 7]));
// out put: 7

// 2. Sort strings by Alphabetical Order
function AlphabeticalOrder(str) {
   return str
    .split("")
    .sort()
    .join("");
    
}

console.log(AlphabeticalOrder('hello'));
// out put: 'ehllo'

// 3. Factorialize a number (factorial)
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

console.log(factorialize(5));
// out put: 120


// 4.Identify if a number is Odd or Even?
function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isOddOrEven(4));
// out put: 'Even'
console.log(isOddOrEven(5));
// out put: 'Odd'

// 5.Eliminate all odd numbers in an array.
function eliminateOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(eliminateOddNumbers([1, 2, 3, 4, 5, 6]));
// out put: [2, 4, 6]

// 6.Return numbers only
function returnNumbersOnly(arr) {
    return arr.filter(item => typeof item === "number");
}
console.log(returnNumbersOnly([1, "hello", 2, "world", 3]));
// out put: [1, 2, 3]

// 7.Add up the numbers
function addUp(num) {
  if (num <= 1) {
    return num;
  } else {
    return num + addUp(num - 1);
  }
}
console.log(addUp(8));
// out put: 36

// 8.Min, Max, Length and Average
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((sum, num) => sum + num, 0) / length;

  return { min, max, length, average };
}
console.log(minMaxLengthAverage([1, 2, 3, 4, 5]));
// out put: { min: 1, max: 5, length: 5, average: 3 }

// 9.Sort in Ascending Order
function sortInAscendingOrder(arr) {
    const sortedArray = arr.sort();
    return sortedArray;
}

console.log(sortInAscendingOrder([5, 3, 8, 1, 2]));
// out put: [1, 2, 3, 5, 8]

// 10.Convert Numbers in Roman Numerals
function romanNumbers(num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumerals = [
    "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"
  ];

  let roman = "";

  for (i = 0; i < values.length; i++) {
    while (values[i] <= num) {
      roman += romanNumerals[i];
      num -= values[i];
    }
  }
  return roman;
}

console.log(romanNumbers(1));
// out put: I

// 11. Absolutely Sum
function absoluteSum(arr) {
  return arr.reduce((acc, num) => acc + Math.abs(num), 0);
}
console.log(absoluteSum([-3, -4, 10])); // 17

// 12. Triangle Loop (from Eloquent JavaScript)
for (let i = "#"; i.length <= 7; i += "#") {
  console.log(i);
}


// 13. Count the number of Words
function countTheNumberOfWords(str) {
    return str.split(" ").length;
}
console.log(countTheNumberOfWords("Hello world! This is a test."));
// out put: 7


// 14.Multiply by Length
function multiplyByLength(arr) {
    let length = arr.length;
    return arr.map(num => num * length);
}
console.log(multiplyByLength([1, 2, 3, 4, 5]));
// out put: [5, 10, 15, 20, 25]

// 15. Ends with xxx
function endsWith(str) {
    return str.endsWith("xxx");
} 
// out put: true

// 16. Repeating Letters
function doubleChar(str) {
  let x = str.split("");
  return x.map(x => x.repeat(2)).join("");
}
console.log(doubleChar('exercise'));
// out put: 'eexxeerciissee'

// 17. Index Location
function findIndex(arr, element) {
  return arr.indexOf(element);
}
console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// out put: 1

// 18. Do ... while loop
var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"


// Ex 3 Object Methods Functions

// 1. Check if an object is a plain object
function isPlainObject(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}
console.log(isPlainObject({ key: "value" })); // expected result: true
console.log(isPlainObject([1, 2, 3])); // expected result: false
console.log(isPlainObject(null)); // expected result: false

// 2. Convert an object to a deep array like [[key, value]]
function logObjectEntries(obj) {
    const entries = Object.entries(obj);
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

// Usage:
const myObj = { key: "value", num: 42 };
logObjectEntries(myObj);
// expected output:
// key: value
// num: 42


// 3. Create a new object without specified properties
const without = (object, ...args) => {
  const newObject = { ...object }; // create a shallow copy

  args.forEach((arg) => {
    delete newObject[arg]; // remove each property
  });

  return newObject;
};

const original = { name: "Alice", age: 25, city: "Paris" };
const filtered = without(original, "age", "city");

console.log(filtered); 
// Output: { name: "Alice" }

console.log(original); 
// Output: { name: "Alice", age: 25, city: "Paris" } (original stays intact)

// 4. Check if an object is empty

const isEmpty = (object) => {
  const objectKeys = Object.keys(object);

  if (objectKeys.length === 0) {
    return true;
  }
  return false;
  // return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
};

const obj1 = {};  // expected result: true
const obj2 = { key: "value" }; // expected result: false

console.log(isEmpty(obj1)); // expected result: true
console.log(isEmpty(obj2)); // expected result: false

// 5. Check if two objects are equal
const isEqual = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
};

console.log(isEqual({ key: "value" }, { key: "value" })); // expected result: true
console.log(isEqual({ key: "value" }, { key: "different" })); // expected result: false
console.log(isEqual({ x: { y: 1 } }, { x: { y: 1 } })); // expected result: false


// 6. Invoke a method on an object at a given path with arguments
const invoke = (object, path, func, args) => {
  const splittedPath = path.split('.');

  const target = splittedPath.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});

  return Array.prototype[func].apply(target, args);
};

const obj = { a: { b: [1, 2, 3] } };
console.log(invoke(obj, "a.b", "map", [(x) => x * 2])); 
// [2, 4, 6]

console.log(invoke(obj, "a.b", "slice", [1]));
// [2, 3]
// [2, 3]

// 7. Check if an element is deeply empty
const isEmptyDeep = (element) => {
  if (element === null) return true;

  if (Array.isArray(element)) {
    if (element.length === 0) return true;
    return element.every((item) => isEmptyDeep(item));
  }

  if (typeof element === "object") {
    const keys = Object.keys(element);
    if (keys.length === 0) return true;
    return keys.every((key) => isEmptyDeep(element[key]));
  }

  // Handle primitives:
  if (typeof element === "boolean") return false;
  if (typeof element === "number") return Number.isNaN(element);
  if (typeof element === "string") return element === "";

  return true; // everything else is considered empty
};
console.log(isEmptyDeep({ a: { b: [] } })); // expected result: true
console.log(isEmptyDeep({ a: { b: [1] } })); // expected result: false  


// 8. Check if two elements are deeply equal
const isEqualDeep = (a, b) => {
  if (a === b) return true;

  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  if (a === null || b === null) return a === b;

  if (typeof a !== typeof b) return false;

  if (Array.isArray(a) && Array.isArray(b)) {
    return isArraysEqualDeep(a, b);
  }

  if (typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    return keysA.every((key) => isEqualDeep(a[key], b[key]));
  }

  return false;
};

const isArraysEqualDeep = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((val, idx) => isEqualDeep(val, arr2[idx]));
};

console.log(isEqualDeep({ a: { b: 1 } }, { a: { b: 1 } })); // expected result: true
console.log(isEqualDeep({ a: { b: 1 } }, { a: { b: 2 } })); // expected result: false
console.log(isEqualDeep({ a: { b: 1 } }, { a: { c: 1 } })); // expected result: false

// 9. Write a method that finds shallow intersections of objects
const intersectionShallow = (firstObj, secondObj) => {
  return Object.keys(firstObj).reduce((acc, key) => {
    if (isEqualDeep(firstObj[key], secondObj[key])) {
      acc[key] = firstObj[key];
    }
    return acc;
  }, {});
};

console.log(intersectionShallow({ a: { b: 1 }, c: 2 }, { a: { b: 1 }, c: 3 })); 
// expected result: { a: { b: 1 } }


// 10. Write a method that finds all intersections of objects
const intersectionDeep = (firstObj, secondObj) => {
  return Object.keys(firstObj).reduce((acc, key) => {
    const val1 = firstObj[key];
    const val2 = secondObj[key];

    // If values are deeply equal
    if (isEqualDeep(val1, val2)) {
      acc[key] = val1;
    }

    // If both are objects, recurse
    else if (
      val1 && val2 &&
      typeof val1 === "object" && !Array.isArray(val1) &&
      typeof val2 === "object" && !Array.isArray(val2)
    ) {
      const nested = intersectionDeep(val1, val2);
      if (Object.keys(nested).length > 0) {
        acc[key] = nested;
      }
    }

    return acc;
  }, {});
};

const obj11 = {
  name: "Alice",
  info: { age: 25, city: "Paris", hobbies: ["reading", "music"] },
  active: true
};

const obj22 = {
  name: "Alice",
  info: { age: 25, city: "Paris", hobbies: ["reading", "music"] },
  active: false
};

console.log(intersectionDeep(obj11, obj22));
// out put: { name: "Alice", info: { age: 25, city: "Paris", hobbies: ["reading", "music"] } }


// Ex 3 Array Methods Functions

// 1. Fill an array with a specific value
const fill = (arraySize, value) => new Array(arraySize).fill(value);

console.log(fill(5, 'a')); // expected result: ['a', 'a', 'a', 'a', 'a']

// 2. Reverse an array

const reverseArray = (arr) => [...arr].reverse();

console.log(reverseArray([1, 2, 3, 4, 5])); // expected result: [5, 4, 3, 2, 1]

// 3. Compact an array
const compact = (array) => array.filter((el) => el);

console.log(compact([0, 1, false, 2, '', 3])); // expected result: [1, 2, 3]

// 4. Create an object from an array of key-value pairs

const fromPairs = (array) => 
  array.reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {});

  console.log(fromPairs([['a', 1], ['b', 2], ['c', 3]])); // expected result: { a: 1, b: 2, c: 3 }


// Methods 2
// const fromPairs = (array) => Object.fromEntries(array);
// console.log(fromPairs([['a', 1], ['b', 2], ['c', 3]])); // expected result: { a: 1, b: 2, c: 3 }

// 5. Create a new array without specified values
const without1 = (array, ...args) => {
  const toRemove = new Set(args);
  return array.filter((el) => !toRemove.has(el));
};

console.log(without1([1, 2, 3, 4, 5], 2, 4)); // expected result: [1, 3, 5]


// 6. Create a new array with unique values
const unique = (array) => Array.from(new Set(array));

console.log(unique([1, 2, 2, 3, 4, 4, 5])); // expected result: [1, 2, 3, 4, 5]

const unique2 = (array) => array.filter((element, id) => array.indexOf(element) === id);

console.log(unique2([1, 2, 2, 3, 4, 4, 5])); // expected result: [1, 2, 3, 4, 5]

// 7. Check if two arrays are equal
const isEqual1 = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) return false;
  return firstArray.every((el, i) => el === secondArray[i]);
};

console.log(isEqual1([1, 2, 3], [1, 2, 3])); // expected result: true
console.log(isEqual1([1, 2, 3], [1, 2, 4])); // expected result: false


// 8. Flatten a nested array
const flatten = (a) => a.flat(Infinity);
console.log(flatten([1, [2, [3, [4]], 5]])); // expected result: [1, 2, 3, 4, 5]


// 9. Chunk an array into smaller arrays of a specified size
const chunk = (array, size) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );

  console.log(chunk([1, 2, 3, 4, 5], 2)); // expected result: [[1, 2], [3, 4], [5]]

// 2  Method
const chunk1 = (array, size) => {
  const chunkedArr = [];   // result store karva mate
  let index = 0;           // starting index

  while (index < array.length) {
    // ek-ek slice lai ne chunkedArr ma push karvo
    chunkedArr.push(array.slice(index, size + index));
    index += size; // agal vadhvu next chunk mate
  }

  return chunkedArr;
};

console.log(chunk1([1, 2, 3, 4, 5], 2)); // expected result: [[1, 2], [3, 4], [5]]


// 10. Find the intersection of multiple arrays
const intersection = (...arrays) => {
  if (arrays.length === 0) return [];

  const result = arrays.reduce((acc, curr) =>
    acc.filter((el) => curr.includes(el))
  );

  return Array.from(new Set(result));
};

console.log(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])); // expected result: [3]

// Promise :-JavaScript mein Promise ek special object hai jo ek asynchronous kaam (jo future mein complete hoga) ka result represent karta hai. 
// 1. Pending → Kaam abhi chal raha hai.
// 2. Fulfilled / Resolved → Kaam successfully complete ho gaya.
// 3. Rejected → Kaam fail ho gaya.

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Data mil gaya!");
    } else {
      reject("❌ Error aa gaya!");
    }
  }, 2000);
});
myPromise
  .then((result) => console.log(result)) // agar success hua
  .catch((error) => console.error(error)) // agar error aya
  .finally(() => console.log("Kaam khatam, success ya fail dono case mein"));


// Callback function:- Ek function ko dusre function ke andar argument ke taur pe pass karna callback kehlata hai.
  function greeting(name, callback) {
  console.log("Hello " + name);
  callback();
}
function sayBye() {
  console.log("Goodbye!");
}

greeting("Aman", sayBye);
