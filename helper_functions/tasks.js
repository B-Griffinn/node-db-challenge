// Imports 
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    add
}

function findById(id) {
    return db('tasks')
        .where({ id })
        .first()
        .then(task => {
            if(task) {
                return task
            } else {
                return ''
            }
        })
}

function find() {
    return db('tasks')
    // joining table, 1st col to join, operator, second col to join
        // .join('projects', 'project.id', 'tasks.project_id')
}

function add(task) {
    return db('tasks')
    .insert(task)
    .then(id => {
        return findById(id[0])
    })
}


/*
.join(table, first, [operator], second)
The join builder can be used to specify joins between tables, 
with the first argument being the joining table, 
the next three arguments being the first join column, 
the join operator and the second join column, respectively.


nsert — .insert(data, [returning])
Creates an insert query, taking either a hash of properties to be inserted into the row, 
or an array of inserts, to be executed as a single insert command. 
If returning array is passed e.g. ['id', 'title'], it resolves the promise 
/ fulfills the callback with an array of all the added rows with specified columns. 
It's a shortcut for returning method
*/