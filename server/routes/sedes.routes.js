import {Router} from "express";
import {getSede, getSedes, registerSede, deleteSede} from "../controllers/sedes.controllers.js";

const router = Router();

router.get("/sedes", getSedes);
router.get("/sede/:id", getSede);
router.post("/sede", registerSede);
router.delete("/sede/:id", deleteSede);

export default router;