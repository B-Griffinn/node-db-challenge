/*
adding resources. ==> POST
retrieving a list of resources. ==> GET 
*/

// Imports
const express = require('express');

// May need model functions in order to retrieve the resources
// const Task = require('../helper_functions/tasks.js');

const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

const router = express.Router();

router.get('/', (req, res) => {

    const newBody = req.body;
    console.log(newBody)
    
    // db.find()
    db('tasks')
    .then(tasks => {
       let newStatus = tasks.map(task => {
            return {...task, completed: task.completed ? 'true' : 'false'}
        })
        res.status(200).json(newStatus)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve the list of task."})
    })
})

router.post('/', (req, res) => {
    const body = req.body;

    db('tasks')
    .then(task => {
        res.status(201).json({task})
    
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error trying to add that task."})
    })
})

module.exports = router;