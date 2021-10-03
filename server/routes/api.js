const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions.routes');

apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
