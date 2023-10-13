const knex = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

exports.comparePassword = async (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

exports.findUserByUsername = async (username) => {
  return knex("users").where({ username }).first();
};

exports.showUserDetails = async (userId) => {
  try {
    const userDetails = await knex("users")
      .where({ id: userId})
      .select();

    return userDetails;
  } catch (err) {
    throw err;
  }
};
