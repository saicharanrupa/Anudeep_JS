function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
}
  const arr1 = str1.toLowerCase().split('');
  const arr2 = str2.toLowerCase().split('');
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram('listen', 'silent')); 
console.log(isAnagram('hello', 'world')); 
