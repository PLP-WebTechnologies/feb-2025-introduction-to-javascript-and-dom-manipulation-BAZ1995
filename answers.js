function changeText() {
  document.getElementById("dynamic-text").textContent = "The text has been changed!";
}

function changeStyle() {
  const styleText = document.getElementById("style-text");
  styleText.style.color = "white";
  styleText.style.backgroundColor = "purple";
  styleText.style.padding = "10px";
}

function addItem() {
  const ul = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${ul.children.length + 1}`;
  ul.appendChild(newItem);
}

function removeItem() {
  const ul = document.getElementById("item-list");
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}
