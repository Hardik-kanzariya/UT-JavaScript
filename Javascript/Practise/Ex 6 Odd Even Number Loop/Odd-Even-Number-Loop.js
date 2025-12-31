console.log('6-odd-even-number-loop');

function isOddEvenNumber(curLimit) {
  for(let i = 0; i <= curLimit; i++) {
    /* if (i % 2 === 0) {
      console.log(i , 'EVEN');
    } else {
      console.log(i , 'ODD');
    } */

    const alertMessage = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i , alertMessage);
  }
}

isOddEvenNumber(10);
// isOddEvenNumber(17);

// output
// 0 EVEN
// 1 ODD
// 2 EVEN
// 3 ODD
// 4 EVEN
// 5 ODD
// 6 EVEN
// 7 ODD
// 8 EVEN
// 9 ODD
// 10 EVEN
