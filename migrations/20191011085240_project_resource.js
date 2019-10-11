
exports.up = function(knex) {
  return knex.schema.createTable('project_resource', tbl => {
      // unique ID
      tbl.increments();

      // FK = project_id
      tbl.integer('project_id', 12) // << char limit for postgreS
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');

      // FK = resource_id
      tbl.integer('resource_id', 12) // << char limit for postgreS
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resource')
};
