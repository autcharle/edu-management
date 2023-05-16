const jwt = require("jsonwebtoken");
const LogInModel = require("../../models/logInModel");

module.exports = async (req, res) => {
  const login = await LogInModel.find(req.body);
  if (login.length != 0) {
    const username = req.body.username;
    const token = jwt.sign(
      {
        un: req.body.username,
        pw: req.body.password,
      },
      process.env.SECRET
    );
    res.json({
      username,
      token,
    });
  } else {
    res.status(401).send("Wrong password");
  }
};
