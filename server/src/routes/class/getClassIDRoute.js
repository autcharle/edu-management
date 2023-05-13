const ClassModel = require('../../models/classModel');

module.exports = async (req, res) =>{
    const classID = await ClassModel.find();
    res.json(classID);
}

