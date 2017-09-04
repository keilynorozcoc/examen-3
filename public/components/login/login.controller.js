(function () {
    'use strict';
    angular
    .module('myApp')
    .controller('loginController', loginController);

    loginController.$inject = ['$location','usuarioService','SessionService' ];

    function loginController($location,usuarioService,SessionService){

      var vm = this;

      vm.login = function () {

        usuarioService.getUsuario({"correo":vm.usuario.correo}).then(function (response) {


          var data = response.data;

          if (data.contrasenna == vm.usuario.contrasenna && data.correo == vm.usuario.correo) {

            SessionService.create(data);   
            
            $location.path('/principal/hoteles');   
          }          
        });    


        
      }

      // vm.user = {};
      /*Valida que los datos sean correctos*/
      // vm.login = function(credentials){
      //   var resp = AuthService.logIn(credentials);
      //   var resp2 = AuthServiceStudent.logIn(credentials);
      //   var resp3 = AuthServiceTeacher.logIn(credentials);
      //
      //   if (resp === true){
      //     $location.path('/administrator');
      //   }else {
      //     if (resp2 === true) {
      //       $location.path('/profileStud');
      //     }else {
      //       if (resp3 === true) {
      //         $location.path('/profileInst')
      //       }
      //     }
      //   }
      //
      // }
    }

})();
