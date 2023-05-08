const ClassModel = require('../../models/classModel');

module.exports = async (req, res) => {
    const {classID} = req.body;
    console.log(classID);
    const newClass = new ClassModel({
        classID
    })
    const newStudent1 = await newClass.save();
    res.json(newStudent1);
};
/* */

