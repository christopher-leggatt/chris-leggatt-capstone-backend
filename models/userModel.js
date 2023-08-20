const knex = require("knex")(require("../knexfile"));

exports.showUserProfile = async (id) => {
  try {
    const user = await knex("products").where({ id: id }).select();

    return user;
  } catch (err) {
    throw new Error(`Error retrieving User: ${err}`);
  }
};

exports.editUserProfile = async (id, body) => {
  try {
    const user = await knex("products").where({ id: id }).update(body);

    return user;
  } catch (err) {
    throw new Error(`Error editing User: ${err}`);
  }
};

exports.deleteUserProfile = async (id) => {
  try {
    const user = await knex("users").where({ id: id }).del();

    return user;
  } catch (err) {
    throw new Error(`Error deleting User: ${err}`);
  }
};
