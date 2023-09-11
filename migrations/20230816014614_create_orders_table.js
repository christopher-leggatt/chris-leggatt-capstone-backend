exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.uuid("id").primary();
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table
      .enu("status", ["pending", "ready", "cancelled", "completed"]).defaultTo("pending")
      .notNullable();
    table
      .integer("billing_address_id")
      .unsigned()
      .references("id")
      .inTable("addresses");
    table
      .integer("shipping_address_id")
      .unsigned()
      .references("id")
      .inTable("addresses");
    table.enu("payment_method", ["cash", "debit", "visa", "card"]).defaultTo("card");
    table.decimal("price_total");
    table.json("products"); 
    table.string("stripe_session_id").unique();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
