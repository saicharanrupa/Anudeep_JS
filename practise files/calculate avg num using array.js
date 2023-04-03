function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return average;
}
const myNumbers = [1, 2, 3, 4, 5];
const myAverage = calculateAverage(myNumbers);
console.log(myAverage); 
