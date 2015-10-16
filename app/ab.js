(function() {
  angular.module(BASE_NAME)
  .controller('AbcController', AbcController);

  AbcController.$inject = ['$scope', '$http'];

  function AbcController($scope, $http) {
    getVideos();

    function getVideos() {
      $http.get('http://redtubechallenge.herokuapp.com')
      .success(function(data) {
        $scope.videos = data.videos;
      });
    }
  }
})();

(function() {
  angular.module(BASE_NAME)
  .controller('VideoController', VideoController);

  VideoController.$inject = ['$scope', '$http', '$stateParams', '$sce'];

  function VideoController($scope, $http, $stateParams, $sce) {
    $http.get('http://redtubechallenge.herokuapp.com/' + $stateParams.id)
    .success(function (data, status) {
      $scope.video = data.video;
    });

    $scope.getEmbeded = function getEmbeded(video) {
      return $sce.trustAsResourceUrl('http://embed.redtube.com/player/?id=' + video);
    }
  }
})();

(function() {
  angular.module(BASE_NAME)
  .controller('CommentController', CommentController);

  CommentController.$inject = ['$scope', 'Storage'];

  function CommentController($scope, Storage) {
    $scope.comments = (Storage.findAll('comments') === null ? [] : JSON.parse(Storage.findAll('comments')));

    $scope.insert = function(comment) {
      $scope.comments.push(comment);
      Storage.save('comments', JSON.stringify($scope.comments));
      $scope.comment = {}
    }
  }
})();