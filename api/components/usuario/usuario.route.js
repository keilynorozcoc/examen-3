var express = require('express');
var router = express.Router();
var usuarioController = require('./usuario.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_usuario')
  .post(function(req,res){
    usuarioController.save(req,res);
  });

router.route('/get_all_usuario')
  .get(function(req,res){
    usuarioController.findAll(req,res);
  });

router.route('/get_usuario')
  .put(function(req,res){
    usuarioController.findOne(req,res);
  });

module.exports = router;
