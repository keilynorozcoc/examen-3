(function(){
  'use strict'
  angular
    .module('myApp')
    .controller('usuarioController', usuarioController);
    usuarioController.$inject = ['$http','usuarioService','Upload','ImageService'];
    function usuarioController($http,usuarioService,Upload,ImageService){

    var vm = this;
      vm.usuarios = {};
      vm.cloudObj = ImageService.getConfiguration();

    function init(){
      usuarioService.getUsuarios().then(function (response) {
        vm.usuarios = response.data;

      });
     vm.usuario = {};
   }

    init();

    vm.save = function(){
      usuarioService.setUsuario(vm.usurio);
      init();
    }

    vm.update = function(){
      console.log('update')
      usuarioService.updateUsuario(vm.usuario);
      init();
    }
    vm.getInfo = function(pHotel){
      console.log('getInfo')
      vm.usuario = pUsuario;
    }
    //Limpiar form
    function clear(){
      vm.usuario = {};
    }

   }
})();