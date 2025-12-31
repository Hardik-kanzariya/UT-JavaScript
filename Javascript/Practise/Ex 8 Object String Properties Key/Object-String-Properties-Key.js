console.log("8-object-string-properties-key!");

function printStringProperties(obj) {
    for (let key in obj) {
        // console.log("key/pro :" ,key);
        if (typeof obj[key] === "string") {
            console.log(key , ":" ,obj[key]);
        }
    }
}

const person = {
    name: "John",
    age: "30",
    city: "New York",
    occupation: "Developer"
};

printStringProperties(person);
console.log("-----------------------");

const Technology = {
  name: 'JavaScipt',
  version: "60",
  purpose: 'Scripting language for Web',
  developer: 'Netscape Corporation'
}

printStringProperties(Technology);
console.log('----------');

// Out Put

// name : John
// age : 30
// city : New York
// occupation : Developer

// name : JavaScipt
// version : 60
// purpose : Scripting language for Web
// developer : Netscape Corporation

