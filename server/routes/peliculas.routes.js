import {Router} from "express";
import {getPelicula,getPeliculas, registerPelicula, deletePelicula} from "../controllers/peliculas.controllers.js";


const router = Router();

router.get("/peliculas", getPeliculas);

router.get("/pelicula/:id", getPelicula);

router.post("/pelicula", registerPelicula);

router.delete("/pelicula/:id", deletePelicula);

export default router;