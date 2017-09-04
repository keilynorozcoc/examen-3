(function(){
	'use strict';
	angular
	.module('myApp')
	.service('AuthService', AuthService);

	AuthService.$inject = ['$q','$http','SessionService','usuarioService'];

	function AuthService($q,$http, SessionService, usuarioService){
		var service = {
			logIn : _logIn,
			logOut : _logOut,
			getAuthUser: _getAuthUser
		};
		return service;
  	}
	
	function _logIn(usuario){

		usuarioService.getUsuario({"correo":usuario.correo}).then(function (response) {
	      return response.data;
	      
	    });			// var userList = usuarioService.getUsers();
			// var tamanno = userList.length;
			// var logedRes = false;
		
			// for(var i = 0; i < tamanno; i++){
			// 	if(userList[i].email === credentials.email && userList[i].password === credentials.password){
			// 		logedRes = true;
			// 		SessionService.create(userList[i]);
			// 	}
		
			// };
		
			// return logedRes;
		
		}

		function _logOut(){
			SessionService.destroy();
		}

		function _getAuthUser(){
			var userLogged = JSON.parse(localStorage.getItem('session'));

			return userLogged
		}


})();
