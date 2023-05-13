const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  teacherID: {
    type: String,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  birth: {
    type: Date,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  }
});

const TeacherModel = mongoose.model('Teacher', TeacherSchema);

module.exports = TeacherModel;

