exports.up = function (knex) {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("id");
    table.uuid("order_id").references("id").inTable("orders").onDelete("CASCADE");
    table.uuid("product_id").references("id").inTable("products").onDelete("CASCADE");
    table.integer("count").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("order_items");
};

