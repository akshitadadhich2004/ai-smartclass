const express = require("express");
const { startQuiz } = require("../controllers/quizController");

const router = express.Router();

router.get("/start", startQuiz);

module.exports = router;
