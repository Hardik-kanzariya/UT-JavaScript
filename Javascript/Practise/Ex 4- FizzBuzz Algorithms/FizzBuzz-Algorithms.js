console.log("4 - FizzBuzz Algorithms");

/* 
<h3>Write a function which checks given input/parameter:</h3>

<ul>
  <li>If input/parameter is divisible by 3 print => Fizz</li>
  <li>If input/parameter is divisible by 5 print => Buzz</li>
  <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
  <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
  <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
</ul>
*/

function isFizzBuzz (arg) {
    if(typeof arg !== 'number') {
        return ('Nan - Not a Number! Please Input Number');
    } else if (arg % 3 === 0 && arg % 5 === 0) {
        return ('FizzBuzz');
    } else if (arg % 3 === 0) {
        return ('Fizz');
    } else if (arg % 5 === 0) {
        return ('Buzz');
    } else {
        return ('Some odd number entered: ' + arg);
    }
};

let checksFizzBuzz1 = isFizzBuzz('one');
console.log(checksFizzBuzz1);

let checksFizzBuzz2 = isFizzBuzz("true");
console.log(checksFizzBuzz2);

let checksFizzBuzz3 = isFizzBuzz(3);
console.log(checksFizzBuzz3);

let checksFizzBuzz4 = isFizzBuzz(5);
console.log(checksFizzBuzz4);

let checksFizzBuzz5 = isFizzBuzz(15);
console.log(checksFizzBuzz5);

let checksFizzBuzz6 = isFizzBuzz(7);
console.log(checksFizzBuzz6);

// out put
// Nan - Not a Number! Please Input Number
// Nan - Not a Number! Please Input Number
// Fizz
// Buzz
// FizzBuzz
// Some odd number entered: 7
