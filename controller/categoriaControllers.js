import Categoria from "../model/categoria.js";

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
            const categoria = await OBJCategoria.create(nombre,descripcion); 
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
  static actualizarParcialCategoria = (req, res) => {
    const campos = req.body;
    console.log(Object.keys(campos).length);
    sql = "UPDATE  categorias Set ";
    for (let h = 0; h < Object.keys(campos).length;h++) {
      
      let value = Object.keys(campos)[h];
      sql += `set ${value} = ${campos[h]}`;
      if (h === Object.keys(campos).length - 1) { sql += ""; }
      else { sql += ","; }// se puede con operador ternario , se optimiza el codigo 
      
    }
    sql += ` Where id=${id}`;
    console.log(sql);
    
  }

}


export default CategoriaController;