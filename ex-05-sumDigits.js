/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/


function sumDigits(someNumber){
var numberToString = ""
numberToString += someNumber
var arrOfNumbers = []
var resultingSum = 0

for (var i = 0; i < numberToString.length; i++) {
  arrOfNumbers.push(numberToString[i])
}

console.log(arrOfNumbers)

for (var i = 0; i < arrOfNumbers.length; i++) {
  resultingSum = resultingSum + Number(arrOfNumbers[i])
}

console.log(resultingSum)
console.log("-----")
return resultingSum
}

console.group('JS Iterations Week');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
  console.groupCollapsed('Should return 6 from "123"');
    console.assert(sumDigits(123) === 6)
  console.groupEnd();

  console.groupCollapsed('Should return 11 from "911"');
    console.assert(sumDigits(911) === 11)
  console.groupEnd();

  console.groupCollapsed('Should return 12 from "8040"');
    console.assert(sumDigits(8040) === 12)
  console.groupEnd();

  console.groupCollapsed('Should return 15 from "173220"');
    console.assert(sumDigits(173220) === 15)
  console.groupEnd();
console.groupEnd();
