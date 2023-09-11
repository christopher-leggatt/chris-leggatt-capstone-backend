const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

exports.createOrderEntry = async (orderDetails) => {
  const order = {
    id: uuidv4(),
    ...orderDetails,
  };

  try {
    const orders = await knex("orders").insert(order);

    return orders;
  } catch (err) {
    throw new Error(`Error creating Order: ${err}`);
  }
};
