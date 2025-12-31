console.log("17-create-array-from-argument-range!");

function createArrayFromRange(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        // console.log(i);
        result.push(i);
        // console.log(result);
    }
    return result;
}

const array1 = createArrayFromRange(1, 5);
console.log("Created array:", array1);

const array2 = createArrayFromRange(-3, 3);
console.log("Created array:", array2);
