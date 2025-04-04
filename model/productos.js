import connection from "../utils/db.js";

class Productos{
    constructor(nombre, descripcion,precio,categoria_id){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio=precio;
        this.categoria_id=categoria_id;
    }
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de las categorias en un arreglo
     */
    async getAll(){
        try {
            const [rows] = await connection.query("SELECT * FROM productos");
            return rows;    
        } catch (error) {
            throw new Error("Error al obtener las categorías");
        }        
    }

    async create() {
        try {            
            const [result] = await connection.query("INSERT INTO productos (nombre, descripcion,precio,categoria_id) VALUES (?,?,?,?)", [this.nombre, this.descripcion,this.precio,this.categoria_id]);
        return {
            id: result.id,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio:this.precio,
            categoria_id:this.categoria_id
        };
        } catch (error) {
          throw new Error("Error al crear la categoría");  
        }
  }
 async update(nombre,descripcion,precio,categoria_id,id) {
    try {
      console.log("desde la clase ", nombre, descripcion, id);
      const [result] = await connection.query(`UPDATE categorias set (nombre=? ,descripcion=?,precio=?,categoria_id=?) WHERE id=?`,[this.nombre, this.descripcion, this.precio,this.categoria_id]);
      if (result.affectedRows === 0) {
          throw new Error("categoria n encontrada");
      }
      return {id,nombre,descripcion}
    } catch (error) {
      console.log(error.message);
       throw new Error("Error al crear la categpría"); 
    }
   
  }+
}

export default Categoria;