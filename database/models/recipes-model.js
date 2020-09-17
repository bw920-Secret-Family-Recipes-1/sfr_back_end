const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

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

function add(recipe) {
    
}

function update(id, changes) {
  return db("recipes").where({ id }).update(changes);
}
function remove(id) {
  return db("recipes").where("id", id).del();
}
module.exports = {
  getByRecipeId,
  update, 
  remove,
};
