import express from "express";
import * as dotenv from "dotenv";
import { OpenAI } from "openai";
dotenv.config();
const router = express.Router();
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey,
});
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the dalle Routes" });
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;
    // console.log(prompt);
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: 'b64_json'
    });
    console.log(response.data);
    const image = response.data[0]?.b64_json;
    res.status(200).json({ photo: image });
  } catch (err) {
    console.error(err);

    // Send a more informative error response
    res.status(500).json({
      error: "Internal Server Error",
      details: err.message || err.toString(),
    });
  }
});

export default router;
