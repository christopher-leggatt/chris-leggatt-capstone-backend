exports.up = function (knex) {
  return knex.schema.createTable("product_effects", (table) => {
    table.uuid("id").primary();
    table
      .uuid("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table
      .uuid("effect_id")
      .references("id")
      .inTable("effects")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product_effects");
};
