exports.up = function(knex) {
  return knex.schema.createTable("coffees", table => {
    table.increments();
    table.string("type").notNullable();
    table.string("brand");
    table.timestamp("consumed_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("coffees");
};
