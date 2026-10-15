function convertTemperature() {
  const input = document.getElementById("temperature").value;
  const scale = document.getElementById("scale").value.toLowerCase();

  const temp = parseFloat(input);
  if (input.trim() === "" || isNaN(temp)) {
    alert("Please enter a valid temperature");
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (scale) {
    case "celsius":
    case "celcius":
      celsius = temp;
      fahrenheit = (temp * 9 / 5) + 32;
      kelvin = temp + 273.15;
      break;

    case "fahrenheit":
      celsius = (temp - 32) * 5 / 9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
      break;

    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9 / 5) + 32;
      kelvin = temp;
      break;
  }

  document.getElementById("celsius").innerText = celsius.toFixed(2) + " °C";
  document.getElementById("fahrenheit").innerText = fahrenheit.toFixed(2) + " °F";
  document.getElementById("kelvin").innerText = kelvin.toFixed(2) + " K";
}

function resetConverter() {
  document.getElementById("temperature").value = "";
  document.getElementById("scale").selectedIndex = 0;
  document.getElementById("celsius").innerText = "0 °C";
  document.getElementById("fahrenheit").innerText = "32 °F";
  document.getElementById("kelvin").innerText = "273.15 K";
}