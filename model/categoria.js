import connection from "../utils/db.js";
//  clase categoria el padre de todo 
class Categoria{
    // constructor(nombre, descripcion){
    //     this.nombre = nombre;
    //     this.descripcion = descripcion;
    // }
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de las categorias en un arreglo
     */
    // metodos crud 
    async getAll(){
        try {
            const [rows] = await connection.query("SELECT * FROM categorias");
            return rows;    
        } catch (error) {
            throw new Error("Error al obtener las categorías");
        }        
    }

    async create(nombre,descripcion) {
        try {            
            const [result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [nombre, descripcion]);
        return {
            id: result.id,
            nombre: nombre,
            descripcion: descripcion
        };
        } catch (error) {
          throw new Error("Error al crear la categoría");  
        }
  }
    async update(nombre,descripcion,id) {
        try {
          // console.log("desde la clase ", nombre, descripcion, id);
          const [result] = await connection.query(`UPDATE categorias SET nombre = ? ,descripcion = ? WHERE id = ?`,[nombre, descripcion, id]);
          if (result.affectedRows === 0) {
              throw new Error("categoria no encontrada");
          }
          return {id,nombre,descripcion}
        } catch (error) {
          console.log(error.message);
          throw new Error("Error al crear la categoria"); 
        }
    }
    async updateParcial(campos,id) {
      try {
        let sql = "UPDATE categorias SET ";
        for (let cont = 0; cont < Object.keys(campos).length; cont++) {
          let value = Object.keys(campos)[cont];
          sql += `${value} = '${campos[value]}'`;
          if (cont == Object.keys(campos).length - 1) {
            sql += "";
          }
          else {
            sql += ",";
          }
        }
        sql += ` WHERE id = ${id}`;
        const [result] = await connection.query(sql);
        if (result.affectedRows === 0) { throw new Error("Categoria no encontrada"); }
        return { mensaje: "Categoria Actualizada" }
      } catch (error) {
        throw new Error("ERROR: Al Actualizar la categoria parcialmente");
      }
    }
    // metodo el cual esta relacionada con la otra tabla productos 
    async categoriaConProducto(categoria_id){
      const [productos]=await connection.query("SELECT  * FROM productos WHERE categoria_id=? ",[categoria_id]);
      return productos.length>0;// devuelve si verdadero o falso si hay o no productos relacionados 
    }
    async delete(id) {
      try {
        const comparar= this.categoriaConProducto(id);
        if(comparar){
          throw new Error("esta categoria no se puede eliminar por que esta relacionada con productos ");
        }

        const [result] = await connection.query("DELETE * FROM categorias WHERE id = ?",[id]);
        if (result.affectedRows === 0) {
          throw new Error("Categoria no encontrada");
        }
        return { mensaje: "Categoria fue eliminada " }
      } catch (error) {
        throw new Error("ERROR:  al eliminar la categoria");
      }
    }
}

export default Categoria;