console.log("15 - Sum Of Arguments Array!");

function sumOfArgumentsArray(args) {
  console.log('current items/values to add:', args);
  return args.reduce((n1, n2) => n1 + n2, 0);
}

console.log(sumOfArgumentsArray([10, 20, 30, 40, 50])); // 150
