import express from "express";
import CategoriaController from "../controller/categoriaControllers.js";
import { validarCategoria } from "../middlewars/validadarCategoria.js";

const router = express.Router();

router.get('/', CategoriaController.getAllCategorias);

router.post('/', validarCategoria, CategoriaController.createCategoria);



export default router;