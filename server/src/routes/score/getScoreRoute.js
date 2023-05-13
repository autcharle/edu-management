const ScoreModel = require('../../models/scoreModel');

module.exports = async (req, res) =>{
    const score = await ScoreModel.find(req.body);
    //const student1 = student.filter((student) => student.gender === 'Nữ');
    res.json(score);

}

