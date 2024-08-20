const jwt = require('jsonwebtoken');


const express = require('express');
const app = express()
const {loginController, signupController} = require("../controllers/loginController"); 

app.post('/login', loginController);
app.post('/signup', signupController);

module.exports = app