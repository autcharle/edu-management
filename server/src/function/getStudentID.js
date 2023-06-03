const StudentModel = require("../models/studentModel");

module.exports = async () => {
  const latestStudent = await StudentModel.find()
    .sort({ studentID: -1 })
    .limit(1);
  console.log(latestStudent);
  if (latestStudent.length === 0) return "HS0001";
  const latestID = latestStudent[0].studentID;
  const numericPart = parseInt(latestID.substring(2), 10);
  // Increment the numeric value
  const incrementedValue = numericPart + 1;
  // Reassemble the string with the incremented numeric value
  const ID = `HS${String(incrementedValue).padStart(4, "0")}`;

  return ID;
};
