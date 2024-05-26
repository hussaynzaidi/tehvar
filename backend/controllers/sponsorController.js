const client = require('../db');

const getAllSponsor = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Sponsors");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
module.exports = { getAllSponsor };
