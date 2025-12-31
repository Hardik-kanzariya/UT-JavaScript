console.log("19-array-excludes-value-to-new-array!");


function excludes(array, value) {
    console.log("Original Array:", array);
    console.log("Values to exclude:", value);
    const result = [];
    for (let element of array) {
        if (!value.includes(element)) {
            result.push(element);
        }
    }
    return result;
}

const array1 = [1, 2, 3, 4, 5, 6];
const elementsToExclude = [3, 6];
console.log("Array after excluding 3:", excludes(array1, elementsToExclude));
console.log("--------------------------------");
const array2 = [21, 25, 22, 25, 30, 25, 30];
const elementsToExclude1 = [25, 30];
console.log("Array after excluding 6:", excludes(array2, elementsToExclude1));

// out put
// Original Array: (6) [1, 2, 3, 4, 5, 6]
// Values to exclude: (2) [3, 6]
// Array after excluding 3: (4) [1, 2, 4, 5]
// --------------------------------
// Original Array: (7) [21, 25, 22, 25, 30, 25, 30]
// Values to exclude: (2) [25, 30]
// Array after excluding 6: (2) [21, 22]
