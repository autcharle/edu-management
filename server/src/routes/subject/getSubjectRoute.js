const SubjectModel = require("../../models/subjectModel");

module.exports = async (req, res) => {
  const subject = await SubjectModel.find(req.body);
  res.json(subject);
};
