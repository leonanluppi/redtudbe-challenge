'use strict';

(function() {
  angular
  .module(BASE_NAME)
  .factory('Storage', Storage);

  Storage.$inject = ['$window'];

  function Storage($window) {
    var factory = {},
        localStorage = $window.localStorage;

    factory.save = function(key, item) {
      return localStorage.setItem(key, item)
    };

    factory.findAll = function (item) {
      return localStorage.getItem(item);
    };

    return factory;
  }
})();
