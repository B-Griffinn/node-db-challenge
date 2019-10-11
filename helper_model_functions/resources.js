// Imports 
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    add
}

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources')
    .insert(resource)
}