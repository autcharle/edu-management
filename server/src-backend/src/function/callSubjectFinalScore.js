const ScoreModel = require("../models/scoreModel");

module.exports = async (subjectID) => {
  const score = await ScoreModel.aggregate([
    {
      $match: {
        subjectID: subjectID,
      },
    },
    {
      $lookup: {
        from: "students",
        localField: "studentID",
        foreignField: "studentID",
        as: "studentDetail",
      },
    },
    {
      $project: {
        studentID: 1,
        FinalScore: 1,
        Semester: 1,
        subjectID: 1,
        classID: { $arrayElemAt: ["$studentDetail.classID", 0] },
      },
    },
  ]);
  const result = Object.values(
    score.reduce(
      (acc, { studentID, classID, Semester, FinalScore, subjectID }) => {
        if (!acc[studentID]) {
          acc[studentID] = {
            studentID,
            classID,
            subjectID,
            firstSemester: 0,
            secondSemester: 0,
            FinalScore: 0,
          };
        }
        if (Semester === 1) {
          acc[studentID].firstSemester = FinalScore;
        } else if (Semester === 2) {
          acc[studentID].secondSemester = FinalScore;
        }
        acc[studentID].FinalScore =
          (acc[studentID].firstSemester + 2 * acc[studentID].secondSemester) /
          3;
        return acc;
      },
      {}
    )
  );
  return result;
};
