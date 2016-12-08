
(function() {

  'use strict';

  angular.module('whiteboardwhere.success')
    .controller('SuccessController', Success);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Success($scope, $location, $window, $routeParams){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.imgData = $routeParams.img;
      window.alert($scope.imgData);
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    