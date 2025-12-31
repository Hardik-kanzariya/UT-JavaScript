console.log("14 - Sum Of Arguments!");

function sumOfArguments(...items) {
    console.log('current items/values to add:', items);
  return items.reduce((n1, n2) => n1 + n2, 0);
}

console.log(sumOfArguments(10, 20, 30 , 40 , 50)); // 150
