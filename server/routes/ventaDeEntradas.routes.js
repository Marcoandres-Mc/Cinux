import { Router } from 'express';
import {createVentaDeEntrada, getVentasDeEntradas, getVentaDeEntradaById, updateVentaDeEntrada, deleteVentaDeEntrada} from '../controllers/ventaDeEntradas.controllers.js';

const router = Router();

router.post('/ventaDeEntrada', createVentaDeEntrada);
router.get('/ventaDeEntradas', getVentasDeEntradas);
router.get('/ventaDeEntrada/:id', getVentaDeEntradaById);
router.put('/ventaDeEntrada/:id', updateVentaDeEntrada);
router.delete('/ventaDeEntrada/:id', deleteVentaDeEntrada);

export default router;