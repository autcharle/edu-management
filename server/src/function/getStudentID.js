const StudentModel = require("../models/studentModel");

module.exports = async () => {
  const lastestStudent = await StudentModel.find().sort({studentID:-1}).limit(1);
  if(lastestStudent.length === 0) return "HS0001";
  const lastestID = lastestStudent[0].studentID;
  const numericPart = parseInt(lastestID.substring(2), 10);
  // Increment the numeric value
  const incrementedValue = numericPart + 1;
  // Reassemble the string with the incremented numeric value
  const ID = `HS${String(incrementedValue).padStart(4, '0')}`;

  return ID;
};
