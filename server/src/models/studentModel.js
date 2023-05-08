const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentID: {
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
  classID: {
    type: String,
  }
});

const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = StudentModel;

