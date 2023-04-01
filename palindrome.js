function isPalindrome(str) {
 str = str.replace().toLowerCase();
const reversedStr = str.split('').reverse().join('');
return str === reversedStr;
}
console.log(isPalindrome('45667')); 
console.log(isPalindrome('level')); 
