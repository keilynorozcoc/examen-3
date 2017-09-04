//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de patrocinador
var HotelSchema = new mongoose.Schema({
  nombre : {type: String, required: false},
  coordenadas :{
    lat:String,
    lng:String
  },
  lugar : {    
    provincia : String,
    canton: String,
    distrito: String
  },
  direccion :{type: String, required: false},
  telefono : {    
    reservaciones : String,
    servicioCliente: String
  },
  correo : {
  	reservaciones :{type: String, required: false},
    servicioCliente: String
  },
  imagen :{type: String, required: false}

});

module.exports = mongoose.model('hoteles', HotelSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
