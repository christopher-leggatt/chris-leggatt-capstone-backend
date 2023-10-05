// const knex = require("knex")(require("../knexfile"));
const knex = require("../db");
const { v4: uuidv4 } = require("uuid");

exports.createOrderEntry = async (orderDetails) => {
  const order = {
    id: uuidv4(),
    products: orderDetails.products,
  };

  try {
    const orders = await knex("orders").insert(order);

    return orders;
  } catch (err) {
    console.log("🚀 ~ file: orderModel.js:16 ~ exports.createOrderEntry= ~ err:", err);
    throw new Error(`Error creating Order: ${err}`);
  }
};
