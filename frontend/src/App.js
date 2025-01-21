import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AITutorPage from "./pages/AITutorPage";
import QuizPage from "./pages/QuizPage";
import LibraryPage from "./pages/LibraryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-tutor" element={<AITutorPage />} />
        <Route path="/quizzes" element={<QuizPage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
