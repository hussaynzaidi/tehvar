const jwt = require("jsonwebtoken");
const client = require("../db");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization Token Required" });
  }

  const token = authorization.split(" ")[1];


  try {
    const { id } = jwt.verify(token, process.env.SECRETKEY);
    console.log(id)
    req.user = await client.query("SELECT email FROM staff where email = $1", [
      id,
    ]);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Request not authorized: token expired" });
  }
};

module.exports = requireAuth;
