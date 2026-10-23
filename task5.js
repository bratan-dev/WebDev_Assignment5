const hoverBox = document.querySelector("#hover-box");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "lightblue";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "white";
});
