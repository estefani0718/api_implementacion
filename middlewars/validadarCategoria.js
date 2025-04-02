export const validarCategoria = (req, res) => {

  const {nombre,descripcion } = req.body;
  if (nombre.trim()=="" || !nombre) {
    return res.status(400).json({mensage: "el  nombre en la catgoria es obligatorio"});
  }
  if (descripcion.trim()=="" || !descripcion) {
    return res.status(400).json({mensaje: "el descripcion  en la categoria es obligatorio"});
  }
 
  next();
}