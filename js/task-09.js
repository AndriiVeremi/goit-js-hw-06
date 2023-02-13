// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

// const colorEl = document.querySelector('.color');
// const btnChangeColorEl = document.querySelector('.change-color');
// const bodyEl = document.body;

// const getColorBody = () => {
//   colorEl.textContent = getRandomHexColor()
//   bodyEl.style.backgroundColor = getRandomHexColor()
// };

// btnChangeColorEl.addEventListener('click', getColorBody);




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const colorEl = document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.body;

const getColorBody = () => {
  let randomHexColor = getRandomHexColor()
  colorEl.textContent = randomHexColor
  bodyEl.style.backgroundColor = randomHexColor
};

btnChangeColorEl.addEventListener('click', getColorBody);



