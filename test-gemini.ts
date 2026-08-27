import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

console.log("GEMINI_API_KEY present:", !!process.env.GEMINI_API_KEY);

async function test() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("No Gemini API key found!");
    return;
  }
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: "Respond with the word 'SUCCESS' if you can read this.",
    });
    console.log("Response:", response.text);
  } catch (err) {
    console.error("Error testing Gemini:", err);
  }
}

test();
