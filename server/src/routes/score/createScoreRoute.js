const ScoreModel = require("../../models/scoreModel");
const calSubjectScore = require("../../function/calComponentScore");
const StudentModel = require("../../models/studentModel");

module.exports = async (req, res) => {
  var { studentID, Semester, subjectID, HS1, HS2, HS3 } = req.body;
  if (!studentID || !Semester || !subjectID)
    return res.status(400).send("Missing required attributes.");

  // Kiểm tra sự tồn tại của studentID trong StudentModel
  const existingStudent = await StudentModel.findOne({ studentID });
  if (!existingStudent) return res.status(404).send("Student not found.");

  // Kiểm tra classID trong StudentModel
  if (existingStudent.classID === "") {
    // Thông báo học sinh cần được đưa thêm vào lớp học
    return res.status(400).send("Student needs to be assigned to a class.");
  }

  // Kiểm tra và tạo mới hoặc cập nhật bản ghi trên ScoreModel
  const existingScore = await ScoreModel.findOne({
    studentID,
    Semester,
    subjectID,
  });

  if (existingScore) {
    if (HS1 !== "" && parseFloat(HS1) >= 0 && parseFloat(HS1) <= 10)
      existingScore.HS1 = parseFloat(HS1);
    if (HS2 !== "" && parseFloat(HS2) >= 0 && parseFloat(HS2) <= 10)
      existingScore.HS2 = parseFloat(HS2);
    if (HS3 !== "" && parseFloat(HS3) >= 0 && parseFloat(HS3) <= 10)
      existingScore.HS3 = parseFloat(HS3);
    existingScore.FinalScore = await calSubjectScore(
      existingScore.HS1,
      existingScore.HS2,
      existingScore.HS3
    );
    await existingScore.save();
    res.json(existingScore);
  } else {
    HS1 = parseFloat(HS1) ?? 0;
    HS2 = parseFloat(HS2) ?? 0;
    HS3 = parseFloat(HS3) ?? 0;

    if (
      HS1 >= 0 &&
      HS1 <= 10 &&
      HS2 >= 0 &&
      HS2 <= 10 &&
      HS3 >= 0 &&
      HS3 <= 10
    ) {
      const FinalScore = await calSubjectScore(HS1, HS2, HS3);
      const Score = new ScoreModel({
        studentID,
        subjectID,
        Semester,
        HS1,
        HS2,
        HS3,
        FinalScore,
      });
      const newScore = await Score.save();
      res.json(newScore);
    } else {
      return res.status(400).send("Invalid score values.");
    }
  }
};
