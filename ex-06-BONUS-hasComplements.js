
/** ! Adventure Mode !
 *
 * hasComplements() *
 *
 * Write a function called hasComplements that accepts a target number
 * and an array of numbers
 *
 * If the sum of any two numbers in the array of numbers equals the
 * target number , then the function should return `true`,
 * otherwise, the function should return `false`.
 *
*/
function hasComplements(targetNum,arrayOfNumbers){
  var isThereASum = false
  var sumsWithinArray = []

for (var i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[0] !== arrayOfNumbers[i]) {
    sumsWithinArray.push(arrayOfNumbers[0]+arrayOfNumbers[i])
  }

for (var i = 0; i < sumsWithinArray.length; i++) {
  if(targetNum===sumsWithinArray[i]){
    isThereASum=true
    }
  }
}

  console.log(targetNum)
  console.log(sumsWithinArray)
  console.log(isThereASum)
  return isThereASum
}
var oddsArray = [1, 3, 5, 7, 9, 11, 13]
var anotherArray = [2, 5, 6, 8, 12]

console.group('JS Iterations Week');
  console.log('%cFunction: hasComplements', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for 6');
    console.assert(hasComplements(6,  oddsArray) === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for 7');
    console.assert(hasComplements(7, oddsArray) === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for 14');
    console.assert(hasComplements(14, oddsArray) === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for 17');
    console.assert(hasComplements(17, oddsArray) === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for 7 ');
    console.assert(hasComplements(7, anotherArray) === true)
  console.groupEnd();
  console.groupCollapsed('Should return false for 9');
    console.assert(hasComplements(9,  anotherArray) === false)
  console.groupEnd();
  console.groupCollapsed('Should return true for 14');
    console.assert(hasComplements(14, anotherArray) === true)
  console.groupEnd();
  console.groupCollapsed('Should return false for 15');
    console.assert(hasComplements(15, anotherArray) === false)
  console.groupEnd();
console.groupEnd();
