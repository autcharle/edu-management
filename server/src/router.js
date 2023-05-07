const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const isAdmin = require('./middleware/isAdmin');
const router = express.Router();

// Screen 1: log in
router.post('/login', require('./routes/login/logInRoute'));
router.post('/createaccount', isLoggedIn, isAdmin, require('./routes/login/createLogInRoute'));

// Screen 7: student-list
router.get('/get-student', isLoggedIn, require('./routes/studentList/getStudentRoute'));
router.post('/create-student', isLoggedIn, isAdmin, require('./routes/studentList/createStudentRoute'));

//other/ not specify/in developing
router.get('/gradelist', isLoggedIn, require('./routes/gradeList/gradeList'));

module.exports = router;

