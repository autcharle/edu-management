const mongoose = require("mongoose");

const SubTeacherSchema = new mongoose.Schema({
  subjectID: {
    type: String,
  },
  teacherID: {
    type: String,
  },
  classID: {
    type: String,
  },
});

const SubTeacherModel = mongoose.model("SubjectTeacher", SubTeacherSchema);

module.exports = SubTeacherModel;
