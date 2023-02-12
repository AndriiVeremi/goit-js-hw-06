function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const inputAreaEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const colectItemEl = document.querySelector('#boxes');
colectItemEl.style.display = 'flex';
colectItemEl.style.flexWrap = 'wrap';
colectItemEl.style.alignItems = 'center';
colectItemEl.style.marginTop = '30px';

inputAreaEl.addEventListener('input', toogleValue);

createBtnEl.addEventListener('click', () => {
  createBoxes(Number(inputAreaEl.value));
});

destroyBtnEl.addEventListener('click', destroyBoxesMarkup);

let inputValue = 0;

function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divItem = document.createElement('div');
    divItem.classList = 'item';
    divItem.style.height = `${sizeDefault}px`;
    divItem.style.width = `${sizeDefault}px`;
    divItem.style.marginRight = '30px';
    divItem.style.marginBottom = '30px';
    divItem.style.backgroundColor = getRandomHexColor();
    colectItemEl.appendChild(divItem);
  }
  return colectItemEl.append(...divArray);
}

function destroyBoxesMarkup() {
  inputAreaEl.value = '';
  return (colectItemEl.innerHTML = '');
}







