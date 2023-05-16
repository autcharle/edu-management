const StudentModel = require("../../models/studentModel");

module.exports = async (req, res) => {
  const { studentID } = req.body;
  var student = {};
  if (studentID)
    {student = await StudentModel.find({studentID: {"$regex": `^${studentID}`}});}
  else{
    student = await StudentModel.find().limit(100);
  }
  //const student1 = student.filter((student) => student.gender === 'Nữ');
  res.json(student);
};
