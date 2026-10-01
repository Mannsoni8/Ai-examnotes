import config from "../config/config.js";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/interactions";

export const generateGeminiResponse = async (prompt) => {
  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": config.GEMINI_API_KEY,
      },

      body: JSON.stringify({
        model: "gemini-3.8-flash",
        input: prompt,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("Gemini API Error:", error);

      throw new Error(error);
    }

    const data = await response.json();

    console.log("Gemini Response:", data);

    const text = data.steps
      ?.find((step) => step.type === "model_output")
      ?.content
      ?.find((content) => content.type === "text")
      ?.text;

    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini Fetch Error:", error.message);

    throw new Error("Gemini API fetch failed");
  }
};