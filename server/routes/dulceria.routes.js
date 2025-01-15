import {Router} from "express";
import {getDulce, getDulces, registerDulce, deleteDulce} from "../controllers/dulceria.controllers.js";


const router = Router();

router.get('/dulces', getDulces);
router.get('/dulce/:id', getDulce);
router.post('/dulce', registerDulce);
router.delete('/dulce/:id', deleteDulce);

export default router;