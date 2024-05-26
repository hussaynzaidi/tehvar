const express = require('express');
const app = express();
const { registerArtist, getArtist, getAllArtist} = require('../controllers/artistController');

app.post('/registerArtist', registerArtist);
app.get('/getArtist', getArtist);
app.get('/getAllArtist',getAllArtist)
module.exports = app;
