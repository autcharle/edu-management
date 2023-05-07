const LogInModel = require('../../models/logInModel');

module.exports = async (req, res) => {
    /*const login = await LogInModel.find();
    console.log(login[0]);
    res.json(login);*/
  const {username, password} = req.body;
  const login = new LogInModel({
    username,
    password,
  })
  const newLogin = await login.save();
  res.json(newLogin);
};

