exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary();
    table.string("username").unique().notNullable();
    table.string("email").unique().notNullable();
    table.string("password", 128).notNullable();
    table.string("phone");
    table.boolean("is_admin");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
