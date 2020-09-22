const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

// GET all recipes
function getAllRecipes() {
  return db("recipes as r")
    .join("category as c", "r.category_id", "c.id")
    .select(
      "r.id",
      "r.recipeName",
      "c.categoryName",
      "r.source",
      "r.ingredientList",
      "r.directions"
    );
}

// GET recipe by recipeID
function getByRecipeId(recipeID) {
  return db("recipes as r")
    .join("category as c", "r.category_id", "c.id")
    .where("r.id", recipeID)
    .select(
      "r.recipeName",
      "c.categoryName",
      "r.source",
      "r.ingredientList",
      "r.directions"
    );
}

// PUT recipe by recipeID
function update(id, changes) {
  return db("recipes").where({ id }).update(changes);
}

// DELETE recipe by recipeID
function remove(id) {
  return db("recipes").where("id", id).del();
}
module.exports = {
  getAllRecipes,
  getByRecipeId,
  update,
  remove,
};
