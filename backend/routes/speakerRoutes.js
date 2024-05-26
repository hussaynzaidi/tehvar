const express = require('express');
const app = express();
const { registerSpeaker, getSpeaker, getAllSpeaker } = require('../controllers/speakerController');

app.post('/registerSpeaker', registerSpeaker);
app.get('/getSpeaker', getSpeaker);
app.get('/getAllSpeaker', getAllSpeaker);
module.exports = app;
