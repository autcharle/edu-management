const ScoreModel = require("../../models/scoreModel");

module.exports = async (req, res) => {
  const { classID, subjectID, Semester } = req.body;
  const score = await ScoreModel.aggregate([
    {
      $lookup: {
        from: "students",
        localField: "studentID",
        foreignField: "studentID",
        as: "studentDetail",
      },
    },
    {
      $addFields: {
        classID: { $arrayElemAt: ["$studentDetail.classID", 0] },
        name: { $arrayElemAt: ["$studentDetail.name", 0] }
      }
    },
    {
      $project: {
        studentDetail: 0
      }
    }
  ])
  var newScore = score;
  if(classID)
    newScore = score.filter((score) => score.classID === classID);
  if(subjectID)
    newScore = newScore.filter((score) => score.subjectID === subjectID);
  if(Semester)
    newScore = newScore.filter((score) => score.Semester === Semester);

  res.json(newScore);
};
