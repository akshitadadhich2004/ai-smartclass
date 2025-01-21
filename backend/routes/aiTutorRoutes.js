const express = require("express");
const { getAIResponse } = require("../controllers/aiTutorController");

const router = express.Router();

router.post("/query", getAIResponse);

module.exports = router;
