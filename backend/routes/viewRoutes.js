const express = require('express');
const app = express();
const {getBudget, getAgenda} = require('../controllers/viewController');


app.get('/getBudget', getBudget);
app.get('/getAgenda', getAgenda);
module.exports = app;
