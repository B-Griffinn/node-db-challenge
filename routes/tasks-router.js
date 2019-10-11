/*
adding resources. ==> POST
retrieving a list of resources. ==> GET 
*/

// Imports
const express = require('express');

// May need model functions in order to retrieve the resources
const Task = require('../helper_model_functions/tasks.js');

const router = express.Router();

router.get('/', (req, res) => {
    Task.find()
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve the list of task."})
    })
})

router.post('/', (req, res) => {
    const body = req.body;
    const completeStatus = req.body.completed;
    // console.log(completeStatus)

    

    Task.add(body)
    .then(task => {
        if(completeStatus === false) {
            return completeStatus.toString('false')
    } else if(completeStatus === true){
        return completeStatus.toString('true')
    } 
        res.status(201).json(task)
    
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error trying to add that task."})
    })
})

module.exports = router;