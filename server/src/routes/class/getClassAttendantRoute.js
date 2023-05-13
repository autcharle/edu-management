const calFinalScore =  require('../../function/calFinalScore');

module.exports = async (req, res) =>{
    const result = await calFinalScore();
    if (typeof req.body.classID !== 'undefined')
        {
            const result1 = result.filter((result) => result.classID === req.body.classID);
            res.json(result1);
        }
    res.json(result);
}
