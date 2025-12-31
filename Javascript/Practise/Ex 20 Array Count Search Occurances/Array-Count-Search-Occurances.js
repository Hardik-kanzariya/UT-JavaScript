console.log("20-array-count-search-occurrences!");

function countSearchOccurances(array , search) {
    let count = 0;
    for (let element of array) {
        if (element === search) {
            count++;
        }
    }
    return count;
}


let array1 = [1, 2, 3, 4, 5, 6];
let search1 = 3;
console.log("Count of 3 in array1:", countSearchOccurances(array1, search1));
// Count of 3 in array1: 1

let array2 = [21, 25, 22, 25, 30, 25, 30];
let search2 = 25;
console.log("Count of 25 in array2:", countSearchOccurances(array2, search2));
// Count of 25 in array2: 3