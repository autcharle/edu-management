const jwt = require('jsonwebtoken');
const StudentModel = require('../../models/studentModel');

module.exports = async (req, res) =>{
    const student = await StudentModel.find(req.body);
    res.json(student);

}

