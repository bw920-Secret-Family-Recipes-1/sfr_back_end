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
  return db("recipes").where({ id }).first();
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
