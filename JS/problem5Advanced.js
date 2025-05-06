// Problem 5: Swap Two Values
//TODO Create a function that takes two arguments and returns them in swapped order.

function swap(a, b) {
    return [b, a];
    // return {first: b, second: a}; //* or this object
  }

  console.log(swap(1, 2));       // [2, 1]
  console.log(swap("x", "y"));   // ["y", "x"]