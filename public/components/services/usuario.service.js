(function(){
  'use strict'
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);
  usuarioService.$inject = ['$http'];

function usuarioService($http) {
	var publicAPI = {
		setUsuario : _setUsuario,
    getUsuario : _getUsuario,
    getUsuarios : _getUsuarios,
		updateUsuario : _updateUsuario
  };

	return publicAPI;

	function _setUsuario(pUsuario){
    return $http.post('http://localhost:3000/api/save_usuario',pUsuario);
    }

  function _getUsuarios(){
     return $http.get('http://localhost:3000/api/get_all_usuario');
  }

  function _getUsuario(uniqueId){
     return $http.get('http://localhost:3000/api/get_usuario',uniqueId);
  }
  
  function _updateUsuario(pUsuarioMod){
      return $http.put('http://localhost:3000/usuario',pUsuarioMod);
    }

}

})();