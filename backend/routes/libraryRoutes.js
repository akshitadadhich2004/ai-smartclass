const express = require("express");
const { fetchLibraryResources } = require("../controllers/libraryController");

const router = express.Router();

router.get("/", fetchLibraryResources);

module.exports = router;
