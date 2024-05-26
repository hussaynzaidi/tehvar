const port = 8000
const client = require('./db')
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

client.connect();


app.post('/registerAttendee', async (req, res) => {
    try {
        const { fName, lName, email, tid, rtid, aid } = req.body;
        await client.query("INSERT INTO Attendee (fname, lname, email, createdtime) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)", [fName, lName, email])

        const pakkaPromise = rtid.map(element => {
            return client.query(
                "INSERT INTO roundtableregistrations (aid, rtid) VALUES ($1, $2)",
                [aid, element]
            );
        });

        await Promise.all(pakkaPromise);

        const kachaPromise = tid.map(element => {
            return client.query(
                "INSERT INTO talkregistrations (aid, tid) VALUES ($1, $2)",
                [aid, element]
            );
        });
        await Promise.all(kachaPromise);
    } catch (error) {
        console.log(error.message)
    }

})


app.post('/registerSpeaker', async (req, res) => {
    try {
        const { fName, lName, email, phone, tid, rtid, sid } = req.body;
        await client.query("INSERT INTO Speaker (fname, lname, phoneno, email, createdtime) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)", [fName, lName, phone, email])


        const pakkaPromise = rtid.map(element => {
            return client.query(
                "INSERT INTO roundtablespeakers (rtid, sid) VALUES ($1, $2)",
                [element, sid]
            );
        });

        await Promise.all(pakkaPromise);

        const kachaPromise = tid.map(element => {
            return client.query(
                "INSERT INTO talkspeakers (tid, sid) VALUES ($1, $2)",
                [element, sid]
            );
        });
        await Promise.all(kachaPromise);

    } catch (error) {
        console.log(error.message)
    }

})

app.post('/registerArtist', async (req, res) => {
    const { fName, genre } = req.body
    try {
        await client.query("insert into artists (fname, genre, perfTime) values ($1, $2, current_timestamp)", [fName, genre]);
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/getAttendee', async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Attendee ORDER BY aid DESC limit 1");
        res.json(all.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

app.get('/getSpeaker', async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Speaker ORDER BY sid DESC limit 1");
        res.json(all.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})