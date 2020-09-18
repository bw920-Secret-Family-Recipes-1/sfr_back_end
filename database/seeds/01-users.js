exports.seed = async function(knex) {
    await knex("users").insert([
       {firstName: "rachael",
        lastName: "ray",
        email: "rachaelray@gmail.com",
        username: "rahaelray1",
        password: "password1"
       },
       {firstName: "guy",
        lastName: "fieri",
        email: "guyfieri@gmail.com",
        username: "guyfieri2",
        password: "password2"
       },
       {firstName: "martha",
        lastName: "stewart",
        email: "marthastewart@gmail.com",
        username: "marthastewart3",
        password: "password3"
       }
    ])
   };