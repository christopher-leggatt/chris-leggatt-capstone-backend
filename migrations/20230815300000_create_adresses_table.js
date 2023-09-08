exports.up = function (knex) {
  return knex.schema.createTable("addresses", (table) => {
    table.increments("id");
    table.string("firstName");
    table.string("lastName");
    table.string("country");
    table.string("street1");
    table.string("street2");
    table.string("city");
    table.string("province");
    table.string("postalCode");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("addresses");
};
