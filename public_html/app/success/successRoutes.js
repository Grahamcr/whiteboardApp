
(function() {
  
  'use strict';

  angular.module('whiteboardwhere.success')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/success', {
        controller: 'SuccessController',
        templateUrl: 'app/success/success.html'
      });
  }

}());
