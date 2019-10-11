/*
adding resources. ==> POST
retrieving a list of resources. ==> GET 
*/

// Imports
const express = require('express');

// May need model functions in order to retrieve the resources
const Project = require('../helper_functions/projects');

const router = express.Router();

router.get('/', (req, res) => {

    const body = req.body;

    Project.find()
    .then(proj => {
        if(body.completed === 1) {
            req.body.completed = 'true'
        } 
        // else if(body.completed === 0) {
        //     req.body.completed = 'false'
        // }
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve the list of projects."})
    })
})

router.post('/', (req, res) => {
    const body = req.body;

    Project.add(body)
    .then(proj => {
        res.status(201).json(proj)
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error trying to add that project."})
    })
})

module.exports = router;