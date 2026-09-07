import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";

const useRouter = Router();

useRouter.get("/curr-user", authMiddleware);

export default useRouter;
