const express = require('express');
const app = express()
const { registerAttendee, getAttendee, getAllAttendee } = require('../controllers/attendeeController');

app.post('/registerAttendee', registerAttendee);
app.get('/getAttendee', getAttendee);
app.get('/getAllAttendee', getAllAttendee);

module.exports = app;
