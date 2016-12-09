
(function() {
  
  'use strict';

  angular.module('whiteboardwhere.browse')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/browse', {
        controller: 'BrowseController',
        templateUrl: 'app/browse/browse.html'
      });
  }

}());
