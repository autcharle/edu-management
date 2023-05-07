const StudentModel = require('../../models/studentModel');

module.exports = async (req, res) => {
  const {studentID, name,gender,birth,address,classID} = req.body;
  const student = new StudentModel({
    studentID,
    name,
    gender,
    birth,
    address,
    classID
  })
  const newStudent = await student.save();
  res.json(newStudent);
};

