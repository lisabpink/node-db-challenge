const express = require("express");
const projectRouter = require('./projects/projectRouter');
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.get("*", (req, res) => {
  res.status(200).json("It's working");
});

module.exports = server;