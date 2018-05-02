/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as an argument
 * and returns a boolean if it has a word with double letters.
 *
 *    hasDoubleLetters('matter')
 *     => true // the tt are double-letters
 *
 *    hasDoubleLetters('chopper')
 *       => true // the pp are double-letters
 *
 *    hasDoubleLetters('mister')
 *      => false  // no double letters
 *
 *    hasDoubleLetters('demand')
 *      => false // the double-letters have to be next to eachother
**/
function hasDoubleLetters(stringD){
  var stringHasDoubleLetters = false

  for (var i = 1; i < stringD.length; i++) {
    if(stringD[i].toLowerCase() === stringD[i-1].toLowerCase()){
      stringHasDoubleLetters = true
    }
  }
  
  console.log(stringHasDoubleLetters)
  console.log("-----")
  return stringHasDoubleLetters
}
console.group('JS Iterations Week');
  console.log('Function: hasDoubleLetters', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for "shutter"');
    console.assert(hasDoubleLetters('stutter') === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for "prospect"');
    console.assert(hasDoubleLetters('prospect') === false)
  console.groupEnd();

  console.groupCollapsed('Should return false for "shoehorn"');
    console.assert(hasDoubleLetters('shoehorn') === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for "Aardvark"');
    console.assert(hasDoubleLetters('Aardvark') === true)
  console.groupEnd();
console.groupEnd();
