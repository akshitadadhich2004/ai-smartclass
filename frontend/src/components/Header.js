import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-brown-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">AI SmartClass</Link>
        </h1>
        <nav>
          <Link to="/ai-tutor" className="mx-2">AI Tutor</Link>
          <Link to="/quizzes" className="mx-2">Quizzes</Link>
          <Link to="/library" className="mx-2">Library</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
