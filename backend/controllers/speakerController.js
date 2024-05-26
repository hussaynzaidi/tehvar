const client = require('../db');

const registerSpeaker = async (req, res) => {
    try {
        const { fName, lName, email, phone, tid, rtid, sid } = req.body;
        await client.query("INSERT INTO Speaker (fname, lname, phoneno, email, createdtime) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)", [fName, lName, phone, email]);

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

        res.status(201).send('Speaker registered successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
};

const getSpeaker = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Speaker ORDER BY sid DESC limit 1");
        res.json(all.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const getAllSpeaker = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Speaker");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
module.exports = { registerSpeaker, getSpeaker,getAllSpeaker };
