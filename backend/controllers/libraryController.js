const Library = require("../models/Library");

const fetchLibraryResources = async (req, res) => {
  try {
    const { search } = req.query;

    const query = search
      ? { title: { $regex: search, $options: "i" } }
      : {};

    const resources = await Library.find(query);
    res.json({ resources });
  } catch (err) {
    console.error("Error fetching library resources:", err);
    res.status(500).json({ error: "Unable to fetch library resources." });
  }
};

module.exports = { fetchLibraryResources };
