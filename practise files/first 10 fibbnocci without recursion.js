let num1 = 0, num2 = 1, nextNum;

console.log(num1);
console.log(num2);

for (let i = 2; i < 10; i++) {
  nextNum = num1 + num2;
  console.log(nextNum);
  num1 = num2;
  num2 = nextNum;
}
