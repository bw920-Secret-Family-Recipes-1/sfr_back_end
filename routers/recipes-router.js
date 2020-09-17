const express = require("express");
const recipes = require("../database/models/recipes-model");
const { validateUserId, validateRecipeId } = require("../middleware/validate");

const router = express.Router();

//----------------------------//
// GET all recipes by user id //
//----------------------------//
router.get("/:id", validateUserId(), (req, res, next) => {});

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
