console.log("21-array-get-max-largest-number!");

function getMaxNumber(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function getMaxCount(array) {
    let max = getMaxNumber(array);
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === max) {
            count++;
        }
    }
    return { max, count };
}

let array1 = [1, 2, 3, 4, 5, 6];
let result1 = getMaxCount(array1);
console.log("Array1 → Max:", result1.max, "Count:", result1.count);

let array2 = [21, 25, 22, 25, 30, 25, 30];
let result2 = getMaxCount(array2);
console.log("Array2 → Max:", result2.max, "Count:", result2.count);
// output
// Max number in array1: 6
// Max number in array2: 30