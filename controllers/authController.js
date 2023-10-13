// const knex = require('knex')(require('../knexfile'));
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const knex = require("knex")(config);
const authModel = require("../models/authModel");
require("dotenv").config();

exports.createAuthsLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authModel.findUserByUsername(username);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const isPasswordValid = await authModel.comparePassword(
      password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JSON_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token, userId: user.id, role: user.role });
  } catch (err) {
    res.status(400).send(`Error logging in: ${err}`);
  }
};

exports.showUsersDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const userDetails = await authModel.showUserDetails(userId);

    res.status(200).json({ userDetails });
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server Error: ${err}`);
  }
};

exports.postAuthsSignup = async () => {
  try {
  } catch (err) {}
};
