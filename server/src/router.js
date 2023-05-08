const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const isAdmin = require('./middleware/isAdmin');
const router = express.Router();

// Screen 1: log in
router.post('/login', require('./routes/login/logInRoute'));
// Screen 2,3: navigate page
// Screen 4:

// Screen 5: class attendants list
router.get('/get-class-id', isLoggedIn, require('./routes/classList/getClassIDRoute'));
router.get('/get-class-attendant', isLoggedIn, require('./routes/classList/getClassAttendant'));

// Screen 6:

// Screen 7: student list
router.get('/get-student', isLoggedIn, require('./routes/studentList/getStudentRoute'));
//screen 8: get rules
router.get('/get-rule', isLoggedIn, require('./routes/ruleList/getRuleRoute'));
// Screen 9: add student
router.post('/create-student', isLoggedIn, isAdmin, require('./routes/studentList/createStudentRoute'));
// Screen 10: update rule
router.put('/update-rule', isLoggedIn, isAdmin, require('./routes/ruleList/updateRuleRoute'));


//other/ not specify/in develop
router.post('/create-account', isLoggedIn, isAdmin, require('./routes/login/createLogInRoute'));
router.get('/gradelist', isLoggedIn, require('./routes/gradeList/gradeList'));
router.post('/create-class', isLoggedIn, isAdmin, require('./routes/classList/createClass'));

module.exports = router;

