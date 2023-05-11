const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  subjectID: {
    type: String,
  },
  subjectName: {
    type: String,
  }
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);

module.exports = SubjectModel;

