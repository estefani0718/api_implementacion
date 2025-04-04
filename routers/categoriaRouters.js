import express from "express";
import CategoriaController from "../controller/categoriaControllers.js";
import { validarCategoria } from "../middlewars/validadarCategoria.js";

const router = express.Router();

// router.get('/', CategoriaController.getAllCategorias);

// router.post('/', validarCategoria, CategoriaController.createCategoria);

// router.put('/:id', CategoriaController.actualizarParcialCategoria );


router.get('/', CategoriaController.getAllCategorias);

router.post('/',validarCategoria, CategoriaController.createCategoria)

router.put('/:id', CategoriaController.actualizarCategoria);

router.patch('/:id', CategoriaController.actualizarParcialCategoria);

router.delete('/:id', CategoriaController.eliminarCategoria);



export default router;