const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { config } = require("dotenv");

// Load environment variables
config();

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

// Routes
app.use("/api/ai-tutor", require("./routes/aiTutorRoutes"));
app.use("/api/quizzes", require("./routes/quizRoutes"));
app.use("/api/library", require("./routes/libraryRoutes"));

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
