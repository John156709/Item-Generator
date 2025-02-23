function generateCombination() {
    // Get selected items from dropdown
    const burger = document.getElementById("burger").value;
    const side = document.getElementById("side").value;
    const drink = document.getElementById("drink").value;

    // Display the combination in the result div
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your random Whataburger meal is:<br><br>
                           Burger: <strong>${burger}</strong><br>
                           Side: <strong>${side}</strong><br>
                           Drink: <strong>${drink}</strong>`;
}
