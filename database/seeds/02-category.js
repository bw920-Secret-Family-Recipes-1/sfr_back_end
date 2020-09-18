exports.seed = async function(knex) {
    await knex("category").insert([
      {name: "appetizer"},
      {name: "entree"},
      {name: "dessert"},
      {name: "beverage"},
      {name: "dinner"}
    ])
  };