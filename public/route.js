(function() {
    'use strict';
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('principal', {
                url: '/principal',
                templateUrl: './components/principal.view.html',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/principal.controller.js')
                    }]
                },
                controller: 'principalController',
                controllerAs: 'vm'
            })

            .state('principal.login', {
                url: '/login',
                templateUrl: './components/login/login.view.html',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/login/login.controller.js')
                    }]
                },
                controller: 'loginController',
                controllerAs: 'vm'
            })

            .state('principal.hoteles', {
                url: '/hoteles',
                templateUrl: './components/hoteles/hoteles.view.html',
                css: './css/style.hoteles.css',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/hoteles/hoteles.controller.js')
                    }]
                },
                controller: 'hotelesController',
                controllerAs: 'vm'
            })

            .state('principal.hotel', {
                url: '/hotel?id',
                templateUrl: './components/hoteles/hotel/hotel.view.html',
                css: './css/style.hotel.css',
                resolve: {
                    load: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('./components/hoteles/hotel/hotel.controller.js')
                    }]
                },
                controller: 'hotelController',
                controllerAs: 'vm'
            }) 
            
            .state('principal.usuario', {
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

        $urlRouterProvider.otherwise('/principal/login');
    } //Cierre de la function configuration

})();
