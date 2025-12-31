console.log("18-array-includes-element-exists!");
function includes(array, element) {
    // console.log("Array:", array);
    // console.log("Element to find:", element);
    for (let element of array) {
        if (element === element) {
            return true;
        }
    }
    return false;
}

const array1 = [1, 2, 3, 4, 5];
console.log("Array includes 3:", includes(array1, 3));
console.log("--------------------------------");
console.log("Array includes 6:", includes(array1, 6));

// out put
// Array includes 3: true
// Array includes 6: false
