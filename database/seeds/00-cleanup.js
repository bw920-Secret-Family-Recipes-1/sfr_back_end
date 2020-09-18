exports.seed = async function(knex) {
    await knex("recipes").truncate()
    await knex("category").truncate()
    await knex("users").truncate()
  };