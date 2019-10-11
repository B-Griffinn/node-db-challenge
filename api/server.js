// Imports
const express = require('express');
const helmet = require('helmet');

// Router Lives here

const server = express();
server.use(helmet());
server.use(express.json());

// User router on server


module.exports = server;
