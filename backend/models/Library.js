const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  class: { type: Number, required: true },
  fileUrl: { type: String, required: true },
});

module.exports = mongoose.model("Library", librarySchema);
