const uuidv4 = require("uuid").v4;

exports.seed = async function (knex) {

  const users = await knex("users").select("id");

  return knex("orders")
    .del()
    .then(function () {
      return knex("orders").insert([
        {
          id: uuidv4(),
          user_id: users[0].id,
          status: "pending",
          billing_address: "123 Main St, City, Country",
          payment_method: "cash",
          price_total: 100.0,
        },
        {
          id: uuidv4(),
          user_id: users[1].id,
          status: "completed",
          billing_address: "456 Another St, City, Country",
          payment_method: "debit",
          price_total: 200.0,
        },
        {
          id: uuidv4(),
          user_id: users[2].id,
          status: "cancelled",
          billing_address: "789 Some St, City, Country",
          payment_method: "visa",
          price_total: 150.0,
        },
      ]);
    });
};
