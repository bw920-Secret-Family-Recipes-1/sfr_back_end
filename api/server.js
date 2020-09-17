const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
require("dotenv").config();





const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(cookieParser())



server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our Secret Family Recipies",
	})
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something is wrong"
    })
})

module.exports = server;