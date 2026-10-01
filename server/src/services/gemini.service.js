import config from "../config/config.js";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/interactions";

const MODELS = [
  "gemini-3.8-flash",
  "gemini-3.7-flash",
  "gemini-3.6-flash",
  "gemini-3.5-flash",
];

export const generateGeminiResponse = async (prompt) => {
  let lastError = null;

  for (const model of MODELS) {
    try {
      console.log(`Trying Gemini model: ${model}`);

      const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": config.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          model,
          input: prompt,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();

        console.error(`${model} Error:`, errorText);

        lastError = new Error(errorText);

        continue;
      }

      const data = await response.json();

      console.log(`Gemini model used: ${model}`);

      const text = data.steps
        ?.find((step) => step.type === "model_output")
        ?.content?.find((content) => content.type === "text")?.text;

      if (!text) {
        console.error("Gemini Response:", data);
        throw new Error("No text returned from Gemini");
      }

      const cleanText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(cleanText);
    } catch (error) {
      console.error(`${model} failed:`, error.message);

      lastError = error;
    }
  }

  throw new Error(
    `All Gemini models are currently unavailable. Last error: ${
      lastError?.message || "Unknown error"
    }`,
  );
};
