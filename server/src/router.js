const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");
const isAdmin = require("./middleware/isAdmin");
const isTeacher = require("./middleware/isTeacher");
const router = express.Router();

// Screen 1: log in
router.post("/login", require("./routes/login/loginRoute"));
// Screen 2,3: navigate page
// Screen 4: score list
router.get("/get-score",
  isLoggedIn,
  require("./routes/score/getScoreRoute"));
// Screen 5: class attendants list
router.get(
  "/get-class-attendant",
  isLoggedIn,
  require("./routes/class/getClassAttendantRoute")
);
// Screen 6: subject report
router.get(
  "/get-report",
  isLoggedIn,
  require("./routes/report/getReportRoute")
);
// Screen 7: student list
router.post(
  "/get-student",
  isLoggedIn,
  require("./routes/student/getStudentRoute")
);
//screen 8: get rules
router.get("/get-rule", isLoggedIn, require("./routes/rule/getRuleRoute"));
// Screen 9: add student
router.post(
  "/create-student",
  isAdmin,
  require("./routes/student/createStudentRoute")
);
// Screen 10: update rule
router.put("/update-rule", isAdmin, require("./routes/rule/updateRuleRoute"));

// developing

//other/ not specify/in develop
router.post(
  "/create-account",
  isAdmin,
  require("./routes/login/createLogInRoute")
);
router.post(
  "/create-class",
  isAdmin,
  require("./routes/class/createClassRoute")
);
router.post(
  "/create-subject",
  isAdmin,
  require("./routes/subject/createSubjectRoute")
);
router.get(
  "/get-subject",
  isLoggedIn,
  require("./routes/subject/getSubjectRoute")
);
router.post(
  "/create-score",
  isTeacher,
  require("./routes/score/createScoreRoute")
);
router.get(
  "/get-class-id",
  isLoggedIn,
  require("./routes/class/getClassIDRoute")
);

module.exports = router;
