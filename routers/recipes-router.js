const express = require("express");
const recipesModel = require("../database/models/recipes-model");
const { validateUserId, validateRecipeId } = require("../middleware/validate");

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

//------------------------------//
// GET all recipes by user id //
//------------------------------//
router.get("/:id", validateUserId(), async (req, res, next) => {
  try {
    const recipe = await recipesModel
      .getByUserId(req.params.id)
      .then((item) => {
        res.json(item);
      });
  } catch (err) {
    next(err);
  }
});

//-----------------------------//
// POST all recipes by user id //
//-----------------------------//
router.post("/", async (req, res, next) => {
  const recipe = req.body;
  try{
    const newRecipe = await recipesModel.add(recipe);
    if(newRecipe){
      res.status(201).json("Success")
    } else {
      res.status(404).json("Unsuccessful at adding new recipe");
    }
  } catch(err){
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

module.exports = router;
