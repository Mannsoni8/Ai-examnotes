import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { generateNotes } from "../controllers/generate.controller.js";


const notesRouter = Router();

notesRouter.post("/generate-notes",authMiddleware,generateNotes);

export default notesRouter;
