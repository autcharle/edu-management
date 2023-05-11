const StudentModel = require('../../models/studentModel');

module.exports = async (req, res) =>{
    const student = await StudentModel.find(req.body);
    //const student1 = student.filter((student) => student.gender === 'Nữ');
    res.json(student);

}