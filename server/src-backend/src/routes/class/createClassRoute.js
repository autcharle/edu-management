const ClassModel = require("../../models/classModel");

module.exports = async (req, res) => {
  const { classID } = req.body;
  if (!classID) return res.status(400).send("Missing required attributes.");
  const newClass = new ClassModel({
    classID,
  });
  const newStudent1 = await newClass.save();
  res.json(newStudent1);
};
