var Usuario = require('./usuario.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoUsuario = new Usuario({
    codigo : req.body.codigo,
    nombre : req.body.nombre,
    alias : req.body.alias,
    cantDinero : req.body.cantDinero,
    foto : req.body.foto,
    archivo: req.body.archivo
  });

  nuevoUsuario.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el usuario:' + err});
    }else{
      res.json({success:true, msg:'Se registró el jugador correctamente'});
    }
  });
}
module.exports.findAll = function(req,res){
  Usuario.find().then(function(usuarios){
    res.send(usuarios);
  })
};

module.exports.findOne = function(req,res){
  Usuario.find().then(function(usuarios){
    res.send(usuarios);
  })
};
