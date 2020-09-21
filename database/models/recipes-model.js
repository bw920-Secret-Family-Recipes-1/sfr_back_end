const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

// GET all recipes
function getAllRecipes() {
  return db("recipes as r")
    .join("category as c", "r.category_id", "c.id")
    .select(
      "r.id",
      "r.recipeName",
      "c.name",
      "r.source",
      "r.ingredientList",
      "r.directions"
    );
}

  // GET recipe by recipeID
function getByRecipeId(id) {
  return db("recipes").where({ id }).first().select("recipeName");
}

function getByUserId(user_id){
  return db("recipes").where({ user_id }).first();
}

function add(data){
  return db("recipes")
  .insert(data)
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
  getByUserId,
  add,
  update,
  remove,
};
