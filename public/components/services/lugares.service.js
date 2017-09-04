(function(){
  'use strict'
  angular
  .module('myApp')
  .service('lugaresService', lugaresService);
  lugaresService.$inject = ['$http'];

function lugaresService($http) {
	var publicAPI = {
    getProvincias : _getProvincias,
    getCantones : _getCantones,
    getDistritos : _getDistritos
  };

	return publicAPI;

  function _getProvincias(){
    return $http.get('http://costa-rica-places.herokuapp.com/api/provinces');
  }

  function _getCantones(){
    return $http.get('http://costa-rica-places.herokuapp.com/api/cantons');
  }

  function _getDistritos(){
    return $http.get('http://costa-rica-places.herokuapp.com/api/districts');
  }

	// function _setLugares(pUsuario){
 //    return $http.post('http://localhost:3000/api/save_usuario',pUsuario);
 //    }
  
 //  function _updateUsuario(pUsuarioMod){
 //      return $http.put('http://localhost:3000/usuario',pUsuarioMod);
 //    }

}

})();