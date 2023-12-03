const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { email, name, phoneNumber } = req.body;
    const user = await User.create({ email, name, phoneNumber });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured! Stay calm");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while fetching the users");
  }
};

module.exports = { createUser, getUsers };
