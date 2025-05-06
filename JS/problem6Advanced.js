// Problem 6: Merge and Deduplicate Arrays
//TODO Write a function that accepts two arrays, merges them, and returns a new array with only unique values.

function mergeUnique(arr1, arr2) {
   let combinedArr = arr1.concat(arr2);  // concat combines arrays
   let newArr = [];

   for (let i = 0; i < combinedArr.length; i++) {
    if (!newArr.includes(combinedArr[i])) { // codes runs if newArr value does not match combinedArr
      newArr.push(combinedArr[i]); // .push adds value at the end of newArr array
    }
  }

  return newArr;
}

console.log(mergeUnique([1,2,3], [2,3,4]));      // [1,2,3,4]
console.log(mergeUnique(["a","b"], ["b","c"])); // ["a","b","c"]