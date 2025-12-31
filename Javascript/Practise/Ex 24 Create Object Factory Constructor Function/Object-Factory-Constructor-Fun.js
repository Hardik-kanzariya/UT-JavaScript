console.log("24 - Create Object Factory Constructor Function");


// Factory function/method - camelCasing - camel notation - use return keyword
function createObjFactoryMethod(name, age , ranking, country){
    return{
        name,
        age,
        ranking,
        country
    }
}
let student1 = createObjFactoryMethod("Hardik", 21, 4, "India");
console.log(student1);


// Constructor function/method - pascalCasing - pascal notation - use this keyword

function Student(name , age , ranking , country){
    this.name = name;
    this.age = age; 
    this.ranking = ranking;
    this.country = country;
};

let student2 = new Student("Vivek", 20, 5, "India");
console.log(student2);