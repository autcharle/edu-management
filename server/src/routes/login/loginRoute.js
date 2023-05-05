const jwt = require('jsonwebtoken');
const LogInModel = require('../../models/logInModel');

module.exports = async (req, res) =>{
    const login = await LogInModel.find(req.body);
    if (req.body.username == login[0].username && req.body.password == login[0].password) {
        const username = req.body.username;
        const token = jwt.sign({
            un: login[0].username,
            pw: login[0].password,
            }, process.env.SECRET);
            res.json({
            username,
            token,
        });
    } else {
        res.status(401).send('Wrong password');
    }
}