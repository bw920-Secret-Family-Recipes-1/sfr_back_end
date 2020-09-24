const express = require("express");
const users = require("../database/models/users-model");
const recipesModel = require("../database/models/recipes-model");
const {
  validateUserId,
  validateUser,
  validateRecipeId,
} = require("../middleware/validate");
const usersModel = require("../database/models/users-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await users.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateUserId(), (req, res) => {
  res.status(200).json(req.user);
});

router.post("/", validateUser(), (req, res, next) => {
  users
    .add(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", validateUserId(), (req, res, next) => {
  users
    .remove(req.params.id)
    .then((count) => {
      res.status(200).json(count);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:id", validateUserId(), (req, res, next) => {
  users
    .update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id/recipes", validateUserId(), async (req, res, next) => {
  try {
    const recipe = await usersModel.getByUserId(req.params.id).then((item) => {
      res.json(item);
    });

    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

//
router.post(
  "/:id/recipes",
  

  async (req, res, next) => {
    try {
      const newRecipe = await recipesModel.addRecipe(req.body);
      if (newRecipe) {
        res.status(201).json("Success");
      } else {
        res.status(404).json("Unsuccessful at adding new recipe");
      }
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
