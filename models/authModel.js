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

exports.findUserByLogin = async (login) => {
  let user = knex("users").where({ email: login }).first();
  if (!user) {
    user = await knex("users").where({ username: login }).first();
  }

  return user;
};

exports.showUserProfile = async (userId) => {
  try {
    const userProfile = await knex("users").where({ id: userId }).select();

    return userProfile;
  } catch (err) {
    throw new Error("Error fetching Profile:", err);
  }
};

// exports.showUserProfile = async (id) => {
//   try {
//     const user = await knex("products").where({ id: id }).select();

//     return user;
//   } catch (err) {
//     throw new Error(`Error retrieving User: ${err}`);
//   }
// };

exports.editUserProfile = async (id, body) => {
  try {
    const user = await knex("users").where({ id: userId }).update(body);

    return user;
  } catch (err) {
    throw new Error(`Error editing User: ${err}`);
  }
};

exports.deleteUserProfile = async (id) => {
  try {
    const user = await knex("users").where({ id: userId }).del();

    return user;
  } catch (err) {
    throw new Error(`Error deleting User: ${err}`);
  }
};
