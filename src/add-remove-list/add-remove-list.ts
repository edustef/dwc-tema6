import './add-remove-list.scss';

let listEl = document.querySelector('.list');

document.querySelector('#add-btn').addEventListener('click', addListItem);
document.querySelector('#delete-btn').addEventListener('click', removeListItem);

function addListItem() {
  let newItem = prompt('Input an item');
  let newItemEl = document.createElement('li');
  newItemEl.textContent = newItem;

  listEl.appendChild(newItemEl);
}

function removeListItem() {
  let itemIndex = null;
  while (!itemIndex) {
    if (isNaN(itemIndex)) {
      alert('Input must be a number please try again!');
    }
    try {
      itemIndex = parseInt(prompt('Input the item number: '));
      if (
        itemIndex !== null &&
        (itemIndex < 1 || itemIndex > listEl.children.length)
      ) {
        alert('Input must be in range of the items');
        itemIndex = false;
      }
    } catch {
      //
    }
  }

  let item = listEl.children.item(itemIndex - 1);
  listEl.removeChild(item);
}
