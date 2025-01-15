import { Router } from "express";
import { login, logout, profile } from '../controllers/auth.controllers.js';

const router = Router();


router.post("/login", login);
router.post("/logout", logout);
router.post("/profile", profile);

export default router;