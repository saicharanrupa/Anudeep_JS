function filterPositiveNumbers(arr) {
  return arr.filter(num => num > 0);
}
const numbers = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = filterPositiveNumbers(numbers);

console.log(positiveNumbers); 
