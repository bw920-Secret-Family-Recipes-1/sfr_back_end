exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.text("firstName").notNull()
        table.text("lastName").notNull()
        table.text("email").notNull().unique()
        table.text("username").notNull().unique()
        table.text("password").notNull()
    })
  
    await knex.schema.createTable("category", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
  
    })
  
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("recipeName").notNull()
        table.text("source").notNull()
        table.text("ingredientList").notNull()
        table.text("directions").notNull()
        table.string("description")
        table.integer("category_id")
          .references("id")
          .inTable("category")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
        table.integer("user_id")
          .references("id")
          .inTable("users") 
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
    })

};
  
  exports.down = async function(knex) {
    
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("categories")
    await knex.schema.dropTableIfExists("users")
  };
