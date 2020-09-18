const express = require("express");
const recipesModel = require("../database/models/recipes-model");
const { validateUserId, validateRecipeId } = require("../middleware/validate");

const router = express.Router();

//------------------//
// GET all recipes  //
//------------------//
router.get("/", (req, res, next) => {
  try {
    const allRecipes = recipesModel.getRecipes(req.params.id).then((recipe) => {
      res.json(recipe);
    });
  } catch (err) {
    next(err);
  }
});

//------------------------------//
// GET all recipes by recipe id //
//------------------------------//
router.get("/:id", validateRecipeId(), (req, res, next) => {
  try{
    const recipe = await recipesModel.getByRecipeId(req.params.id).then((item) =>{
      res.json(item)
    })
  } catch(err){
    next(err)
  }
});

//-----------------------------//
// POST all recipes by user id //
//-----------------------------//
router.post("/:id", validateUserId(), (req, res, next) => {
  recipes
    .getByRecipeId(req.params.id)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

//-------------------------------//
// DELETE recipe by recipe id    //
//-------------------------------//
router.delete("/:id", validateRecipeId(), (req, res, next) => {
  recipes
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
  recipes
    .update(req.params.id, req.body)
    .then((recipe) => {
      res.statusCode(200).json(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
