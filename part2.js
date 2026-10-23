const changingText = document.querySelector("#changing-text");
const styleDemo = document.querySelector("#style-demo");
const itemList = document.querySelector("#item-list");
const listMessage = document.querySelector("#list-message");
let itemNumber = 1;

document.querySelector("#change-text-button").addEventListener("click", () => {
  changingText.textContent = "The paragraph has been updated with JavaScript.";
});

document.querySelector("#change-color-button").addEventListener("click", () => {
  styleDemo.classList.toggle("alternate-background");
});

document.querySelector("#change-size-button").addEventListener("click", () => {
  styleDemo.classList.toggle("large-text");
});

document.querySelector("#add-item-button").addEventListener("click", () => {
  itemNumber += 1;
  const newItem = document.createElement("li");
  newItem.textContent = `List item ${itemNumber}`;
  itemList.append(newItem);
  updateListMessage();
});

document.querySelector("#remove-item-button").addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    lastItem.remove();
    updateListMessage();
  }
});

function updateListMessage() {
  const itemCount = itemList.children.length;
  listMessage.textContent = `${itemCount} ${itemCount === 1 ? "item" : "items"} in the list.`;
}
