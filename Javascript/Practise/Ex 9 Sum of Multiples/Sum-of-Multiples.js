console.log("9-Sum of Multiples");

function sumOfMultiples(CurLimit){
    let sumOfMultiplesValue = 0;
    for(let i= 0; i<=CurLimit; i++){
        if(i%3 === 0 || i%5 === 0){
            // console.log(i);
            sumOfMultiplesValue += i;
        }
    }

    // return sumOfMultiplesValue;
    console.log(`Sum of multiples of 3 and 5 up to ${CurLimit} is: ${sumOfMultiplesValue}`);
};

sumOfMultiples(10);
sumOfMultiples(20);

// Sum of multiples of 3 and 5 up to 10 is: 33
// Sum of multiples of 3 and 5 up to 20 is: 98
