(function() {
    'use strict';
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('hotel', {
                url: '/hotel',
                templateUrl: './components/hotel/hotel.view.html',
                // css: './css/style.hotel.css',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/hotel/hotel.controller.js')
                    }]
                },
                controller: 'hotelController',
                controllerAs: 'vm'
            })
            .state('usuario', {
                url: '/usuario',
                templateUrl: './components/usuario/usuario.view.html',
                // css: './css/style.usuario.css',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/usuario/usuario.controller.js')
                    }]
                },
                controller: 'usuarioController',
                controllerAs: 'vm'
            })

        $urlRouterProvider.otherwise('/');
    } //Cierre de la function configuration

})();
