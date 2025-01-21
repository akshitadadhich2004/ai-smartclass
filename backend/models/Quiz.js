const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  difficulty: { type: String, required: true }, // e.g., easy, medium, hard
  subject: { type: String, required: true }, // e.g., Math, Science
  class: { type: Number, required: true }, // Class level
});

module.exports = mongoose.model("Quiz", quizSchema);
