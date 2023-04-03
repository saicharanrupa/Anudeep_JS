let arr = [1, 2, 3, 4, 5];
let lastElement = arr.pop();
arr.unshift(lastElement);

console.log(arr); 

let newArr = [...arr];
newArr.unshift(lastElement);

console.log(newArr); 
console.log(arr); 
