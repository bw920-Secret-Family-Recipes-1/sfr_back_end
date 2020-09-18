const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

// GET all recipes
function getRecipes() {}

// GET recipes by a specific ID (recipeID)
function getByRecipeId() {
  return db("recipes").select(
    "id",
    "recipeName",
    "category",
    "ingredientList",
    "directions",
    "description"
  );
}

// POST new recipe by userID
function add(recipe) {}

// PUT recipe by recipeID
function update(id, changes) {
  return db("recipes").where({ id }).update(changes);
}

// DELETE recipe by recipeID
function remove(id) {
  return db("recipes").where("id", id).del();
}
module.exports = {
  getRecipes,
  getByRecipeId,
  add, 
  update,
  remove,
};
