const textInput = document.querySelector("#text-input");

textInput.addEventListener("keyup", function () {
  document.querySelector("#input-value").textContent = textInput.value;
});
