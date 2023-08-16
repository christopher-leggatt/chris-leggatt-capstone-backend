exports.up = function(knex) {
  return knex.schema.createTable('effects', (table) => {
    table.uuid('id').primary();
    table.string('effect').unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('effects');
};