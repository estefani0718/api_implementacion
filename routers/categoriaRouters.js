import express from "express";
import CategoriaController from "../controller/categoriaControllers.js";
import { validarCategoria } from "../middlewars/validadarCategoria.js";

const router = express.Router();

router.get('/', CategoriaController.getAllCategorias);

router.post('/', validarCategoria, CategoriaController.createCategoria);

router.put('/:id', CategoriaController.actualizarParcialCategoria );

// router.put('/:id', (req, res)=> {
//     console.log(req.body);    
// })

export default router;