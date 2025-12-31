let person1 = {
    firstname: 'Hardik',
    lastname: 'Kanzariya',
    age : 22,
    city : 'Surat',
    // fullName: function () {
    //     // return `fullName: ${this.name}, ${this.age}, ${this.city}`;
    //     return this.firstname + " " + this.lastname + " " + this.age + " " + this.city;
    // }
}

// person1.fullName = function () {
//     return this.firstname + " " + this.lastname + " " + this.age + " " + this.city;
// }



// person1.fullName = fun;

// function fun() {
//     return this.firstname + " " + this.lastname + " " + this.age + " " + this.city;
// }

// console.log(person1.fullName());

// console.log(person1);
// delete person1.age; 
// console.log(person1);

// console.log(person1.fullName());


// document.write(person1.fullName());

// document.write(`Name: ${person1.name} <br>`);
// document.write(person1['age'] + "<br>");

// document.writeln(`Name: ${person1.name}`);
// document.writeln(`Age: ${person1.age}`);
// document.writeln(`City: ${person1.city}`);

// console.log(person1);



function Person (fname, lname, ag, city) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = ag;
    this.city = city; 
}

const p1  = new Person('Hardik', 'Kanzariya', 22, 'Surat');
console.log(p1);

Person.prototype.moblie = "0123456789";
console.log(p1.moblie);