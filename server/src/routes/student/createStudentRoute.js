const StudentModel = require("../../models/studentModel");
const isAgeAllowed = require("../../function/isAgeAllowed");

module.exports = async (req, res) => {
  const { studentID, name, gender, birth, address, email, classID } = req.body;
  if (!studentID || !name || !gender || !birth || !address || !email) {
    return res.status(400).send("Missing required attributes.");
  }
  if (!(await isAgeAllowed(birth)))
    res.status(409).send("Older/lower age allowed");
  else {
    const student = new StudentModel({
      studentID,
      name,
      gender,
      birth,
      address,
      email,
      classID,
    });
    const newStudent = await student.save();
    res.json(newStudent);
  }
};
/* */
