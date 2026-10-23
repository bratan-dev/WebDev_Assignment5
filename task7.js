const resultText = document.querySelector("#result");

document.querySelectorAll("[data-operation]").forEach(function (button) {
  button.addEventListener("click", function () {
    const firstNumber = Number(document.querySelector("#first-number").value);
    const secondNumber = Number(document.querySelector("#second-number").value);
    let result;

    if (button.dataset.operation === "add") {
      result = firstNumber + secondNumber;
    } else if (button.dataset.operation === "subtract") {
      result = firstNumber - secondNumber;
    } else if (button.dataset.operation === "multiply") {
      result = firstNumber * secondNumber;
    } else if (button.dataset.operation === "divide") {
      result = firstNumber / secondNumber;
    }

    resultText.textContent = "Result: " + result;
  });
});
