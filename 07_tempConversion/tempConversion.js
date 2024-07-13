const convertToCelsius = function(tempF) {
  
  const conversionToCelsius = (tempF - 32) / 1.8
  return Number(conversionToCelsius.toFixed(1))

};

const convertToFahrenheit = function(tempC) {
  
  const conversionToFahrenheit = tempC * 1.8 + 32
  return Number(conversionToFahrenheit.toFixed(1)) 

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
