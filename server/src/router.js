const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const isAdmin = require('./middleware/isAdmin');
const router = express.Router();

// log in
router.post('/login', require('./routes/login/logInRoute'));
router.get('/gradelist', isLoggedIn, require('./routes/gradeList/gradeList'));
router.post('/createaccount', isLoggedIn, isAdmin, require('./routes/login/createLogInRoute'));

module.exports = router;