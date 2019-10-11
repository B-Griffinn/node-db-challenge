// Imports
const express = require('express');
const helmet = require('helmet');

// Routers Lives here
const resourceRouter = require('../routes/resource-router.js');

const server = express();
server.use(helmet());
server.use(express.json());

// Use routers on server
server.use('/resources', resourceRouter);

module.exports = server;
