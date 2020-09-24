const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

function addRecipe(userID) {
  return db("recipes as r").where("r.user_id", userID);
}

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

async function addRecipe(recipe) {
  const category_id = await db('category')
    .where({ name: recipe.category.toLowerCase() })
    .select("id")
    .first()
  if (recipe.category) delete recipe.category
  return db('recipes')
    .insert({ ...recipe, category_id })
    .then((ids) => {
      return getByRecipeId(ids[0])
    })
}


module.exports = {
  addRecipe,
  getAllRecipes,
  getByRecipeId,
  update,
  remove,
};
