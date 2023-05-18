const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new mongoose.Schema({
  studentID: {
    type: String,
  },
  subjectID: {
    type: String,
  },
  Semester: {
    type: Number,
  },
  HS1: {
    type: Number,
  },
  HS2: {
    type: Number,
  },
  HS3: {
    type: Number,
  },
  FinalScore: {
    type: Number,
  },
});

const ScoreModel = mongoose.model("Score", ScoreSchema);

module.exports = ScoreModel;
