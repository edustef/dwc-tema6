let listEl = document.querySelector('.list');
let addItemInput = <HTMLInputElement>document.querySelector('#add-item');

document.querySelector('#add-btn').addEventListener('click', addListItem);

document
  .querySelector('#delete-first-btn')
  .addEventListener('click', () => removeListItem(0));

document.querySelector('#delete-last-btn').addEventListener('click', () => {
  removeListItem(listEl.children.length - 1);
});

function addListItem() {
  let value = addItemInput.value.trim();
  if (value.length > 0) {
    let newItemEl = document.createElement('li');
    newItemEl.textContent = value;
    listEl.appendChild(newItemEl);
    addItemInput.value = '';
    addItemInput.focus();
  }
}

function removeListItem(index: number) {
  if (listEl.children.length > 0) {
    listEl.removeChild(listEl.children.item(index));
  }
}
