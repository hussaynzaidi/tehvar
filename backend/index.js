const express = require('express');
const cors = require('cors');
const app = express();
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

app.use('/api/attendee', attendeeRoutes);
app.use('/api/speaker', speakerRoutes);
app.use('/api/artist', artistRoutes);
app.use('/api/view', viewRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/sponsors', sponsorRoutes);


client.connect();
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


