import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT is not defined in environment variable");
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variable");
}

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variable");
}

if (!process.env.CLIEN_URL) {
  throw new Error("CLIEN_URL is not defined in environment variable");
}

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    "CLIEGEMINI_API_KEYN_URL is not defined in environment variable",
  );
}

const config = {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  CLIEN_URL: process.env.CLIEN_URL,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
};

export default config;
