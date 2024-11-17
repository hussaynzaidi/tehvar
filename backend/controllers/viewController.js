const client = require('../db');

// (async () => {
//   try {
//     await client.connect();
//     console.log('Connected to Supabase database successfully!');
//     await client.end();
//   } catch (err) {
//     console.error('Error connecting to the database:', err);
//   }
// })();

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
