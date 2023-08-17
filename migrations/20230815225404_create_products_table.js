exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
      table.uuid("id").primary();
      table.string("name").unique().notNullable();
      table.enu("category", ["flower", "prerolls", "vaporizers", "concentrates", "edibles", "seeds", "topicals"]);
      table.string("brand").unique().notNullable();
      table.string('image_url_primary').notNullable();
      table.text('image_url_description');
      table.text("description");
      table.decimal('price');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("products");
  };
  
