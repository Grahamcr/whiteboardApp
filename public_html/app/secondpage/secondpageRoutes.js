
(function() {
  
  'use strict';

  angular.module('whiteboardwhere.secondpage')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/secondpage', {
        controller: 'SecondPageController',
        templateUrl: 'app/secondpage/secondpage.html'
      });
  }

}());
