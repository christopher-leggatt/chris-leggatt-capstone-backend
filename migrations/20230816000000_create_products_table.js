exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
      table.uuid("id").primary();
      table.string("name").unique().notNullable();
      table.string("brand").notNullable();
      table.enu("category", ["flower", "prerolls", "vaporizers", "concentrates", "edibles", "seeds", "topicals"]);
      table.string('subcategory').notNullable();
      table.string('image_url').notNullable();
      table.text('image_url_description');
      table.text("product_description");
      table.decimal('weight');
      table.enu('weight_unit', ['g', 'mg', 'other']).defaultTo("g");
      table.decimal('price');
      table.enu('strain', ['hybrid', 'sativa', 'indica', "high_cbd", "other"]).notNullable().defaultTo("other");
      table.float('thc');
      table.float('cbd');
      table.enu('thc_cbd_unit', ['%', 'mg']);
      table.string('item_quantity');
      table.integer('inventory_quantity').defaultTo(99);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("products");
  };
  
