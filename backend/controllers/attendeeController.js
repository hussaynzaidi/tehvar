const client = require('../db');

const registerAttendee = async (req, res) => {
    try {
        const { fName, lName, email, tid, rtid, aid } = req.body;
        await client.query("INSERT INTO Attendee (fname, lname, email, createdtime) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)", [fName, lName, email]);

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

        res.status(201).send('Attendee registered successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
};

const getAttendee = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Attendee ORDER BY aid DESC limit 1");
        res.json(all.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const getAllAttendee = async (req, res) => {
    try {
        const all = await client.query("Select * from Attendee");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

module.exports = { registerAttendee, getAttendee, getAllAttendee };
