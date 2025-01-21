import React, { useState } from "react";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const fetchQuizQuestions = async () => {
    const response = await fetch("http://localhost:5000/api/quizzes/start");
    const data = await response.json();
    setQuestions(data.questions);
  };

  const handleAnswerSubmit = async () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setScore(isCorrect ? score + 1 : score);

    // Move to the next question
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-brown-200 to-brown-100 min-h-screen p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-brown-800">Quizzes</h1>
        {!questions.length && (
          <button
            className="mt-8 bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600"
            onClick={fetchQuizQuestions}
          >
            Start Quiz
          </button>
        )}
        {questions.length > 0 && !quizCompleted && (
          <div className="mt-8">
            <h2 className="text-2xl text-brown-700">{questions[currentQuestionIndex].question}</h2>
            <div className="mt-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(option)}
                  className={`block w-full p-2 rounded ${
                    selectedAnswer === option ? "bg-brown-400 text-white" : "bg-brown-100"
                  } hover:bg-brown-300`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleAnswerSubmit}
              disabled={!selectedAnswer}
              className="mt-4 bg-brown-500 text-white px-4 py-2 rounded hover:bg-brown-600"
            >
              Submit Answer
            </button>
          </div>
        )}
        {quizCompleted && (
          <div>
            <h2 className="text-2xl font-bold text-brown-700">Quiz Completed!</h2>
            <p className="text-brown-600">Your Score: {score} / {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
