const client = require('../db');

const getAllStaff = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Staff");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
module.exports = { getAllStaff };
