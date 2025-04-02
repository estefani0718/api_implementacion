import Categoria from "../Models/Categoria.js";

class CategoriaController{

    static getAllCategorias = async (req, res) =>{
        const OBJCategoria = new Categoria(); 
        const categorias = await OBJCategoria.getAll(); 
        res.json(categorias);
    }

    static createCategoria = async (req, res) =>{
        const {nombre, descripcion} = req.body; 
        console.log(nombre, descripcion);
        
        try {
            const OBJCategoria = new Categoria(nombre, descripcion); 
            const categoria = await OBJCategoria.create(); 
            res.status(201).json(categoria)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
  }
  static actualizarCategoria =async (req, res) => {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    try {
      const OBJCategoria = new Categoria(nombre, descripcion);
      OBJCategoria.update(id);
      res.json(categoria);
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
  }
  static actualizarParcialCategoria = (req, res) => {
  
  }

}


export default CategoriaController;