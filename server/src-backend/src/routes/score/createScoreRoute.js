const ScoreModel = require("../../models/scoreModel");
const calSubjectScore = require("../../function/calComponentScore");

module.exports = async (req, res) => {
  var { studentID, Semester, subjectID, HS1, HS2, HS3 } = req.body;
  if (!studentID || !Semester || !subjectID)
    return res.status(400).send("Missing required attributes.");
  HS1 = HS1 ?? 0;
  HS2 = HS2 ?? 0;
  HS3 = HS3 ?? 0;
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
};
/* */
