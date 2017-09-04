(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('hotelController', hotelController);
    hotelController.$inject = ['$http','$stateParams','$location','hotelService','Upload','ImageService','lugaresService','SessionService','NgMap'];

    function hotelController($http,$stateParams,$location,hotelService,Upload,ImageService,lugaresService,SessionService,NgMap){




    if (SessionService.session() == null) {
      $location.path('/principal/login');


    }


    var vm = this;

    vm.session = SessionService.session();

    hotelService.getHotel({"_id":$stateParams.id}).then(function (response) {
      vm.hotel = response.data;
    });


    function init(){
      // hotelService.getHoteles().then(function (response) {
      //   vm.hoteles = response.data;
      // });      
    }

    init();

    vm.getStars = function(rating) {
      // Get the value
      var val = parseFloat(rating);
      // Turn value into number/100
      var size = val/5*100;
      return size + '%';
    }

    vm.modalCalicacion = function(){
      $("#advanced").modal('show');

    }

    vm.salvarCalificacion = function(){

    }

    //Limpiar form


   }
})();