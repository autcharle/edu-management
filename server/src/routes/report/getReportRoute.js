const ScoreModel = require("../../models/scoreModel");
const callSubjectFinalScore = require("../../function/callSubjectFinalScore");
const calFinalScore = require("../../function/calFinalScore");

module.exports = async (req, res) => {
  const { subjectID, semester } = req.body;
  var score = [];
  if (!subjectID) {
    score = await calFinalScore();
  } else {
    score = await callSubjectFinalScore(subjectID);
  }
  const report = [];
  // group by classID
  const groupedByClassID = score.reduce((acc, curr) => {
    acc[curr.classID] = acc[curr.classID] || [];
    acc[curr.classID].push(curr);
    return acc;
  }, {});

  // loop through each group of data with same classID
  for (const classID in groupedByClassID) {
    const students = groupedByClassID[classID];
    const studentCount = students.length;
    let studentPass = 0;

    // loop through each student in the group
    for (const student of students) {
      // get the score based on the semester
      let score = 0;
      if (semester === 1) {
        score = student.firstSemester;
      } else if (semester === 2) {
        score = student.secondSemester;
      } else {
        score = student.FinalScore;
      }

      // check if the student has passed
      if (score >= 5) {
        studentPass++;
      }
    }

    // calculate the percentage of students who have passed
    const percentage = (studentPass / studentCount) * 100;

    // add the report data to the array
    report.push({
      classID,
      studentCount,
      studentPass,
      percentage: `${percentage.toFixed(2)}%`,
    });
  }
  res.json(report);
};
