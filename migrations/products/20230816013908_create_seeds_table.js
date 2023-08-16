exports.up = function (knex) {
  return knex.schema.createTable("seeds", (table) => {
    table.uuid("id").primary();
    table
      .uuid("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.enu("type", ["high_cbd", "hybrid"]).notNullable();
    table.float("thc");
    table.float("cbd");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("seeds");
};
