const client = require('../db');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
   return jwt.sign({id : id}, process.env.SECRETKEY, {expiresIn : '1h'})
}
const loginController = async (req,res) => {
    const {email, staffNo}= req.body
    try {
        const staffFound = await client.query("SELECT * FROM staff where email = $1 and staffNo = $2", [email, staffNo]);
        const token = createToken(staffFound.rows[0].staffNo);
        const foundEmail = staffFound.rows[0].email;
        res.status(200).json({token, foundEmail});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Staff not found');
    }
}

const signupController = async (req,res) => {
    const {email, password}= req.body
    const token = createToken(email)
    res.status(200).json({email, token})
}

module.exports = {loginController, signupController};