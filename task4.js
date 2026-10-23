const itemList = document.querySelector("#item-list");
let itemNumber = 1;

document.querySelector("#add-button").addEventListener("click", function () {
  itemNumber += 1;
  const item = document.createElement("li");
  item.textContent = "Item " + itemNumber;
  itemList.appendChild(item);
});

document.querySelector("#remove-button").addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});
