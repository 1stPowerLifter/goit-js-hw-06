const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul");

const pushIngredients = ingredients.forEach(ing => {
  const listIng = document.createElement("li");
  listIng.textContent = ing;
  listIng.classList.add("item");
  list.append(listIng);
})