(function(){
	'use strict';
	angular
	.module('myApp')
	.service('SessionService', SessionService);

	SessionService.$inject = [];
	/*Funcion para guardar la sesion*/
	function SessionService(){

		var service = {
			// logIn : _logIn,
			create : _create,
			destroy : _destroy,
			session: _session
		};
		return service;

		function _create(user) {
			localStorage.setItem('session', JSON.stringify(user));
		};

		/*Funcion para borrar la sesion*/
		function _destroy(){
			localStorage.removeItem('session');
		};

		function _session() {
			return JSON.parse(localStorage.getItem('session'));
		}
	};
})()