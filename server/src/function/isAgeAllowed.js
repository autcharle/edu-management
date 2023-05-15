const RuleModel = require("../models/ruleModel");

module.exports = async (dateString) => {
  const rule = await RuleModel.findById("6458926d3fe38e9a11b38ca3");
  const today = new Date();
  const birthDate = new Date(dateString);
  const age = today.getFullYear() - birthDate.getFullYear();

  if (age >= rule.minAge && age <= rule.maxAge) return true;
  else return false;
};
