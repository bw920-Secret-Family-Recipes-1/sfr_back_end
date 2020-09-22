const bcrypt = require("bcryptjs");
const db = require("../dbConfig");

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);

  const [id] = await db("users").insert(user);
  return findById(id);
}

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").select("id", "username", "password").where(filter);
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

function update(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where("id", id).del();
}

function getByUserId(userID) {
  return db("recipes as r")
    .join("category as c", "r.category_id", "c.id")
    .where("r.user_id", userID)
    .select(
      "r.recipeName",
      "c.categoryName",
      "r.source",
      "r.ingredientList",
      "r.directions"
    );
}

function addRecipe(userID){
    return db("recipes as r")
    .where("r.user_id", userID)
  }


module.exports = {
    add,
    find,
    findBy,
    findById,
    getByUserId,
    addRecipe,
    update,
    remove

}

// function update(id, changes) {
//     return db("users")
//     .where({id})
//     .update(changes);
// }

// function remove(id){
//     return db("users")
//     .where('id', id)
//     .del()
// }

// module.exports = {
//     add,
//     find,
//     findBy,
//     findById,
//     update,
//     remove

// }