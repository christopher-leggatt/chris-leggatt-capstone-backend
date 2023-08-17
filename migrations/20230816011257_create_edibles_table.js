exports.up = function (knex) {
  return knex.schema.createTable("edibles", (table) => {
    table.uuid("id").primary();
    table
      .uuid("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table
      .enu("subcategory", [
        "gummies",
        "baked_goods",
        "drinks",
        "capsules_tablets",
        "hard_candy",
      ])
      .notNullable();
    table.integer("quantity");
    table.enu("type", ["high_cbd", "hybrid", "sativa", "indica"]).notNullable();
    table.float("thc");
    table.float("cbd");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("edibles");
};
