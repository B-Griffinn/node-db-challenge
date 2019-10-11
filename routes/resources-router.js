/*
adding resources. ==> POST
retrieving a list of resources. ==> GET 
*/

// Imports
const express = require('express');

// May need model functions in order to retrieve the resources
const Resource = require('../helper_model_functions/resources.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resource.find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve the list of resources."})
    })
})

router.post('/', (req, res) => {
    const body = req.body;

    Resource.add(body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: "There was an error trying to add that resource."})
    })
})