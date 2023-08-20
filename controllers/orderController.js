const knex = require("knex")(require("../knexfile"));
const orderModel = require("../models/orderModel");

exports.createOrdersEntry = async (req, res) => {
  const { body: order } = req;
  try {
    const orders = await productModel.createOrdersList(order);
    res.status(201).json(orders[0]);
  } catch (err) {
    res.status(400).send(`Error adding Orders ${err}`);
  }
};

exports.showUsersOrdersEntry = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await productModel.showUserOrderEntry(id);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).send(`Error retrieving Order: ${err}`);
  }
};

exports.getOrderItem = async () => {
  try {
  } catch (err) {}
};
