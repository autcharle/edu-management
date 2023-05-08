const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
  maxAge: {
    type: Number,
  },
  minAge: {
    type: Number,
  },
  maxClassAttendant: {
    type: Number,
  },
  stdScore:{
    type: Number
  }
});

const RuleModel = mongoose.model('Rule', RuleSchema);

module.exports = RuleModel;

