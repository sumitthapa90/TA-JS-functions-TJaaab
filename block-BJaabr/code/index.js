// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

// function addOne(n) {                ans
//   return n + 1;
// }

// - Write a Function Expression

// let addOne = function (n) {          ans
//   return n + 1;
// };

// - Write an Arrow Function without curly brackets(if possible)

// let addOne = (n) => n + 1;             ans

// - Write an Arrow Function with curly brackets

// let addOne = (n) => {                    ans
//   n + 1;
// };

// - Execute the function

// addOne()                               ans

// - Execute the function and store the return value in a variable.
//  let num = addOne();                    ans

// - What is the typeof returnValue

// "number"                                ans

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

// function substractOne(n){                       ams
//   return n - 1;
// }

// - Write a Function Expression

// let substractOne = function(n){                  ans
//   return n - 1;
// }

// - Write an Arrow Function without curly brackets(if possible)

// let substractOne = (n) => n - 1;                 ans

// - Write an Arrow Function with curly brackets

// let substractOne = (n) => { n - 1};           ans

// - Execute the function

// substractOne();                 ans

// - Execute the function and store the return value in a variable.

// let num = substractOne();          ans

// - What is the typeof returnValue

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

// function sum(a , b ){       ans
//   return  a + b;
// }

// - Write a Function Expression

// let sum = function()         ans

// - Write an Arrow Function without curly brackets(if possible)

// let sum = (n) => n - 1;      ans

// - Write an Arrow Function with curly brackets

// let sum = (n) =>{ n - 1 }    ans

// - Execute the function

// sum();               ans

// - Execute the function and store the return value in a variable

// let num = sum;          ans

// - What is the typeof returnValue

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

// - Write a Function Expression

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets

// - Execute the function

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

// function oddOrEven(number) {
//   if (number % 2 === 0) {
//     alert("Number is even");
//   } else if (number % 2 !== 0) {
//     alert("Number is odd");
//   } else {
//     alert("invalid no");
//   }
// }

// - Write an anonymous Function Expression

// let oddOrEven = function oddOrEven(number) {
//   if (number % 2 === 0) {
//     return  "Number is even";
//   } else {
//     return "Number is even"
//   }
// }

// - Write an named Function Expression

// let oddOrEven = function(number) {
//   if (number % 2 === 0) {
//     return  "Number is even";
//   } else {
//     return "Number is even"
//   }
// }
// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = function(number) => {
  if (number % 2 === 0) {
    return  "Number is even";
  } else {
    return "Number is even"
  }
}


// - Write an Arrow Function with curly brackets
let oddOrEven = function(number) => 
number % 2 === 0 ? "Number is even" : "Number is odd"

// - Execute the function

oddOrEven();

// - Execute the function and store the return value in a variable

 let oddNum = oddOrEven();

// - What is the typeof returnValue
"Number"
