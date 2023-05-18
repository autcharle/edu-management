const mongoose = require("mongoose");

const LogInSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const LogInModel = mongoose.model("LogIn", LogInSchema);

module.exports = LogInModel;
