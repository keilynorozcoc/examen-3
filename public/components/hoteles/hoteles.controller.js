(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('hotelesController', hotelesController);
    hotelesController.$inject = ['$http','$location','hotelService','Upload','ImageService','lugaresService','SessionService'];

    function hotelesController($http,$location,hotelService,Upload,ImageService,lugaresService,SessionService){



    if (SessionService.session() == null) {
      $location.path('/principal/login');
    }
    var vm = this;

    vm.session = SessionService.session();

    vm.hoteles = {};
    vm.lugares = {};

    vm.cloudObj = ImageService.getConfiguration();

    lugaresService.getProvincias().then(function (response) {
      vm.lugares.provincias = response.data;
    });

    lugaresService.getCantones().then(function (response) {
      vm.lugares.cantones = response.data;
    });

    lugaresService.getDistritos().then(function (response) {
      vm.lugares.distritos = response.data;
      console.log(vm.lugares);
    });

    function init(){
      hotelService.getHoteles().then(function (response) {
        vm.hoteles = response.data;
      });      
    }

    init();

    vm.presave= function(update) {
      vm.cloudObj.data.file =document.getElementById("imagen").files[0];

      Upload.upload(vm.cloudObj)

        .success(function(data){

          vm.hotel.imagen = data.url;

          if (!update) {
             vm.save();
          }

        })
        .error(function (data) {
          console.log('errorPhoto'); 
        });

      vm.loading = false;
    }
    
    vm.save = function(){
      hotelService.setHotel(vm.hotel);
      vm.hotel = {};
      document.getElementById("imagen").files[0] = null;
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


   }
})();