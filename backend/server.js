// Import required modules
const express = require('express'); // Express framework
const dotenv = require('dotenv'); // Environment variable management
const cors = require('cors'); // Enable CORS for cross-origin requests
const bodyParser = require('body-parser'); // Parse incoming request bodies

// Initialize dotenv to load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Port setup (use dynamic port or default to 5000)
const PORT = process.env.PORT || 5000;

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the AI Smart Class Backend!');
});

// Example route for fetching quiz data (modify this to match your needs)
app.get('/api/quiz', (req, res) => {
  // Example data: Replace this with dynamic data from your database in the future
  const quizzes = [
    {
      id: 1,
      subject: 'Mathematics',
      grade: 'Class 5',
      questions: [
        { question: 'What is 5 + 3?', options: ['5', '8', '10'], answer: '8' },
        { question: 'What is 10 - 4?', options: ['3', '6', '8'], answer: '6' },
      ],
    },
    {
      id: 2,
      subject: 'Science',
      grade: 'Class 6',
      questions: [
        { question: 'What is the boiling point of water?', options: ['50°C', '100°C', '150°C'], answer: '100°C' },
      ],
    },
  ];

  res.json(quizzes);
});

// Example route for digital book access (modify as needed)
app.get('/api/books', (req, res) => {
  // Example data: Replace this with dynamic data from your database
  const books = [
    { id: 1, title: 'Mathematics for Class 5', url: '/books/math-class5.pdf' },
    { id: 2, title: 'Science for Class 6', url: '/books/science-class6.pdf' },
  ];

  res.json(books);
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

