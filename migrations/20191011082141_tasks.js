
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    // a unique id.
    tbl.increments();

    // a description of what needs to be done. This column is required.
    tbl.string('description', 500) // << char limit for postgreS
        .notNullable();

    // a notes column to add additional information.
    tbl.string('note', 255); // << char limit for postgreS

    // a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.
    // create a boolean column that defaults to false/0 & is notNUllable
    tbl.boolean('completed')
    .notNullable()
    .defaultTo(0);

    // FK = project_id

    tbl.integer('project_id', 12) // << char limit for postgreS
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
};
