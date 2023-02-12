const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsIngredientsListEl = document.querySelector('#ingredients');

const itemIngredientEl = ingredients.map(ingredient => {

  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  itemsIngredientsListEl.append(navItemEl);

});
