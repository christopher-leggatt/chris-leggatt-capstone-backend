exports.up = function (knex) {
  return knex.schema.createTable("order_details", (table) => {
    table.uuid("id").primary();
    table
      .uuid("order_id")
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE");
    table
      .uuid("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.integer("quantity");
    table.decimal("price");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("order_details");
};
