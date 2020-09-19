const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

// GET all recipes
function getAllRecipes() {
  return db("recipes as r")
  .join("category as c", "r.cateogry_id", "c.id", )
  .select(
    "recipes.id", 
    "recipes.recipeName",
    "c.name", 
    "r.source", 
    "r.ingredientList", 
    "r.directions", 

    )
}

function getByRecipeId(id) {
  return db("recipes").where({ "recipes.id": "id" }).first();
}

// POST new recipe by userID
async function add(recipe) {
  const [id] = await db("recipes").insert(recipe, "id");
  return db("recipes").where({ id }).first();
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
  add,
  update,
  remove,
};
