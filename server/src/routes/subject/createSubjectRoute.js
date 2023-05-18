const SubjectModel = require("../../models/subjectModel");
const RuleModel = require("../../models/ruleModel");

module.exports = async (req, res) => {
  const { subjectID, subjectName } = req.body;
  if (!subjectID || !subjectName)
    return res.status(400).send("Missing required attributes.");
  const Subject = new SubjectModel({
    subjectID,
    subjectName,
  });
  const newSubject = await Subject.save();

  const rule = await RuleModel.findById("6458926d3fe38e9a11b38ca3");
  rule.subjectCount = await SubjectModel.countDocuments();
  await rule.save();

  res.json(newSubject);
};
