// const supertest = require("supertest");
// const server = require("../api/server");

// const db = require("../database/dbConfig");

// beforeAll(async () => {
//   await db.migrate.rollback();
//   await db.migrate.latest();
//   await db.seed.run();
// });

// afterAll(async () => {
//   await db.destroy();
// });

// describe("recipes integration tests", () => {
//   it("GET /recipes", async () => {
//     const res = await supertest(server)
//       .get("/recipes")
//       .set(
//         "Authorization",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYwMDgyMjExNX0.91sAHVslPoHwxMC3_XAeMxxrsSBap8zVJ2Qbzm13g3w"
//       );
//     expect(res.statusCode).toBe(200);
//     expect(res.type).toBe("application/json");
//   });

//   it("GET /recipes/:id", async () => {
//     const res = await supertest(server)
//       .get("/recipes/2")
//       .set(
//         "Authorization",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYwMDgyMjExNX0.91sAHVslPoHwxMC3_XAeMxxrsSBap8zVJ2Qbzm13g3w"
//       );
//     expect(res.statusCode).toBe(200);
//     expect(res.type).toBe("application/json");
//   });

//   it("GET /users/:id/recipes", async () => {
//     const res = await supertest(server)
//       .get("/users/1/recipes")
//       .set(
//         "Authorization",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYwMDgyMjExNX0.91sAHVslPoHwxMC3_XAeMxxrsSBap8zVJ2Qbzm13g3w"
//       );
//     expect(res.statusCode).toBe(200);
//     expect(res.type).toBe("application/json");
//     expect(res.body.length).toBe(1);
//   });

//   it("POST /users/:id/recipes - create new recipe by user id", async () => {
//     const res = await supertest(server)
//       .post("/users/1/recipes")
//       .set(
//         "Authorization",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYwMDgyMjExNX0.91sAHVslPoHwxMC3_XAeMxxrsSBap8zVJ2Qbzm13g3w"
//       )
//       .send({
//         recipeName: "Spaghetti and Meatballs",
//         source: "My Grandmom",
//         ingredientList:
//           "1lb Ground Beef, 1 onion, 1 can of diced tomato, basil, oregano, 1 jar of Prego Tomato and Basil sauce, 1 box Angel Hair pasta",
//         directions:
//           "Brown Beef. Add onion to pan until onion is soften. Add in tomato, spices, and sauce. Let cook for 5 minutes until heated through. Cook Noodles according to the package. Pour meat sauce over noodles. Enjoy!",
//         category_id: "5",
//         user_id: "1",
//       });
//     expect(res.statusCode).toBe(201);
//     expect(res.type).toBe("application/json");
//     expect(res.body.length).toBe(7);
//   });

//   it("PUT /recipes/:id - update recipe", async () => {
//     const res = await supertest(server)
//       .put("/recipes/1")
//       .send({
//         recipeName: " Easy Salad",
//         source: "The cookbook",
//       })
//       .set(
//         "Authorization",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTYwMDgyMjExNX0.91sAHVslPoHwxMC3_XAeMxxrsSBap8zVJ2Qbzm13g3w"
//       );
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBeUndefined();
//   });
//   it("DELETE /recipes/:id FAIL", async () => {
//     const res = await supertest(server).delete("/recipes/1");
//     expect(res.statusCode).toBe(401);
//     expect(res.type).toBe("application/json");
//   });
// });
