exports.up = function (knex) {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("id");
    table.integer("order_id").unsigned().references("id").inTable("orders");
    table.integer("product_id").notNullable();
    table.integer("count").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("order_items");
};
