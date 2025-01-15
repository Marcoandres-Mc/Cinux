import { Router } from "express";
import {getUser, getUserEmail, postUser, deleteUser} from "../controllers/user.controllers.js";

const router = Router();

router.get("/usuarios",getUser);
router.get("/usuario/:email",getUserEmail);
router.post("/usuario",postUser);
router.delete("/usuario/:id",deleteUser);

export default router;