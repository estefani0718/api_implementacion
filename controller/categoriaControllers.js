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
  //  static actualizarParcialCategoria = async(id,nombre,descripcion,campos) => {
  //   // const campos = req.body;
  //   // console.log(Object.keys(campos).length);
  //   // sql = "UPDATE  categorias Set ";
  //   // for (let h = 0; h < Object.keys(campos).length;h++) {
  //   //   let value = Object.keys(campos)[h];
  //   //   sql += `set ${value} = ${campos[h]}`;
  //   //   if (h === Object.keys(campos).length - 1) { sql += ""; }
  //   //   else { sql += ","; }// se puede con operador ternario , se optimiza el codigo 
      
  //   // }
  //   // sql += ` Where id=${id}`;
  //   // console.log(sql);
  //   try {
  //     let sql = "UPDATE categorias SET ";
  //     for (let cont = 0; cont < Object.keys(campos).length; cont++)
  //     {
  //         let value = Object.keys(campos)[cont];
  //         sql += `${value} = '${campos[value]}'`;
  //         cont == Object.keys(campos).length-1 ? sql += "" : sql += ",";
  //     }
  //     sql += ` WHERE id= ${id}`;
  //     const [result] = await connection.query(sql);
  //     if(result.affectedRows === 0){
  //         throw new Error("Categoría no encontrada"); 
  //     }
  //     return { id,nombre,descripcion} 

  //   } catch (error) {
  //         console.log(error.message);
  //         throw new Error("Error al generar el patch");
  //   }
  // } 
    
  
 

}


export default CategoriaController;