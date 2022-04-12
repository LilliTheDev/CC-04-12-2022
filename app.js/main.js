//Very simple, given an integer or a floating-point number, find its opposite.

//Examples:
//1: -1
//14: -14
//-34: 34

//Create a function that takes in a number
//Multiply that number by -1
//Return the result

function opposite(number) {
  let negated = number * -1
  return negated;
}

console.log(opposite(1), -1);
console.log(opposite(14), -14);
console.log(opposite(-34), 34);

// Shorter solution
//function opposite(number){
//  return -number
//}
