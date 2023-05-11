const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const isAdmin = require('./middleware/isAdmin');
const isTeacher = require('./middleware/isTeacher');
const router = express.Router();

// Screen 1: log in
router.post('/login', require('./routes/login/logInRoute'));
// Screen 2,3: navigate page
// Screen 4:

// Screen 5: class attendants list
router.get('/get-class-id', isLoggedIn, require('./routes/class/getClassIDRoute'));
router.get('/get-class-attendant', isLoggedIn, require('./routes/class/getClassAttendantRoute'));

// Screen 6:

// Screen 7: student list
router.get('/get-student', isLoggedIn, require('./routes/student/getStudentRoute'));
//screen 8: get rules
router.get('/get-rule', isLoggedIn, require('./routes/rule/getRuleRoute'));


// developing
// Screen 9: add student
router.post('/create-student',isAdmin, require('./routes/student/createStudentRoute'));
// Screen 10: update rule
router.put('/update-rule', isAdmin, require('./routes/rule/updateRuleRoute'));


//other/ not specify/in develop
router.post('/create-account',isAdmin, require('./routes/login/createLogInRoute'));
//router.get('/gradelist', isLoggedIn, require('./routes/score/scoreListRoute'));
router.post('/create-class',isAdmin, require('./routes/class/createClassRoute'));
router.post('/create-subject',isAdmin, require('./routes/subject/createSubjectRoute'));
router.get('/get-subject', isLoggedIn, require('./routes/subject/getSubjectRoute'));
router.post('/create-score',isTeacher, require('./routes/score/createScoreRoute'));
router.get('/get-score',isLoggedIn, require('./routes/score/getScoreRoute'));

module.exports = router;

