// Problem 2: Sum of Numbers in an Array
// Create a function that takes an array of numbers and returns their sum.

function sumArray(numbers) {

    //let sum = 0;
    //for (let i = 0; i < numbers.length; i++) {
      //  sum += numbers[i];
    //}
    //return sum;

    //* The above is the same as the .reduce line below

    return numbers.reduce((acc, num) => acc + num, 0); // .reduce adds all values, acc carries result through array Ex: (0+3, 3+7, 10+10, 20+2, etc) acc is set to 0, num is a parameter here
    
}

let sampleArray = [1, 5, 10, 25 , 7];
let sum = sumArray(sampleArray);
console.log(`Sum of ${sampleArray} is ${sum}.`);