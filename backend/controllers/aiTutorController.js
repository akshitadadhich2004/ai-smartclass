const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

const getAIResponse = async (req, res) => {
  try {
    const { query } = req.body;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: query,
      max_tokens: 200,
    });

    res.json({ response: response.data.choices[0].text.trim() });
  } catch (err) {
    console.error("AI Tutor error:", err);
    res.status(500).json({ error: "Failed to fetch AI response." });
  }
};

module.exports = { getAIResponse };
