document.addEventListener("DOMContentLoaded", () => {
    const numberToDisplay = document.querySelectorAll(".number");
    const clickButton = document.querySelector(".click");
  
    clickButton.addEventListener("click", () => {
        numberToDisplay.forEach((numberToDisplay) => {
            const text = numberToDisplay.previousElementSibling.textContent;
            const operator = text.charAt(0);
            const operand = parseFloat(text.substr(1));
            
            if (operator === "+") numberToDisplay.textContent = parseFloat(numberToDisplay.textContent) + operand;
            else if (operator === "-") numberToDisplay.textContent = parseFloat(numberToDisplay.textContent) - operand;
            else if (operator === "*") numberToDisplay.textContent = parseFloat(numberToDisplay.textContent) * operand;
            else if (operator === "/") numberToDisplay.textContent = parseFloat(numberToDisplay.textContent) / operand;
        });
    });
});
