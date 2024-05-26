const client = require('../db');

const registerArtist = async (req, res) => {
    const { fName, genre } = req.body;
    try {
        await client.query("INSERT INTO artists (fname, genre, perfTime) VALUES ($1, $2, current_timestamp)", [fName, genre]);
        res.status(201).send('Artist registered successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
};

const getArtist = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM artists ORDER BY fName DESC limit 1");
        res.json(all.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const getAllArtist = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM artists");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};


module.exports = { registerArtist, getArtist, getAllArtist};
