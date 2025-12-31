// 1. if Statement  
// Yeh tab chalta hai jab condition true ho.

let age = 18;

if(age >= 18){
    console.log("you are Adult !");
};
// out put your are Adult !

// 2. if...else Statement
// Agar condition true hai toh ek kaam hoga, warna dusra.

let Age = 18;
if (Age >= 18) {
    console.log("You Are Adult !");
} else {
    console.log("Tum minor ho.");
}

// out put  18 You Are Adult !  And 17 Tum minor ho.

// 3. if...else if...else Statement 
// Multiple conditions check karne ke liye.

let score = 45;

if (score >= 90) {
    console.log(`your Grade A+ ${score}`);
} else if (score >= 75){
    console.log(`your Grade B ${score}`);
} else if (score >= 50){
    console.log(`your Grade C ${score}`);
}
else if (score >= 35){
    console.log(`your Grade D ${score}`);
}
else {
    console.log("you Are Fail and next time to Try....");
}


// 4. switch Statement
// Jab ek hi value ko alag-alag cases se compare karna ho

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
};


// 5. Ternary Operator (short form of if...else)
// Chhota shortcut likhne ka tarika.

let ag = 20;
let message = (ag >= 18) ? "Adult" : "Minor";
console.log(message); // Adult

