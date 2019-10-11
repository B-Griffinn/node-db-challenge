
exports.up = function(knex) {
    // create a table and give it a name of projects
  return knex.schema.createTable('projects', tbl => {
      // create unique id column
      tbl.increments();

      // create name column = string, required
      tbl.string('name', 255) // << character limit for postgreS
        .notNullable();

      // create description column - nullable
      tbl.string('description', 500);

      // create a boolean column that defaults to false/0 & is notNUllable
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
