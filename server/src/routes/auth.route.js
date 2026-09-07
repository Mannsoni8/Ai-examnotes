import { Router } from "express";
import { googleAuthController, logout } from "../controllers/auth.controller.JS";

const router = Router();

router.post("/google", googleAuthController);
router.get("/logout", logout);

export default router;
