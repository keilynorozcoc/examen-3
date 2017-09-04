var Hotel = require('./hotel.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoHotel = new Hotel({
    nombre : req.body.nombre,
    coordenadas: req.body.coordenadas,
    lugar : req.body.lugar,
    direccion : req.body.direccion,
    telefono : req.body.telefono,
    correo : req.body.correo,
    imagen : req.body.imagen,
    evaluaciones: []
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
  Hotel.findOne(req.body).then(function(hoteles){
    res.send(hoteles);
  })
};

module.exports.update = function(req,res){
  Hotel.update({_id: req.body._id}, req.body).then(function(response){
    res.send(response);
  })
};











