// Imports
const express = require('express');
const helmet = require('helmet');

// Routers Lives here
const resourceRouter = require('../routes/resources-router.js/index.js');
const projectRouter = require('../routes/projects-router.js/index.js');
const taskRouter = require('../routes/tasks-router.js');

const server = express();
server.use(helmet());
server.use(express.json());

// Use routers on server
server.use('/resources', resourceRouter);
server.use('/projects', projectRouter);
server.use('/tasks', taskRouter);

module.exports = server;
