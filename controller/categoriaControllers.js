import Categoria from "../model/categoria.js";

class CategoriaController{

    static getAllCategorias = async (req, res) =>{
        const OBJCategoria = new Categoria(); 
        const categorias = await OBJCategoria.getAll(); 
        res.json(categorias);
    }

    // static createCategoria = async (req, res) =>{
    //     const {nombre, descripcion} = req.body; 
    //     console.log(nombre, descripcion);
        
    //     try {
    //         const OBJCategoria = new Categoria(nombre, descripcion); 
    //         const categoria = await OBJCategoria.create(nombre,descripcion); 
    //         res.status(201).json(categoria)
    //     } catch (error) {
    //         res.status(500).json({ error: error.message });
    //     }
    // }
    static createCategoria = async(req,res) => {
      try {
        const { nombre, descripcion } = req.body;
        const OBJCategoria = new Categoria();
        const categoria = await OBJCategoria.create(nombre, descripcion);
        res.status(201).json(categoria)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    static actualizarCategoria =async (req, res) => {

      const { id } = req.params;
      const { nombre, descripcion } = req.body;

      try {
        const OBJCategoria = new Categoria();
      const categoria=await  OBJCategoria.update(id,nombre,descripcion);
        res.json(categoria);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    static actualizarParcialCategoria = async (req, res) => {
      const { id } = req.params;
      const campos = req.body;
      try {
        const OBJCategoria = new Categoria();
        const categoria = await OBJCategoria.updateParcial(campos,id);
        res.status(201).json(categoria)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    static eliminarCategoria = async (req, res) => {
      try {
        const { id } = req.params;
        const OBJCategoria = new Categoria();
        const categoria = await OBJCategoria.delete(id);
        res.status(201).json(categoria)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}


export default CategoriaController;