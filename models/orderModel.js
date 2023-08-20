const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

exports.createOrdersEntry = async (order) => {
  const orderEntry = {
    id: uuidv4(),
    ...order,
  };

  try {
    const orders = await knex("orders").insert(orderEntry);

    return orders;
  } catch (err) {
    throw new Error(`Error retrieving Products: ${err}`);
  }
};

exports.showUserOrderEntry = async (id) => {
  try {
    const order = await knex("orders").where({ user_id: id }).select();

    return order;
  } catch (err) {
    throw new Error(`Error retrieving Order: ${err}`);
  }
};
