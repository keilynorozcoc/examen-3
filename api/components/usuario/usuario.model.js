//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de patrocinador
var UsuarioSchema = new mongoose.Schema({
  nombre : {type: String, required: false},
  usuario : {type: String, required: false},
  correo: String,
  contrasenna: String,
  rol : String
});

module.exports = mongoose.model('usuarios', UsuarioSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
