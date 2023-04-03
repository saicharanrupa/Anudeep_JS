function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}
const fahrenheitTemp = 68;
const celsiusTemp = fahrenheitToCelsius(fahrenheitTemp);
console.log(celsiusTemp); 
