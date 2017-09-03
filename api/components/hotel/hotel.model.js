//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de patrocinador
var HotelSchema = new mongoose.Schema({

  nombre : {type: String, required: false},
  provincia : {type: String, required: false},
  canton : {type: String, required: false},
  distrito :{type: String, required: false},
  direccion :{type: String, required: false},
  coordenadas :{
    lat:String,
    lng:String
  },
  telefono : {    
    reservaciones : String,
    servicioCliente: String
  },
  correo : {
  	reservaciones :{type: String, required: false},
    servicioCliente: String
  }

});

module.exports = mongoose.model('hoteles', HotelSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
