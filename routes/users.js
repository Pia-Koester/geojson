const express = require("express");
const userRouter = express.Router();
const { createUser, getUsers } = require("../controllers/users");

userRouter.route("/").post(createUser).get(getUsers);

module.exports = userRouter;
