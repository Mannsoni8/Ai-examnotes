import config from "../config/config.js";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview:generateContent";

export const generateGeminiResponse = async (promt) => {
  try {
    const responce = await fetch(`${GEMINI_URL}?key=${config.GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promt,
              },
            ],
          },
        ],
      }),
    });

    if (!responce.ok) {
      const err = await responce.text();
      throw new Error(err);
    }

    const data = await responce.json();

    const text = data.candidate?.[0]?.content?.[0]?.text;

    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const cleanText = text.replace(/```json/g, "".replace(/```/g, "").trim());

    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini Fetch Error", error.message);
    throw new Error("Gemini API fetch failed");
  }
};
//fgh