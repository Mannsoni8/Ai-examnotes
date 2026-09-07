import express from "express";
import cookieParser from "cookie-parser";
import router from "../routes/auth.route.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    origin:
))

app.get("/", (res, req) => {
  res.send("backend is running");
});

app.use("/api/auth", router);

export default app;
