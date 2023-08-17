exports.up = function (knex) {
    return knex.schema.createTable("flower", (table) => {
      table.uuid("id").primary();
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE');
      table.enu('subcategory', ['all_flower', 'pre_ground']).notNullable();
      table.enu('weight', ['1g', '3.5g', '7g', '14g', '28g']);
      table.enu('type', ['hybrid', 'sativa', 'indica']).notNullable();
      table.float('thc');
      table.float('cbd');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("flower");
  };
  
