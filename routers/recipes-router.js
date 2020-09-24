const express = require("express");
const recipesModel = require("../database/models/recipes-model");
const { validateRecipeId } = require("../middleware/validate");

const router = express.Router();

//------------------//
// GET all recipes  //
//------------------//
router.get("/", (req, res, next) => {
  try {
    const allRecipes = recipesModel
      .getAllRecipes(req.params.id)
      .then((recipe) => {
        res.json(recipe);
      });
  } catch (err) {
    next(err);
  }
});


router.get("/:id", validateRecipeId(), async (req, res, next) => {
  try {
    const recipe = await recipesModel
      .getByRecipeId(req.params.id)
      .then((recipe) => {
        res.json(recipe);
      });

      res.json(recipe)
  } catch (err) {
    next(err);
  }
});


//-------------------------------//
// DELETE recipe by recipe id    //
//-------------------------------//
router.delete("/:id", validateRecipeId(), (req, res, next) => {
  recipesModel
    .remove(req.params.id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

//----------------------------//
// PUT recipe by by recipe id //
//----------------------------//
router.put("/:id", validateRecipeId(), (req, res, next) => {
  recipesModel
    .update(req.params.id, req.body)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  recipes.addRecipe({ ...req.body, user_id: req.token.userId })
  .then(recipe => {
      res.status(201).json(recipe);
  })
  .catch(err => {
      next(err)
  })
})

module.exports = router;
