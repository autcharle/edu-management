const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');

const router = express.Router();

// log in
router.post('/login', require('./routes/login/loginRoute'));
router.get('/gradelist', isLoggedIn, require('./routes/gradeList/gradeList'));
router.post('/gradelist', isLoggedIn, require('./routes/login/createLogInRoute'));

module.exports = router;