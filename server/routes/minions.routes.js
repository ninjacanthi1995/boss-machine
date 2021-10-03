const express = require('express');
const minionsRouter = express.Router({ mergeParams: true });
const { getAllFromDatabase } = require('../db');

minionsRouter.get('/', (req, res, next) => {
    const allMinions = getAllFromDatabase('minions');
    if (!allMinions) {
        res.status(404).send('Minions not found!')
    }
    res.send(allMinions);
})

module.exports = minionsRouter;
