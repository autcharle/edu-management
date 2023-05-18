const StudentModel = require("../../models/studentModel");
const isAgeAllowed = require("../../function/isAgeAllowed");
const getStudentID = require("../../function/getStudentID");

module.exports = async (req, res) => {
  const {name, gender, birth, address, email} = req.body;
  if (!name || !gender || !birth || !address || !email) {
    return res.status(400).send("Missing required attributes.");
  }
  if (!(await isAgeAllowed(birth)))
    res.status(409).send("Older/lower age allowed");

  const studentID = await getStudentID();
  const classID = "";
  const student = new StudentModel({
    studentID,
    name,
    gender,
    birth,
    address,
    email,
    classID
  });
  const newStudent = await student.save();
  res.json(newStudent);
};
/* */
