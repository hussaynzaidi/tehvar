const express = require('express');
const app = express();
const {getAllSponsor} = require('../controllers/sponsorController');


app.get('/getAllSponsor', getAllSponsor);
module.exports = app;
