const RuleModel = require('../../models/ruleModel');

module.exports = async (req, res) => {
  const {maxAge, minAge,maxClassAttendant,stdScore} = req.body;
  const rule = await RuleModel.findById("6458926d3fe38e9a11b38ca3");
  rule.maxAge = maxAge ?? rule.maxAge;
  rule.minAge = minAge ?? rule.minAge;
  rule.maxClassAttendant = maxClassAttendant ?? rule.maxClassAttendant;
  rule.stdScore = stdScore ?? rule.stdScore;
  await rule.save();
  res.json(rule);
};

