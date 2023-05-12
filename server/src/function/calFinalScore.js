const StudentModel = require('../models/studentModel');
const ScoreModel = require('../models/scoreModel');
const RuleModel = require('../models/ruleModel');

module.exports = async () => {
    const rule = await RuleModel.findById("6458926d3fe38e9a11b38ca3");
    const totalSubject = rule.subjectCount;

    const score = await ScoreModel.aggregate([
        {
            $group:{
            _id: { studentID: "$studentID", Semester:"$Semester" },
            temp: { $sum: "$FinalScore" },
            }
        },
        {
            $project: {
              _id: 0,
              studentID: "$_id.studentID",
              semester: "$_id.Semester",
              average: {$divide: ["$temp", totalSubject] }
            }
        },
        {
            $lookup: {
              from: 'students',
              localField: 'studentID',
              foreignField: 'studentID',
              as: 'studentDetail'
            }
        },
        {
            $project: {
                studentID: 1,
                semester: 1,
                average: 1,
                name: { $arrayElemAt: ['$studentDetail.name', 0] },
                classID: { $arrayElemAt: ['$studentDetail.classID', 0] },
            }
        }
        ])
        const groupedData = Object.values(score.reduce((acc, { studentID, semester, average, name, classID }) => {
            if (!acc[studentID]) {
              acc[studentID] = {
                studentID,
                name,
                classID,
                firstSemester: 0,
                secondSemester: 0
              };
            }
          
            if (semester === 1) {
              acc[studentID].firstSemester = average;
            } else {
              acc[studentID].secondSemester = average;
            }
          
            return acc;
          }, {}));
          
        const result = groupedData.map(({ studentID, name, classID, firstSemester, secondSemester }) => ({
            studentID,
            name,
            classID,
            firstSemester,
            secondSemester,
            FinalScore: (firstSemester + secondSemester) / 2
          }));
        
        return result;

}
  
  