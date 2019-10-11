
exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    // a unique Id.
    tbl.increments();

    // a name. This column is required. The database should not allow resources with duplicate names.
    tbl.string('name', 255) // << char limit for postgreS
        .notNullable()
        .unique();

    // a description.
    tbl.string('description', 500); // << char limit for postgreS
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources')
};
