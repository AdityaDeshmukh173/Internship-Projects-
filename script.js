  const convertToFahrenheitButton = document.getElementById("convert-to-fahrenheit");
  const convertToCelsiusButton = document.getElementById("convert-to-celsius");
  const celsiusInput = document.getElementById("celsius-input");
  const fahrenheitInput = document.getElementById("fahrenheit-input");
  const resultText = document.getElementById("result-text");
  
  function convertToCelsius() {
    const fahrenheit = fahrenheitInput.value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    resultText.innerHTML = `${celsius.toFixed(2)} °C`;
  }
  
  function convertToFahrenheit() {
    const celsius = celsiusInput.value;
    const fahrenheit = celsius * 9 / 5 + 32;
    resultText.innerHTML = `${fahrenheit.toFixed(2)} °F`;
  }
  
  convertToCelsiusButton.addEventListener("click", convertToC)
