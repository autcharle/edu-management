const jwt = require('jsonwebtoken');
const LogInModel = require('../../models/logInModel');

module.exports = async (req, res) =>{
    const login = await LogInModel.find();
    console.log(login[0]);
    if (req.body.username == login[0].username && req.body.password == login[0].password) {
        const username = req.body.username;
        const token = jwt.sign({
            userId: 1,
            }, process.env.SECRET);
            res.json({
            username,
            token,
        });
        console.log(token);
    } else {
        res.status(401).send('Wrong password');
    }
}