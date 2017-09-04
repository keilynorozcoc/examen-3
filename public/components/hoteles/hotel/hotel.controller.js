(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('hotelController', hotelController);
    hotelController.$inject = ['$http','$stateParams','$location','hotelService','Upload','ImageService','lugaresService','SessionService'];

    function hotelController($http,$stateParams,$location,hotelService,Upload,ImageService,lugaresService,SessionService){



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


    //Limpiar form


   }
})();