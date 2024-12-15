function compare<T>(a: T, b: T): number {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  } else {
    throw new Error('Cannot compare these types');
  }
}

console.log(compare(1, 2)); // Output: -1
console.log(compare(2, 1)); // Output: 1
console.log(compare(1, 1)); // Output: 0
console.log(compare("a", "b")); // Output: -1
console.log(compare("b", "a")); // Output: 1
console.log(compare(new Date(), new Date())); //Output: 0
//console.log(compare({a: 1}, {b: 2})); //Throws Error