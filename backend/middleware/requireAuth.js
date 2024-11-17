const jwt = require("jsonwebtoken");
const client = require("../db");

const createToken = (id) => {
  // Recreate the token with the staffNo or email (same logic as the token creation during login)
  return jwt.sign({ id: id }, process.env.SECRETKEY, { expiresIn: '1h' });
};

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(409).json({ error: "Authorization Token Required" });
  }

  const token = authorization.split(" ")[1];

  try {
    // Verify the token and get the payload (id)
    const { id } = jwt.verify(token, process.env.SECRETKEY); // id corresponds to staffNo or email based on how you created the token
    console.log(id);

    // Query the database to check if the user exists
    const result = await client.query("SELECT email FROM staff WHERE staffNo = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach the user to the request
    req.user = result.rows[0]; 

    next(); // Proceed to the next middleware or route handler

  } catch (error) {
    console.log(error);

    // If the token is expired, try to renew the token
    if (error.name === 'TokenExpiredError') {
      const { id } = jwt.decode(token); // Decode the token to get the id (since it's expired, the token can still be decoded)
      console.log('id is ' + id)
      // Fetch user information using the id
      const result = await client.query("SELECT email FROM staff WHERE staffNo = $1", [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      // Create a new token
      const newToken = createToken(result.rows[0].staffNo);

      // Optionally, return the new token in the response headers or body
      res.setHeader("x-new-token", newToken); // You can access this header on the frontend to update the token

      // Optionally, you can return the new token in the response body as well
      return res.status(401).json({ error: "Token expired, new token issued", newToken });

    } else {
      // If there is another type of error, handle it as unauthorized
      return res.status(401).json({ error: "Request not authorized: token invalid" });
    }
  }
};

module.exports = requireAuth;
