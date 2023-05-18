const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  classID: {
    type: String,
  },
});

const ClassModel = mongoose.model("Class", ClassSchema);

module.exports = ClassModel;
