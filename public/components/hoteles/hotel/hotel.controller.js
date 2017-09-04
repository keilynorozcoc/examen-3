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

    function init(){
      hotelService.getHotel({"_id":$stateParams.id}).then(function (response) {
        vm.hotel = response.data;
      });   
    }

    init();

    vm.getStars = function(rating) {
      // Get the value
      var val = parseFloat(rating);
      // Turn value into number/100
      var size = val/5*100;
      return size + '%';
    }

    vm.modalCalificacion = function(){
      vm.calificacion = {};
      $("#advanced").modal('show');
    }



    vm.salvarCalificacion = function(){
      var calificacion = 0;
      var promedio = 0;

      angular.forEach( vm.calificacion, function (obj,index) {
        calificacion += Number(obj);
      });

      promedio = calificacion / 5;
      calificacion = 0;

      vm.hotel.evaluaciones.push({"promedio":promedio});       



      angular.forEach(vm.hotel.evaluaciones, function (evaluacion,index) {
       calificacion += Number(evaluacion.promedio);
      })

      vm.hotel.calificacion = (calificacion / vm.hotel.evaluaciones.length);


      vm.hotel.calificacion =  vm.hotel.calificacion.toFixed(1)

      hotelService.updateHotel(vm.hotel).then(function (response) {
        console.log(response.data);
        init();
      });

      vm.calificacion = {};
      $("#advanced").modal('hide');
      $location.path('/principal/hoteles')
    }
   }
})();