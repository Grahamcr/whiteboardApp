
(function() {
  
  'use strict';

  angular.module('whiteboardwhere.upload')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/upload', {
        controller: 'UploadController',
        templateUrl: 'app/upload/upload.html'
      });
  }

}());
