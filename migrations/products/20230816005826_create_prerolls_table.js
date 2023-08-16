exports.up = function (knex) {
    return knex.schema.createTable("prerolls", (table) => {
      table.uuid("id").primary();
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE');
      table.enu('subcategory', ['singles', 'preroll_packs', 'infused_prerolls']).notNullable();
      table.enu('weight', ['0.5g', '1g', '1.5g', '2g', '2.5g', '3g', '3.5g', '4g', '5g', '7g', '8g', '28g']).notNullable();
      table.enu('type', ['high_cbd', 'hybrid', 'sativa', 'indica']).notNullable();
      table.float('thc');
      table.float('cbd');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("prerolls");
  };
  