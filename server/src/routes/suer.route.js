import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getUserController } from "../controllers/user.controller";

const useRouter = Router();

useRouter.get("/curr-user", authMiddleware, getUserController);

export default useRouter;
