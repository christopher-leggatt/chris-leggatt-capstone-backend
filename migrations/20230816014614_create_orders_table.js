exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table
      .enu("status", ["pending", "ready", "cancelled", "completed"])
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
    table.enu("payment_method", ["cash", "debit", "visa"]);
    table.decimal("price_total");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};
