const hoverBox = document.querySelector("#hover-box");
const liveInput = document.querySelector("#live-input");
const liveValue = document.querySelector("#live-value");
const calculatorResult = document.querySelector("#calculator-result");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.classList.add("hover-box-active");
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.classList.remove("hover-box-active");
});

liveInput.addEventListener("keyup", () => {
  liveValue.textContent = liveInput.value || "Nothing typed yet";
});

document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () => {
    const firstValue = Number(document.querySelector("#first-value").value);
    const secondValue = Number(document.querySelector("#second-value").value);
    const operation = button.dataset.operation;

    if (document.querySelector("#first-value").value === "" || document.querySelector("#second-value").value === "") {
      calculatorResult.textContent = "Enter both numbers first.";
      return;
    }

    let result;
    if (operation === "add") {
      result = firstValue + secondValue;
    } else if (operation === "subtract") {
      result = firstValue - secondValue;
    } else if (operation === "multiply") {
      result = firstValue * secondValue;
    } else if (operation === "divide") {
      if (secondValue === 0) {
        calculatorResult.textContent = "Cannot divide by zero.";
        return;
      }
      result = firstValue / secondValue;
    }

    calculatorResult.textContent = `Result: ${result}`;
  });
});
