import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/translate", async (req, res) => {
  try {
    const { text, targetLanguage } = req.body || {};
    if (!text || !trargetLanguage) {
      return res.status(400).json({ error: "Missing text or targetLanguage" });
    }

    const promt = `Translate the following text to ${targetLanguage}. ${text}`;

    const response = await openai.response.create({
      model: "gpt-4o-mini",
      input: prompt,
      temperature: 0,
      max_output_tokens: 400,
    });

    const translation = (response.output_text || "").trim();
    res.json({ translation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
