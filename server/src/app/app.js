import express from "express";
import cookieParser from "cookie-parser";
import router from "../routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (res, req) => {
  res.send("backend is running");
});

app.use("/api/auth", router);

export default app;
