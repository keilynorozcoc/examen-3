var Hotel = require('./hotel.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoHotel = new Hotel({
    nombre : req.body.nombre,
    coordenadas: req.body.coordenadas,
    provincia : req.body.provincia,
    canton : req.body.canton,
    distrito: req.body.distrito,
    direccion : req.body.direccion,
    telefono : req.body.telefono,
    correo : req.body.correo
  });

  nuevoHotel.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el hotel:' + err});
    }else{
      res.json({success:true, msg:'Se registró el hotel correctamente'});
    }
  });
}
module.exports.findAll = function(req,res){
  Hotel.find().then(function(hoteles){
    res.send(hoteles);
  })
};

module.exports.findOne = function(req,res){
  Hotel.find().then(function(hoteles){
    res.send(hoteles);
  })
};


