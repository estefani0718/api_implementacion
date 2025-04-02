import connection from "../utils/db.js";

class Categoria{
    constructor(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de las categorias en un arreglo
     */
    async getAll(){
        try {
            const [rows] = await connection.query("SELECT * FROM categorias");
            return rows;    
        } catch (error) {
            throw new Error("Error al obtener las categorías");
        }        
    }

    async create() {
        try {            
            const [result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [this.nombre, this.descripcion]);
        return {
            id: result.id,
            nombre: this.nombre,
            descripcion: this.descripcion
        };
        } catch (error) {
          throw new Error("Error al crear la categoría");  
        }
  }
 async update(id) {
    try {
      console.log("desde la clase ", this.nombre, this.descripcion, id);
      const [result] = await connection.query(`UPDATE categorias set (nombre=? ,descripcion=?) WHERE id=?`,[this.nombre, this.descripcion, id]);
      if (result.affectedRows === 0) {
          throw new Error("categoria n encontrada");
      }
      return {id,nombre:this.nombre,descripcion:this.descripcion}
    } catch (error) {
      console.log(error.message);
       throw new Error("Error al crear la categpría"); 
    }
   
  }
}

export default Categoria;