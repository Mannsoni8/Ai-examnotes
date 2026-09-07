import express from "express";
import cookieParser from "cookie-parser";
import router from "../routes/auth.route.js";
import cors from "cors";
import config from "../config/config.js";
import useRouter from "../routes/suer.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: config.CLIEN_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "OPTIONS"],
  }),
);

app.get("/", (res, req) => {
  res.send("backend is running");
});

app.use("/api/auth", router);
app.use("/api/auth", useRouter);

export default app;
