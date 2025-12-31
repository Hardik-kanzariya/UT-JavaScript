console.log("13 - Show Prime Numbers!");

// function showPrimeNumbers(limit) {
//     for (let num = 2; num <= limit; num++) {
//         if (isPrime(num)) {
//             console.log(num);
//         }
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;   
//         }
//     }
//     return n > 1;
// }

// showPrimeNumbers(20);

function showPrimeNumbers(numberLimit) {
  for (let curNum = 2; curNum <= numberLimit; curNum++) {
    // console.log('curNum', curNum);
    if (isPrimeNumber(curNum)) {
      console.log('Prime Number:', curNum);
    }
  }
}

function isPrimeNumber(_number) {
  for (let factor = 2; factor < _number; factor++) {
    // console.log('factor', factor);
    if (_number % factor === 0) {
      return false;
    }
  }
  return true;
}

showPrimeNumbers(20);
