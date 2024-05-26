const express = require('express');
const app = express();
const {getAllStaff} = require('../controllers/staffController');


app.get('/getAllStaff', getAllStaff);
module.exports = app;
