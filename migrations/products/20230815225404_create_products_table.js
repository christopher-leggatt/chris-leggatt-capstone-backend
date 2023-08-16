exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
      table.uuid("id").primary();
      table.string("name").unique().notNullable();
      table.string("brand").unique().notNullable();
      table.string('image_url_primary').notNullable();
      table.string('image_url_secondary').notNullable();
      table.string('image_url_description');
      table.string("description");
      table.decimal('price');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("products");
  };
  
