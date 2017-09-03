(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('hotelController', hotelController);
    hotelController.$inject = ['$http','hotelService','Upload','ImageService'];
    function hotelController($http,hotelService,Upload,ImageService){

    var vm = this;
      vm.hoteles = {};
      vm.cloudObj = ImageService.getConfiguration();

    function init(){
      hotelService.getHoteles().then(function (response) {
        vm.hoteles = response.data;

      });
     vm.hotel = {};
   }

    init();

    vm.save = function(){
      hotelService.setHotel(vm.hotel);
      init();
    }

    vm.update = function(){
      console.log('update')
      hotelService.updateHotel(vm.hotel);
      init();
    }
    vm.getInfo = function(pHotel){
      console.log('getInfo')
      vm.hotel = pHotel;
    }
    //Limpiar form
    function clear(){
      vm.hotel = {};
    }

   }
})();