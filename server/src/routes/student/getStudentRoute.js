const StudentModel = require("../../models/studentModel");

module.exports = async (req, res) => {
  const { name } = req.body;
  var student = {};
  if (name)
  {
    student = await StudentModel.find({name: {"$regex": `${name}`}});
  }
  else{
    student = await StudentModel.find().limit(100);
  }
  //const student1 = student.filter((student) => student.gender === 'Nữ');
  res.json(student);
};
