/*
adding resources. ==> POST
retrieving a list of resources. ==> GET 
*/

// Imports
const express = require('express');

// May need model functions in order to retrieve the resources
const Project = require('../helper_model_functions/projects');

const router = express.Router();

router.get('/', (req, res) => {
    Project.find()
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve the list of projects."})
    })
})

router.post('/', (req, res) => {
    const body = req.body;
    const completeStatus = req.body.completed;
    // console.log(completeStatus)

    Project.add(body)
    .then(proj => {
        if(completeStatus === false) {
            completeStatus.toString()
        } else if(completeStatus === true){
            completeStatus.toString()
        } 
        res.status(201).json(proj)
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error trying to add that project."})
    })
})

module.exports = router;