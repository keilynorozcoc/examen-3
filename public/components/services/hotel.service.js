(function() {
  'use strict'
  angular
  .module('myApp')
  .service('hotelService', hotelService);
  hotelService.$inject = ['$http'];

  function hotelService($http) {
    var publicAPI = {
      getHotel: _getHotel,
      setHotel: _setHotel,
      getHoteles: _getHoteles,
      updateHotel: _updateHotel
    };

    return publicAPI;

    function _setHotel(pHotel) {
      return $http.post('http://localhost:3000/api/save_hotel',pHotel);
    }

    function _getHoteles() {
      return $http.get('http://localhost:3000/api/get_all_hotel');
    }

    function _getHotel(uniqueId) {
      return $http.put('http://localhost:3000/api/get_hotel',uniqueId);
    }

    function _updateHotel(pHotelModified) {
      return $http.put('http://localhost:3000/api/edit_hotel',pHotelModified);
    }

  }
})();
