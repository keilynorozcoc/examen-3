var express = require('express');
var router = express.Router();
var hotelController = require('./hotel.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/save_hotel')
  .post(function(req,res){
    hotelController.save(req,res);
  });

router.route('/get_all_hotel')
  .get(function(req,res){
    hotelController.findAll(req,res);
  });

router.route('/get_hotel')
  .put(function(req,res){
    hotelController.findOne(req,res);
  });

module.exports = router;
