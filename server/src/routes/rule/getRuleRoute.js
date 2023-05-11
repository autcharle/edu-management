const RuleModel = require('../../models/ruleModel');

module.exports = async (req, res) =>{
    const rule = await RuleModel.findById("6458926d3fe38e9a11b38ca3");
    res.json(rule);
}

