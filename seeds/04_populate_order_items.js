const uuidv4 = require("uuid").v4;

exports.seed = async function (knex) {
  const orders = await knex("orders").select("id");

  const products = await knex("products").select("id");

  return knex("order_items")
    .del()
    .then(function () {
      return knex("order_items").insert([
        {
          id: uuidv4(),
          order_id: orders[0].id,
          product_id: products[0].id,
          quantity: 2,
          price: 20.0,
        },
        {
          id: uuidv4(),
          order_id: orders[0].id,
          product_id: products[1].id,
          quantity: 1,
          price: 10.0,
        },
        {
          id: uuidv4(),
          order_id: orders[0].id,
          product_id: products[2].id,
          quantity: 3,
          price: 30.0,
        },
        {
          id: uuidv4(),
          order_id: orders[1].id,
          product_id: products[2].id,
          quantity: 2,
          price: 20.0,
        },
        {
          id: uuidv4(),
          order_id: orders[1].id,
          product_id: products[3].id,
          quantity: 1,
          price: 10.0,
        },
        {
          id: uuidv4(),
          order_id: orders[1].id,
          product_id: products[4].id,
          quantity: 3,
          price: 30.0,
        },
        {
          id: uuidv4(),
          order_id: orders[2].id,
          product_id: products[5].id,
          quantity: 2,
          price: 20.0,
        },
        {
          id: uuidv4(),
          order_id: orders[2].id,
          product_id: products[6].id,
          quantity: 1,
          price: 10.0,
        },
        {
          id: uuidv4(),
          order_id: orders[2].id,
          product_id: products[7].id,
          quantity: 3,
          price: 30.0,
        },
      ]);
    });
};
