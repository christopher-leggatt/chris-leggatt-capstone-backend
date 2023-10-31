exports.up = function (knex) {
  return knex.schema.createTable("refresh_tokens", (table) => {
    table.increments("id").primary();
    table
      .uuid("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("token", 256).notNullable().unique();
    table.datetime('expires_at').notNullable().defaultTo('2050-12-31 23:59:59'); 
    table.boolean("revoked").notNullable().defaultTo(false);
    table.timestamp("issued_at");
    table.timestamps(true, true);
    table.boolean("used").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("refresh_tokens");
};
