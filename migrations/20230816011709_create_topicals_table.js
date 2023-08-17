exports.up = function (knex) {
    return knex.schema.createTable("topicals", (table) => {
      table.uuid("id").primary();
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE');
      table.enu('subcategory', ['lotions', 'bath_products']).notNullable();
      table.enu('type', ['high_cbd']).notNullable();
      table.float('thc');
      table.float('cbd');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("topicals");
  };
  