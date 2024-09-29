let inputValue = document.getElementById("input");
let finalAnswer = document.getElementById("answer");
let finalFahrenheit = document.getElementById("fahrenheit");

const handleChange = () => {
    let value = parseFloat(inputValue.value); // Convert to a number
    let unitValue1 = document.getElementById("SelectUnit1").value;
    let unitValue2 = document.getElementById("SelectUnit2").value;

    if (unitValue1 === "celsius" && unitValue2 === "fahrenheit") {
        let fahrenheit = (value * 9) / 5 + 32;
        finalAnswer.innerHTML = `${fahrenheit.toFixed(2)}°F`; // Formatting to 2 decimal places
    } else if (unitValue1 === "fahrenheit" && unitValue2 === "celsius") {
        let celsius = ((value - 32) * 5) / 9;
        finalAnswer.innerHTML = `${celsius.toFixed(2)}°C`; // Formatting to 2 decimal places
    } else {
        finalAnswer.innerHTML = "Please select different units."; // Handle same unit case
    }
};

const toggle = () => {
    let unitValue1 = document.getElementById("SelectUnit1");
    let unitValue2 = document.getElementById("SelectUnit2").value;

    if (unitValue2 === "celsius") {
        unitValue1.value = "fahrenheit";
    } else {
        unitValue1.value = "celsius";
    }
};
