exports.up = function (knex) {
    return knex.schema.createTable("vaporizers", (table) => {
      table.uuid("id").primary();
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE');
      table.enu('subcategory', ['cartridges', 'disposables', 'live_resin']).notNullable();
      table.enu('weight', ['0.25g', '0.3g', '0.5g', '0.95g', '1g', '2g']).notNullable();
      table.enu('type', ['hybrid', 'sativa', 'indica']).notNullable();
      table.float('thc');
      table.float('cbd');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("vaporizers");
  };
  