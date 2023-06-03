const StudentModel = require("../../models/studentModel");
const isAgeAllowed = require("../../function/isAgeAllowed");
const getStudentID = require("../../function/getStudentID");

module.exports = async (req, res) => {
  const { name, gender, birth, address, email } = req.body;
  if (!name || !gender || !birth || !address || !email) {
    return res.status(400).send("Vui lòng nhập đầy đủ các trường bắt buộc");
  }
  if (!(await isAgeAllowed(birth)))
    return res.status(409).send("Độ tuổi lớn hoặc nhỏ hơn quy định");

  const studentID = await getStudentID();
  const classID = "";
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
};
