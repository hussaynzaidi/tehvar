const port = 8000
const client = require('./server')
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

client.connect();

//Register Customer
app.post('/registerCust', async(req, res) => {
    try {
       const { fName, lName, email } = req.body;
    const addCust = await client.query("INSERT INTO Attendee (fname, lname, email, createdtime) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *", 
     [fName, lName, email])
         res.json(addCust.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})

//Get all customrs
app.get('/all', async (req, res) => {
    try {
        const all = await client.query("SELECT * FROM Attendee");
        res.json(all.rows)
    } catch (error) {
        console.error(error.message)
    }})

//Get an id
app.get('/all/:id',async (req, res) => {
    try {
        const { id } = req.params
        const getID = await client.query('SELECT * FROM Attendee where aid = $1', [id])
        res.json(getID.rows)
    } catch (error) {
        console.log(error)
    }})

//Updates an id
app.put("/all/:id", async (req, res) => {
    try {
        const attendee = req.body;
        console.log(attendee.fName)
        const query = 'UPDATE attendee SET fName = $1, lName = $2, email = $3, createdtime = CURRENT_TIMESTAMP WHERE aid = $4';
        const values = [attendee.fName, attendee.lName, attendee.email, req.params.id];

        const result = await client.query(query, values);
        res.send("Update successful!");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});
    
//Delete an id
app.delete("/all/delete/:id", async (req, res) => {
    try {
        const {id} = req.params
        const delID = await client.query('delete from attendee where aid= $1',[id])
        res.json("deleted id")
    } catch (error) {
        console.log(error)
    }
});