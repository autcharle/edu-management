const SubjectModel = require("../../models/subjectModel");

module.exports = async (req, res) => {
  const subject = await SubjectModel.find(req.body);
  //const student1 = student.filter((student) => student.gender === 'Nữ');
  res.json(subject);
};
