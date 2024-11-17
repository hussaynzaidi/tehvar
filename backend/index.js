const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const path = require('path');
const port = 8000
const client = require('./db')
app.use(cors());
app.use(express.json());

const staffRoutes = require('./routes/staffRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');
const speakerRoutes = require('./routes/speakerRoutes');
const artistRoutes = require('./routes/artistRoutes');
const viewRoutes = require('./routes/viewRoutes');
const sponsorRoutes = require('./routes/sponsorRoutes');
const loginRoutes = require('./routes/loginRoutes');
const requireAuth = require('./middleware/requireAuth');


// app.use(requireAuth)
app.use('/api/attendee', attendeeRoutes);
app.use('/api/speaker', speakerRoutes);
app.use('/api/artist', artistRoutes);
app.use('/api/view', viewRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/auth', loginRoutes);

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send('Internal Server Error');
});

app.use('/test', (req, res) => {
    console.log("test")
    res.send("tested outside of api")
})

client.connect();
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


