exports.up = function (knex) {
    return knex.schema.createTable("concentrates", (table) => {
      table.uuid("id").primary();
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE');
      table.enu('subcategory', ['live_resin', 'shatter', 'rso', 'hash', 'oil']).notNullable();
      table.enu('weight', ['1g', '2g']).notNullable();
      table.enu('type', ['high_cbd', 'hybrid', 'sativa', 'indica']).notNullable();
      table.float('thc');
      table.float('cbd');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("concentrates");
  };
  