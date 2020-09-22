exports.seed = async function(knex) {
    await knex("category").insert([
      {categoryName: "appetizer"},
      {categoryName: "entree"},
      {categoryName: "dessert"},
      {categoryName: "beverage"},
      {categoryName: "dinner"}
    ])
  };