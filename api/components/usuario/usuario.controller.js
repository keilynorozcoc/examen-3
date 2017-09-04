var Usuario = require('./usuario.model.js');
// var roles = []

module.exports.save = function(req, res){
  var nuevoUsuario = new Usuario({
    usuario : req.body.usuario,
    nombre : req.body.nombre,
    contrasenna : req.body.contrasenna,
    correo : req.body.correo,
    rol : req.body.rol
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
  Usuario.findOne(req.body).then(function(usuarios){
    res.send(usuarios);
  })
};
