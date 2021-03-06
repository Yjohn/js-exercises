// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index

function replace(arr, index, value) {
  var start = arr.slice(0, index); // slice left part
  var newArr = start.concat(value);
  var end = arr.slice(index + 1, arr.length); // slice right part
  var result = newArr.concat(end); // join arrays together
  return result; // complete this statement
  // return; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 1, 2);
var newNames = replace(names, 1, "Rares");

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Rares, Mozafar]
*/
