const client = require('../db');

const getBudget = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM budget");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

const getAgenda = async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM schedule where id > 49");
        res.json(all.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};


module.exports = { getBudget, getAgenda};
