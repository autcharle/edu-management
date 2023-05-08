const StudentModel = require('../../models/studentModel');
const isAgeAllowed =  require('../../middleware/isAgeAllowed');
module.exports = async (req, res) => {
  const {studentID, name,gender,birth,address,classID} = req.body;

  if (! await isAgeAllowed(birth))
    res.status(409).send("Older/lower age allowed");
  else{
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
  }
};
/* */

