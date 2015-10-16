'use strict';

// Define Application base name
var BASE_NAME = 'abc';

/**
 * Main app
 */
(function() {

  angular.module(BASE_NAME,
  [
    // DEPENDENCIES
    'ui.router',
    'ngStorage'
  ])

  .config(appConfig);

  function appConfig ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();
