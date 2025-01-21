const Quiz = require("../models/Quiz");

const startQuiz = async (req, res) => {
  try {
    // Fetch questions dynamically (can be filtered by class/subject)
    const questions = await Quiz.aggregate([{ $sample: { size: 10 } }]);
    res.json({ questions });
  } catch (err) {
    console.error("Error fetching quiz questions:", err);
    res.status(500).json({ error: "Unable to fetch quiz questions." });
  }
};

module.exports = { startQuiz };
