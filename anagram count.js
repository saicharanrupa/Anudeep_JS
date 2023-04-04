//Code for Anagram Number/String finding
function countAnagrams(arr) {
  const map = new Map();
  
  for (let str of arr) {
    
    
    const sortedStr = str.toLowerCase().split('').sort().join('');
    if (map.has(sortedStr)) {
      map.set(sortedStr, map.get(sortedStr) + 1);
    } else {
      map.set(sortedStr, 1);
    }
  }
  let count = 0;
  for (let value of map.values()) {
    if (value > 1) {
      count += value;
    }
  }
   return count;
}
const arr = ['listen', 'silent', 'elbow', 'below', 'car', 'arc', 'state', 'taste'];
console.log(countAnagrams(arr));
