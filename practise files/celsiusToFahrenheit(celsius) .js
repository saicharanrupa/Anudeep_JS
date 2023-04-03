function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
const tempInCelsius = 25;
const tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);
console.log(tempInFahrenheit); 

