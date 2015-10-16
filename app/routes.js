(function() {
  angular
  .module(BASE_NAME)
  .config(Router);

  function Router($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/app/templates/main.html',
        controller: 'AbcController as abcVm',
      })
      .state('video', {
        url: '/video/:id',
        templateUrl: '/app/templates/video.html',
        controller: 'VideoController as videoVm',
      })
  }
})();
