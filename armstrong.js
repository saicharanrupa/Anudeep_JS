function isArmstrong(num) {
  const str = num.toString();
  const power = str.length;
  let sum = 0;
  for (let digit of str) {
    sum += Math.pow(parseInt(digit), power);
  }
  return sum === num;
}
console.log(isArmstrong(153)); 
console.log(isArmstrong(371)); 
console.log(isArmstrong(123)); 
