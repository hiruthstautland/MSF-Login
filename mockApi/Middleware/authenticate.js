const jsonWebToken = require("jsonwebtoken");
const secret = process.env.secret;

function authenticate(req, res, next) {
  const token = req.headers["x-auth-token"];
  try {
    const { id, name, handle } = jsonWebToken.verify(
      token,
      new Buffer(secret, "base64")
    );
    req.user = { id, name, handle };
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: `Unable to authenticate, please use a valid tokern` });
  }
}

module.exports = {
  authenticate,
};
