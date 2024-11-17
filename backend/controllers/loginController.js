const client = require('../db');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
   return jwt.sign({id : id}, process.env.SECRETKEY, {expiresIn : '1h'})
}
const loginController = async (req, res) => {
  const { email, staffNo } = req.body;
  try {
    console.log(email +"   " + staffNo)
    const staffFound = await client.query(
      "SELECT * FROM staff WHERE email = $1 AND staffNo = $2",
      [email, staffNo]
    );

    if (staffFound.rows.length === 0) {
      return res.status(404).send('Staff not found');
    }

    const token = createToken(staffFound.rows[0].staffNo);
    const foundEmail = staffFound.rows[0].email;

    res.status(200).json({ token, foundEmail });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};


const signupController = async (req,res) => {
    const {email, password}= req.body
    const token = createToken(email)
    res.status(200).json({email, token})
}

module.exports = {loginController, signupController};