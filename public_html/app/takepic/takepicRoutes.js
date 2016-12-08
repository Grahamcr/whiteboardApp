
(function() {
  
  'use strict';

  angular.module('whiteboardwhere.takepic')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/takepicture', {
        controller: 'TakePicController',
        templateUrl: 'app/takepic/takepic.html'
      });
  }

}());
