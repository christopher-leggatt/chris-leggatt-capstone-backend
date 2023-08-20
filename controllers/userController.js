const knex = require("knex")(require("../knexfile"));
const userModel = require("../models/userModel");

exports.showUsersProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.showUserProfile(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(`Error getting User ${id}: ${err}`);
  }
};

exports.editUsersProfile = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await userModel.editUserProfile(id, body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(`Error updating user ${id}: ${err}`);
  }
};

exports.deleteUsersProfile = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await userModel.deleteUserItem(id);
      res.status(204).json(user);
    } catch (err) {
      res.status(400).send(`Error deleting User ${id}: ${err}`);
    }
  };

exports.postRegisteredUsers = async () => {};

exports.postUsersLogin = async () => {};
