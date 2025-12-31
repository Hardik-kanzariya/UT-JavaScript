// 1. What is Object?
// Object ek complex data type che je key-value pairs ne store kare che
// Object ne curly braces {} ma define kari sakay che

// 2. Declaration
let person = {
    name: "Hardik",
    age: 22,
    city: "Surat"
};

// 3. Accessing Object Properties
console.log(person.name); // out put:- Hardik
console.log(person["age"]); // out put:- 22

// 4. Adding Object Properties
person.country = "India";
console.log(person);
// out put:- { name: "Hardik", age: 22, city: "Surat", country: "India" }

// 5. Updating Object Properties
person.age = 23;
console.log(person);
// out put:- { name: "Hardik", age: 23, city: "Surat", country: "India" }

// 6. Deleting Object Properties
delete person.city;
console.log(person);
// out put:- { name: "Hardik", age: 23, country: "India" }

// Object Methods

// 1. Object.keys():- Object ni badhi keys ne array ma return karva mate
let Mane = {
    name: "Hardik",
    age: 22,
    city: "Surat",
    country: "India"
};
let keys = Object.keys(Mane);
console.log(keys); // out put:- ["name", "age", "city", "country"]

// 2. Object.values():- Object ni badhi values ne array ma convert karva mate
let car = { brand: "Tesla", model: "Model S", year: 2023 };
let carValues = Object.values(car);
console.log(carValues); // Output: ["Tesla", "Model S", 2023]


// 3. Object.entries():- Key-value pair ne nested array ma convert kare chhe.
let student = { name: "Riya", age: 20, course: "BCA" };
let studentEntries = Object.entries(student);

console.log(studentEntries);
// Output: [["name", "Riya"], ["age", 20], ["course", "BCA"]]


// 4. Object.fromEntries():- Array of key-value pairs ne object ma convert karva mate
let arr = [["fruit", "Mango"], ["color", "Yellow"], ["taste", "Sweet"]];
let fruitObj = Object.fromEntries(arr);

console.log(fruitObj);
// Output: { fruit: "Mango", color: "Yellow", taste: "Sweet" }


// 5. Object.assign():- Multiple objects ne merge karva mate
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let obj3 = { d: 4 };

let merged = Object.assign({}, obj1, obj2, obj3);

console.log(merged);
// Output: { a: 1, b: 2, c: 3, d: 4 }


// 6. Object.freeze():-Freeze karva pachi koi property update, add, delete na thai.
let phone = { brand: "Apple", model: "iPhone 14" };
Object.freeze(phone);

phone.model = "iPhone 15"; // change no effect
phone.price = 90000;       // add no effect
delete phone.brand;        // delete no effect

console.log(phone);
// Output: { brand: "Apple", model: "iPhone 14" }


// 7. Object.groupBy():- object ne group karva mate
const fruits = [
  { name: "apple", color: "red", price: 3 },
  { name: "banana", color: "yellow", price: 2 },
  { name: "grape", color: "purple", price: 5 },
  { name: "cherry", color: "red", price: 4 },
  { name: "lemon", color: "yellow", price: 1 }
];

// Group fruits by price range
const groupedByPrice = Object.groupBy(fruits, fruit => {
  if (fruit.price <= 2) return "cheap";
  if (fruit.price <= 4) return "medium";
  return "expensive";
});
console.log(groupedByPrice);
// Output: { cheap: [...], medium: [...], expensive: [...] }

// 8. Object.seal():- Object ni properties ne update kari sakay che pan add/delete na kari sakay
let laptop = { brand: "Dell", model: "XPS 13" };
Object.seal(laptop);

laptop.model = "XPS 15"; // update effect
laptop.price = 1500;     // add no effect
delete laptop.brand;     // delete no effect

console.log(laptop);
// Output: { model: "XPS 15" }

// 9.Object.preventExtensions():- ✅ Existing properties update kari shakai✅ Existing properties delete 
// kari shakai ✅ New properties add nahi kari shakai
const person1 = { name : "Hardik" , age : 22 , city : "Surat"};
console.log(person1);
Object.preventExtensions(person1);
person1.mobile = "123456789";
console.log(person1.mobile);

