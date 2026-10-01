import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getUserController } from "../controllers/user.controller.js";

const useRouter = Router();

useRouter.get("/currentuser", authMiddleware, getUserController);

export default useRouter;
