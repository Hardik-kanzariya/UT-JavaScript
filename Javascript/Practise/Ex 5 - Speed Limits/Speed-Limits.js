console.log("5 - Speed Limits");

{/* <h1>5-speed-limits!</h1>

  <h3>Write a function which checks given input/parameter:</h3>
  
  <ul>
    <li>If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'</li>
    <li>If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point </li>
    <li>If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'</li>
  </ul> */}

const SPEEDLIMIT = 70;
const KMPERPOINT = 5;

function checkSpeedLimit(curSpeed) {
  if (curSpeed <= SPEEDLIMIT) {
   return ("Good Safe Driving");
  }
  else{
    let penaltyPoints = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
    if (penaltyPoints < 10) {
      return ("Speed Limit Crossed by Penalty Point " + penaltyPoints);
    } else {
      return ("License Suspended");
    }
  }
}

let checksPoint1 = checkSpeedLimit(40);
console.log(checksPoint1); 

let checksPoint2 = checkSpeedLimit(70);
console.log(checksPoint2);

let checksPoint3 = checkSpeedLimit(75);
console.log(checksPoint3);

let checksPoint4 = checkSpeedLimit(99);
console.log(checksPoint4);

let checksPoint5 = checkSpeedLimit(120);
console.log(checksPoint5);


// output
// Good Safe Driving
// Good Safe Driving
// Speed Limit Crossed by Penalty Point 1
// Speed Limit Crossed by Penalty Point 5
// License Suspended