person1.age = 23;
console.log(person1.age);

console.log(person1);

delete person1.city;
console.log(person1);

// 10.Object.isFrozen():-✅ Update: ❌ Not Allowed ✅ Delete: ❌ Not Allowed ✅ Add New: ❌ Not Allowed
const person2 = { name : "Hardik" , age : 22 , city : "Surat"};
console.log(person2);
Object.freeze(person2);
person2.mobile = "123456789";
console.log(person2.mobile);

person2.age = 23;
console.log(person2.age);

console.log(person2);

delete person2.city;
console.log(person2);
// Output: { name: "Hardik", age: 22, city: "Surat" }

// 11.Object.isExtensible():-✅ Update: ✅ Allowed ✅ Delete: ✅ Allowed ✅ Add New: ✅ Allowed
const person3 = { name : "Hardik" , age : 22 , city : "Surat"};
console.log(person3);
Object.preventExtensions(person3);
person3.mobile = "123456789";
console.log(person3.mobile);

person3.age = 23;
console.log(person3.age);

console.log(person3);

delete person3.city;
console.log(person3);

// 12.Object.isSealed():-✅ Update: ✅ Allowed ✅ Delete: ❌ Not Allowed ✅ Add New: ❌ Not Allowed
const person4 = { name : "Hardik" , age : 22 , city : "Surat"};
console.log(person4);
Object.seal(person4);
person4.mobile = "123456789";
console.log(person4.mobile);

person4.age = 23;
console.log(person4.age);

console.log(person4);

delete person4.city;
console.log(person4);

// 13.Object.defineProperty():- Object ni property ne define karva mate
const person5 = { name: "Hardik", age: 22 };
console.log(person5);

Object.defineProperty(person5, "city", {
  value: "Surat",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(person5);
// Output: { name: "Hardik", age: 22, city: "Surat" }

// 14.Object.defineProperties():- Multiple properties ne define karva mate
Object.defineProperties(person5, {
  country: {
    value: "India",
    writable: false,
    enumerable: true,
    configurable: false
  },
  email: {
    value: "hardik@example.com",
    writable: true,
    enumerable: true,
    configurable: true
  }
});

console.log(person5);
// Output: { name: "Hardik", age: 22, city: "Surat", country: "India", email: "hardik@example.com" }

// 15.Object.getOwnPropertyDescriptor():- Object ni property ni details malva mate
let user = { name: "Hardik", email: "hardik@example.com" };

let descriptor = Object.getOwnPropertyDescriptor(user, "email");
console.log(descriptor);

/* Output:
{
  value: "hardik@example.com",
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// 16.Object.getOwnPropertyDescriptors():- Object ni badhi properties ni details malva mate
let students = { 
  name: "Amit", 
  age: 21, 
  course: "BCA" 
};

let descriptors = Object.getOwnPropertyDescriptors(students);
console.log(descriptors);

/* Output:
{
  name:   { value: "Amit",  writable: true, enumerable: true, configurable: true },
  age:    { value: 21,      writable: true, enumerable: true, configurable: true },
  course: { value: "BCA",   writable: true, enumerable: true, configurable: true }
}
*/



// 17.Object.getOwnPropertyNames():- Object ni badhi property names ni array ma malva mate
let fruit = { name: "Mango", color: "Yellow", taste: "Sweet" };

let propertyNames = Object.getOwnPropertyNames(fruit);
console.log(propertyNames);

// Output: ["name", "color", "taste"]


// 18.Object.getPrototypeOf():- Object no prototype malva mate 
let animal = { eats: true };
let dog = Object.create(animal);
dog.barks = true;

let prototype = Object.getPrototypeOf(dog);
console.log(prototype);

// Output: { eats: true }


// 19.Object.create():- Navo object create karva mate
let person8 = { country: "India" };

let person6 = Object.create(person8);
person6.name = "Riya";

console.log(person6);       // { name: "Riya" }
console.log(person6.country); // "India" (prototype thi aave chhe)
