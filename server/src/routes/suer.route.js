import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getUserController } from "../controllers/user.controller.js";

const useRouter = Router();

useRouter.get("/curr-user", authMiddleware, getUserController);

export default useRouter;
