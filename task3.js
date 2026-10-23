const styleBlock = document.querySelector("#style-block");

document.querySelector("#color-button").addEventListener("click", function () {
  styleBlock.style.backgroundColor = "lightblue";
});

document.querySelector("#size-button").addEventListener("click", function () {
  styleBlock.style.fontSize = "24px";
});
