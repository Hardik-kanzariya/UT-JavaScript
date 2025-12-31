console.log("23 - Object Create Students and Address Object");


const Student = {
    name: "Hardik",
    age: 21,
    ranking: 4,
    country: "India"
};


const Address = {
    street: "123 Main St",
    city: "Mumbai",
    state: "MH",
    pincode: "400001",
    country: "India"
};


function showObjectDetails(obj) {
   for (let key in obj) {
    //    console.log(`${key}: ${obj[key]}`);
         console.log(key + ": " + obj[key]);
   }
};


showObjectDetails(Student);
console.log("-------------------");
showObjectDetails(Address);

// output the details of both objects