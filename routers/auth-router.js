const express = require("express");
const users = require("../database/models/users-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const router = express.Router()

router.post('/register', async (req, res, next) => {
    try {
      const {username} = req.body
      const user = await users.findBy({username}).first()
  
      if(user){
          return res.status(409).json({
              message: "username already taken"
          })
      }
      res.status(201).json(await users.add(req.body))
  }catch(err){
      next(err)
  }
  });


  router.post("/login", async (req, res, next) => {
    const authError = {
      message: "Invalid Credentials",
    }
  
    try {
      const user = await users.findBy({ username: req.body.username }).first()
      if (!user) {
        return res.status(401).json(authError)
      }
      const passwordValid = await bcrypt.compare(req.body.password, user.password)
      if (!passwordValid) {
        return res.status(401).json(authError)
      }
      const tokenPayload = {
        userId: user.id,
      }
      res.cookie("token", jwt.sign(tokenPayload, process.env.JWT_SECRET))
      res.json({
        message: `Welcome ${user.username}!`, 
        token: jwt.sign(tokenPayload, process.env.JWT_SECRET)
      })
    } catch(err) {
      next(err)
    }
  })


  
  module.exports = router;