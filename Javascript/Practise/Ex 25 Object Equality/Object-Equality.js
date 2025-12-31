console.log("25 - Object Equality");

// Constructor function/method - pascalCasing - pascal notation - use this keyword

function Student(name , age , ranking , country){
    this.name = name;
    this.age = age; 
    this.ranking = ranking;
    this.country = country;
};

let Student1 = new Student("John" , 20 , "A" , "USA");
console.log(Student1);

let Student2 = new Student("Joni" , 20 , "B" , "USA");
console.log(Student2);

// Objects are reference type, objects can have same properties but they are from different memory location, they can be equal if both objects have same properties


function isObjectEqual(obj1 , obj2){
    return obj1.name === obj2.name && 
    obj1.age === obj2.age && 
    obj1.ranking === obj2.ranking && 
    obj1.country === obj2.country;
}

console.log("Equality Check: ", isObjectEqual(Student1, Student2));

console.log("-----------------------");

// Objects are same if both are pointed to same object

function isObjectSame(obj1 , obj2){
    return obj1 === obj2;
}

let isSame1 = isObjectSame(Student1, Student2);
console.log('isSame1', isSame1);

let Student3 = Student2;
let isSame2 = isObjectSame(Student2, Student3);
console.log('isSame2', isSame2);