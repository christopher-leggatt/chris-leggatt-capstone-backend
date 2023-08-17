exports.up = function (knex) {
    return knex.schema.createTable("orders", (table) => {
      table.uuid("id").primary();
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.enu('status', ['pending', 'ready', 'cancelled', 'completed']).notNullable();
      table.string('billing_address');
      table.enu('payment_method', ['cash', 'debit', 'visa']);
      table.decimal("price_total");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("orders");
  };
  