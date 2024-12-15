function compare(a, b) {
  if (a < b) {
    return -1; 
  } else if (a > b) {
    return 1; 
  } else {
    return 0; 
  }
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(1, 1)); // Output: 0

// The bug is that this function only works for numbers. If you try to pass in strings or objects, it will not work correctly.
console.log(compare("a", "b")); // Output: NaN
console.log(compare({a: 1}, {b: 2})); // Output: NaN